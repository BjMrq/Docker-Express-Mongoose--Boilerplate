const logger = require('../config/logger');

const handleHTTPErrors = (error, res) => {

  logger.error(`${error.name} | ${error.message} | stack: ${error.stack}`);

  if (error.name === 'ValidationError') {

    res.status(422).send(error.message);

  }

  if (error.name === 'NotFoundError') {

    res.status(400).send(error.message);

  }

  if (error.name === 'LoginError') {

    res.status(401).send(error.message);

  }

  res.status(500).send();

};

module.exports = { handleHTTPErrors };
