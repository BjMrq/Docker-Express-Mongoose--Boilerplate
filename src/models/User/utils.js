const bcrypt = require('bcryptjs');


async function hashPassword(next) {

  // Check if the user is modified on the user document
  if (this.isModified('password')) {

    this.password = await bcrypt.hash(this.password, 12);

  }

  next();

}

module.exports = { hashPassword };
