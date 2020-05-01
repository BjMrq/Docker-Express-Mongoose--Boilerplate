require('dotenv').config();
const dbConfig = require('./config.database');
const serverConfig = require('./config.server');
const tokensConfig = require('./config.tokens');

const config = {
  ...dbConfig,
  ...serverConfig,
  ...tokensConfig
};

module.exports = config;
