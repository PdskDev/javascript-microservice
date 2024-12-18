const dotenv = require('dotenv');
const Joi = require('joi');
const envVarsSchema = Joi.object()
  .keys({
    SERVER_PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('MongoDB URL'),
  })
  .unknown();

function createConfig(configPath) {
  dotenv.config({ path: configPath });
  const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    port: envVars.SERVER_PORT,
    mongo: {
      url: envVars.MONGODB_URL,
    },
  };
}

module.exports = { createConfig };
