const Joi = require('@hapi/joi');

const createOneSchema = Joi.object({
  description: Joi.string().required(),
  completed  : Joi.boolean()
});

const validateCreateUpdateOneRequest = async (requestParam) => {

  try {

    return await createOneSchema.validateAsync(requestParam);

  } catch (error) {

    throw new Error(error.details[0].message);

  }

};

module.exports = { validateCreateUpdateOneRequest };
