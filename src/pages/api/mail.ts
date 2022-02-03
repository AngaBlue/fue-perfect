import { NextApiHandler } from 'next';
import NodeMailer from 'nodemailer';
import { Message, message } from '../../data/schemas';
import authorize from '../../util/authorize';

// eslint-disable-next-line consistent-return
const mail: NextApiHandler = async (req, res): Promise<void> => {
    if (req.method === 'POST') {
        // Authenticate
        if (!authorize(req.cookies)) res.status(401).send('Unauthenticated');

        // Validate
        const validation = message.validate(req.body);
        if (validation.error) return res.status(400).json(validation.error);
        const { credentials, subject, content }: Message = validation.value;

        // Find attachments

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
            const options = {
                from: credentials.email,
                to: credentials.recipient,
                subject,
                html: content
            };
            transport.sendMail(options, resolve);
        });

        if (err) return res.status(500).send({ name: 'Fout', message: err.message });
        return res.status(200).send('OK');
    }
    return res.status(405).send('Method Not Allowed');
};

export default mail;
