const mongoose = require('mongoose');
const { passwordValidation, emailValidation } = require('./validations');

module.exports = mongoose.model('User', {

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

      passwordValidation(password);

    }
  },
  email: {
    type     : String,
    required : true,
    trim     : true,
    lowercase: true,
    validate(email) {

      emailValidation(email);

    }
  },
  age: { type: Number, }

});

