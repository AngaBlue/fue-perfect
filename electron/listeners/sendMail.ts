import { IpcMainEvent } from 'electron';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';
import { Provider, Message } from '../../src/data/form';

export type SendMailResponse = Error | boolean;

export default function sendMail(event: IpcMainEvent, provider: Provider, message: Message & { recipient: string }) {
    // Replace Attachments
    const attachments: Mail.Attachment[] = [];
    let cid = 0;
    message.images.forEach(i => {
        // cid.format
        const fileCID = cid.toString();
        // eslint-disable-next-line no-param-reassign
        message.content = message.content.split(i).join(`cid:${fileCID}`);
        attachments.push({
            path: i[0] === '/' ? path.join(__dirname, '../renderer', i) : i,
            cid: fileCID,
            filename: fileCID
        });
        // Increment CID
        cid++;
    });
    // Send Mail
    const transport = nodemailer.createTransport({
        service: provider.provider.toLowerCase(),
        auth: {
            user: provider.email,
            pass: provider.password
        }
    });
    transport.sendMail(
        {
            from: provider.email,
            to: provider.recipient,
            subject: message.subject,
            html: message.content,
            attachments
        },
        (err) => {
            if (err) event.reply('sendMailResponse', err);
            else event.reply('sendMailResponse', true);
        }
    );
}
