import { NextApiHandler } from 'next';
import NodeMailer from 'nodemailer';
import inlineBase64 from 'nodemailer-plugin-inline-base64';
import { kv } from '@vercel/kv';
import Mail from 'nodemailer/lib/mailer';
import { KVMessage } from '../../data/schemas';

// eslint-disable-next-line consistent-return
const processMail: NextApiHandler = async (req, res): Promise<void> => {
    // Send
    for (const key of await kv.keys('reminder:*')) {
        const mail: KVMessage | null = (await kv.hgetall(key)) as KVMessage | null;
        if (!mail) continue;

        // Ignore if we are not yet due to send the reminder
        if (Date.now() < Number.parseInt(mail.date)) continue;

        // Create Transport
        const transport = NodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: mail.email,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: mail.token
            }
        });

        transport.use('compile', inlineBase64());

        const err = await new Promise<Error | null>(resolve => {
            const options: Mail.Options = {
                from: {
                    name: mail.name,
                    address: mail.email
                },
                to: mail.recipient,
                subject: mail.subject,
                html: mail.content
            };
            transport.sendMail(options, resolve);
        });

        if (!err) kv.del(key);
    }

    // Otherwise, return OK
    return res.status(200).send('OK');
};

export default processMail;
