import Joi from "joi";

const registerUserValidator = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const loginUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export { registerUserValidator, loginUserValidator };
