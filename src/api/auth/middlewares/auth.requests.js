const Joi = require('@hapi/joi');
const { ValidationError } = require('../../../errors/errorTypes');

const loginSchema = Joi.object({
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .required()
});

const validateLoginRequest = async ({ body }, res, next) => {

  try {

    await loginSchema.validateAsync(body);

    next();

  } catch (error) {

    throw new ValidationError(error.details[0].message);

  }


};

module.exports = { validateLoginRequest };
