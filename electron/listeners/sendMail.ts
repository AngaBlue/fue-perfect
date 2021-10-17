import { IpcMainEvent } from 'electron';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';
import fs from 'fs';
import { Message } from '../../src/data/messages';
import { ProviderState } from '../../src/data/provider';

export type SendMailResponse = Error | boolean;

export default function sendMail(event: IpcMainEvent, provider: ProviderState, message: Message & { recipient: string }) {
    // Replace Attachments
    const attachments: Mail.Attachment[] = [];
    let cid = 0;
    let { content } = message;
    message.images.forEach(i => {
        // cid.format
        const fileCID = cid.toString();
        // eslint-disable-next-line no-param-reassign
        content = content.split(i).join(`cid:${fileCID}`);
        attachments.push({
            path: i[0] === '/' ? path.join(__dirname, '../renderer', i) : i,
            cid: fileCID,
            filename: fileCID
        });
        // Increment CID
        cid++;
    });
    event.reply('debug', { attachments, content });
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
            html: content,
            attachments
        },
        err => {
            if (err) event.reply('sendMailResponse', err);
            else event.reply('sendMailResponse', true);
        }
    );
    // Create Dir
    const dir = path.join(__dirname, './logs/');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    // Create File
    const filename = `${new Date().toString().split(' GMT')[0].replace(/:/g, '-')}.html`;
    fs.writeFile(path.join(dir, filename), message.content, (err) => {
        if (err) event.reply('saveFile', err);
        else event.reply(path.join(dir, filename));
    });
}
