
const User = require('../../models/User/User');
const { validateCreateUpdateOneRequest } = require('./user.requests');
const { NotFoundError } = require('../../errors/errorTypes');
const { handleHTTPErrors } = require('../../errors/handleErrors');


exports.getOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const user = await User.findById(id);

    if (!user) {

      throw new NotFoundError('User');

    }

    res.send(user);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.getAll = async (req, res) => {

  try {

    const users = await User.find();

    res.send(users);


  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.createOne = async ({ body }, res) => {

  try {

    // Validate the request body
    const validatedBody = await validateCreateUpdateOneRequest(body);

    // Create new user
    const newUser = await new User(validatedBody).save();

    // And send it back
    res.status(201).send(newUser);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.updateOne = async ({ params, body }, res) => {

  try {

    const { id } = params;

    // Validate the request body
    const validatedBody = await validateCreateUpdateOneRequest(body);

    // Find the appropriate user
    const user = await User.findById(id);

    if (!user) {

      // If no user is found return a 404
      throw new NotFoundError('User');

    }

    // Iterate through the user document to update it's fields
    Object.keys(validatedBody).forEach((updateField) => {

      user[updateField] = validatedBody[updateField];

      return false;

    });

    // Save the user
    await user.save();

    // And return it
    res.send(user);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.deleteOne = async ({ params }, res) => {

  try {

    const { id } = params;

    // Find the user and delete it
    const user = await User.findByIdAndDelete(id);

    if (!user) {

      throw new NotFoundError('User');

    }

    res.send(user);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};
