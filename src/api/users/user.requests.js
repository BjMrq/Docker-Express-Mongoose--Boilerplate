const Joi = require('@hapi/joi');

const createOneSchema = Joi.object({
  email: Joi.string().email()
    .required(),
  name    : Joi.string().required(),
  password: Joi.string().required()
});

const validateCreateUpdateOneRequest = async (requestParam) => {

  try {

    return await createOneSchema.validateAsync(requestParam);

  } catch (error) {

    throw new Error(error.details[0].message);

  }

};

module.exports = { validateCreateUpdateOneRequest };
