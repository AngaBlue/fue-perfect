import Joi from 'joi';

// eslint-disable-next-line import/prefer-default-export
export const password = Joi.string().max(64).required();
