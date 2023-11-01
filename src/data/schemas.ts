import Joi from 'joi';

export const password = Joi.string().max(64).required();

export const message = Joi.object({
    name: Joi.string().max(64).required(),
    recipient: Joi.string().email().required(),
    subject: Joi.string().max(256).required(),
    cc: Joi.string().max(256).allow('').required(),
    bcc: Joi.string().max(256).allow('').required(),
    content: Joi.string().max(1_024_000).required()
});
export interface Message {
    name: string;
    recipient: string;
    cc: string;
    bcc: string;
    subject: string;
    content: string;
}

export const reminderMessage = Joi.object({
    name: Joi.string().max(64).required(),
    recipient: Joi.string().email().required(),
    subject: Joi.string().max(256).required(),
    content: Joi.string().max(1_024_000).required(),
    date: Joi.date().required().timestamp('javascript')
});
export interface ReminderMessage extends Message {
    date: string;
}

export interface KVMessage extends ReminderMessage {
    token: string;
    email: string;
}
