import { IpcMainEvent } from "electron";
import { Provider, Customer, Message } from "../../src/data/form";
import nodemailer from "nodemailer";

export type sendMailResponse = Error | boolean;

export default function sendMail(event: IpcMainEvent, provider: Provider, customer: Customer, message: Message) {
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
            to: customer.email,
            subject: message.subject,
            html: message.content
        }, function (err) {
            if (err)
                event.reply(err);
            else
                event.reply('sendMailResponse', true);
        }
    );
}