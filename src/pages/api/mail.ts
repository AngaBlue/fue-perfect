import { NextApiHandler } from 'next';
import NodeMailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { Message, message } from '../../data/schemas';
import authorize from '../../util/authorize';

const imagePattern = /src="(?<image>data:image\/.+)"/g;

// eslint-disable-next-line consistent-return
const mail: NextApiHandler = async (req, res): Promise<void> => {
    if (req.method === 'POST') {
        // Authenticate
        if (!authorize(req.cookies)) res.status(401).send('Unauthenticated');

        // Validate
        const validation = message.validate(req.body);
        if (validation.error) return res.status(400).json(validation.error);
        const { credentials, subject }: Message = validation.value;
        let { content }: Message = validation.value;

        // Find attachments
        const matches: { index: number; image: string }[] = [];

        let m;
        // eslint-disable-next-line no-cond-assign
        while ((m = imagePattern.exec(content)) !== null) {
            if (m.index === imagePattern.lastIndex) imagePattern.lastIndex++;

            matches.push({ index: m.index, image: m.groups?.image ?? '' });
        }

        const attachments: Mail.Attachment[] = matches.reverse().map(({ index, image }, cid) => {
            content = `${content.substring(0, index)}cid:${cid}${content.substring(image.length)}`;
            return {
                cid: cid.toString(),
                content: image,
                filename: cid.toString()
            };
        });

        // Create Transport
        const transport = NodeMailer.createTransport({
            service: credentials.provider.toLowerCase(),
            auth: {
                user: credentials.email,
                pass: credentials.password
            }
        });

        // Send
        const err = await new Promise<Error | null>(resolve => {
            const options: Mail.Options = {
                from: credentials.email,
                to: credentials.recipient,
                subject,
                html: content,
                attachments
            };
            transport.sendMail(options, resolve);
        });

        if (err) return res.status(500).send({ name: 'Fout', message: err.message });
        return res.status(200).send('OK');
    }
    return res.status(405).send('Method Not Allowed');
};

export default mail;
