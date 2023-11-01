import Joi from 'joi';

export const password = Joi.string().max(64).required();

export const message = Joi.object({
    name: Joi.string().max(64).required(),
    recipient: Joi.string().email().required(),
    subject: Joi.string().max(256).required(),
    content: Joi.string().max(1_024_000).required()
});
export interface Message {
    name: string;
    recipient: string;
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
export interface ReminderMessage {
    name: string;
    recipient: string;
    subject: string;
    content: string;
    date: string;
}

export interface KVMessage extends ReminderMessage {
    token: string;
    email: string;
}
