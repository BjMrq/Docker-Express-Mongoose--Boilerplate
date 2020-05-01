
const User = require('../../models/User/User');
const { validateLoginRequest } = require('./auth.requests');
const { NotFoundError } = require('../../errors/errorTypes');
const { handleHTTPErrors } = require('../../errors/handleErrors');


exports.logIn = async ({ body }, res) => {

  try {

    const validatedBody = await validateLoginRequest(body);

    const user = await User.findByCredentials(validatedBody);

    res.send(user);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};
