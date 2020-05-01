require('dotenv').config();
const dbConfig = require('./components/config.database');
const serverConfig = require('./components/config.server');

const config = {
  ...dbConfig,
  ...serverConfig
};

module.exports = config;
