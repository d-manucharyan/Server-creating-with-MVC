const Joi = require('joi');
const schema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .required(),
    age: Joi
        .number()
        .min(18)
        .max(65)
        .required(),
    password: Joi
        .string()
        .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$'))
        .required(),
    repeat_password: Joi.ref('password'),
    email: Joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } })
        .required()
})

module.exports = { schema }