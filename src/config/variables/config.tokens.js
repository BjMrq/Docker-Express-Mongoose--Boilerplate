const joi = require('@hapi/joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = joi
  .object({
    JWT_TOKEN: joi.string().required(),
  })
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env);

if (error) {

  throw new Error(`Config validation error: ${error.message}`);

}

const config = {

  jwtToken: envVars.JWT_TOKEN,

};

module.exports = config;
