const Joi = require('@hapi/joi');
const { ValidationError } = require('../../errors/errorTypes');

const createOneSchema = Joi.object({
  description: Joi.string(),
  completed  : Joi.boolean()
});

const validateCreateUpdateOneRequest = async (requestParam) => {

  try {

    return await createOneSchema.validateAsync(requestParam);

  } catch (error) {

    throw new ValidationError(error.details[0].message);

  }

};

module.exports = { validateCreateUpdateOneRequest };
