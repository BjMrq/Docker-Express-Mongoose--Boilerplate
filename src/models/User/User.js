const mongoose = require('mongoose');
const { passwordValidation, emailValidation } = require('./validations');
const { LoginError } = require('./../../errors/errorTypes');
const { hashPassword, findByCredentials } = require('./credential.utils');


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
    unique   : true,
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

// Create a function to find a user depending of the passed credentials
userSchema.statics.findByCredentials = findByCredentials;

// Hash the password before saving
userSchema.pre('save', hashPassword);

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;

