const logger = require('../config/logger');
const handleHTTPErrors = require('./handleHTTPErrors');
const EventEmitter = require('events');

// Construct an event emitter for errors
const errorEmitter = new EventEmitter();

errorEmitter.on('error', async (error, res = null) => {

  // Every error are logged
  logger.error(`${error.name} | ${error.message} | stack: ${error.stack}`);

  if (res) {

    handleHTTPErrors(error, res);

  }

});

module.exports = errorEmitter;
