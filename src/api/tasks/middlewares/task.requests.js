const Joi = require('@hapi/joi');
const { ValidationError } = require('../../../errors/errorTypes');
const errorEmitter = require('../../../errors/errorEmitter');

const createOneSchema = Joi.object({
  description: Joi.string(),
  completed  : Joi.boolean()
});

const validateRequest = async ({ body }, res, next) => {

  try {

    await createOneSchema.validateAsync(body);

    next();

  } catch (error) {

    const validationError = new ValidationError(error.details[0].message,);

    errorEmitter.emit('error', validationError, res);

  }

};

module.exports = { validateRequest };
