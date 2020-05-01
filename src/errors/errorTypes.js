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

class LoginError extends Error {

  constructor() {

    super('Unable to login');
    this.name = 'LoginError';

  }

}

module.exports = {
  ValidationError, NotFoundError, LoginError
};
