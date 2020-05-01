const mongoose = require('mongoose');
const { passwordValidation, emailValidation } = require('./validations');
const { hashPassword } = require('./utils');

// The schema that define the User model
const userSchema = new mongoose.Schema({

  name: {
    type    : String,
    required: true,
    trim    : true
  },
  password: {
    type    : String,
    required: true,
    trim    : true,
    validate(password) {

      // Validate password before hashing
      passwordValidation(password);

    }
  },
  email: {
    type     : String,
    required : true,
    trim     : true,
    lowercase: true,
    validate(email) {

      // Validate email
      emailValidation(email);

    }
  },
  age: { type: Number, }

});

// Hash the password
userSchema.pre('save', hashPassword);

module.exports = mongoose.model('User', userSchema);

