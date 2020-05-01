const Joi = require('@hapi/joi');
const { ValidationError } = require('../../errors/errorTypes');

const loginSchema = Joi.object({
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .required()
});

const validateLoginRequest = async (requestParam) => {

  try {

    return await loginSchema.validateAsync(requestParam);

  } catch (error) {

    throw new ValidationError(error.details[0].message);

  }

};

module.exports = { validateLoginRequest };
