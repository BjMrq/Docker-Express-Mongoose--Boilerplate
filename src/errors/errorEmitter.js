const logger = require('../config/logger');
const EventEmitter = require('events');

// Construct an event emitter for errors
const errorEmitter = new EventEmitter();

errorEmitter.on('error', async (error) => {

  // Every error are logged
  logger.error(`${error.name} | ${error.message} | stack: ${error.stack}`);

});

module.exports = errorEmitter;
