
const User = require('../../models/User/User');
const { validateLoginRequest } = require('./auth.requests');
const { NotFoundError } = require('../../errors/errorTypes');
const { handleHTTPErrors } = require('../../errors/handleErrors');


exports.logIn = async ({ body }, res) => {

  try {

    // Validate the request body
    const validatedBody = await validateLoginRequest(body);

    // Find the user from the send credentials
    const user = await User.findByCredentials(validatedBody);

    // Generate JWT token
    const token = await user.generateAuthToken();

    // Send back the token
    res.send({
      user, token
    });

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};
