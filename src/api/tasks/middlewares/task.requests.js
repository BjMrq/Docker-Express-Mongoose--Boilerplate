const Joi = require('@hapi/joi');
const { ValidationError } = require('../../../errors/errorTypes');
const handleHTTPErrors = require('../../../errors/handleHTTPErrors');

const createOneSchema = Joi.object({
  description: Joi.string(),
  completed  : Joi.boolean()
});

const validateRequest = async ({ body }, res, next) => {

  try {

    await createOneSchema.validateAsync(body);

    next();

  } catch (error) {

    handleHTTPErrors(new ValidationError(error.details[0].message,), res);

  }

};

module.exports = { validateRequest };
