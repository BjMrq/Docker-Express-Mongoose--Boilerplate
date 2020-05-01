const bcrypt = require('bcryptjs');
const { LoginError } = require('./../../errors/errorTypes');


async function hashPassword(next) {

  // Check if the user is modified on the user document
  if (this.isModified('password')) {

    this.password = await bcrypt.hash(this.password, 12);

  }

  next();

}

async function findByCredentials(credentials) {

  const { email, password } = credentials;

  const user = await this.findOne({ email });

  if (!user) {

    throw new LoginError();

  }

  const authenticated = await bcrypt.compare(password, user.password);

  if (!authenticated) {

    throw new LoginError();

  }

  return user;

}

module.exports = {
  hashPassword, findByCredentials
};
