class ValidationError extends Error {

  constructor(message) {

    super(`The validation failed: ${message}`);
    this.name = 'ValidationError';

  }

}

class NotFoundError extends Error {

  constructor(message) {

    super(`Not found: ${message}`);
    this.name = 'NotFoundError';

  }

}

module.exports = {
  ValidationError, NotFoundError
};
