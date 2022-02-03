import Joi from 'joi';

export const password = Joi.string().max(64).required();

export const message = Joi.object({
    credentials: Joi.object({
        provider: Joi.string().valid('Gmail', 'Hotmail').required(),
        email: Joi.string().email().required(),
        password: Joi.string().max(128).required(),
        recipient: Joi.string().email().required()
    }).required(),
    subject: Joi.string().max(256).required(),
    content: Joi.string().max(1_024_000).required()
});
export interface Message {
    credentials: {
        provider: string;
        email: string;
        password: string;
        recipient: string;
    };
    subject: string;
    content: string;
}
