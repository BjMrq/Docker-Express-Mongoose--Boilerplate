
const User = require('../../models/User/User');
const { validateCreateUpdateOneRequest } = require('./user.requests');


exports.getOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const user = await User.findById(id);

    if (!user) {

      res.status(404).send();

    }

    res.send(user);

  } catch (e) {

    res.status(500).send();

  }

};

exports.getAll = async (req, res) => {

  try {

    const users = await User.find();

    res.send(users);


  } catch (e) {

    res.status(500).send(e.message);

  }

};

exports.createOne = async ({ body }, res) => {

  try {

    const validatedBody = await validateCreateUpdateOneRequest(body);

    const newUser = await new User(validatedBody).save();

    res.status(201).send(newUser);

  } catch (e) {

    res.status(500).send(e.message);

  }

};

exports.updateOne = async ({ params, body }, res) => {

  try {

    const { id } = params;

    const validatedBody = await validateCreateUpdateOneRequest(body);

    const user = await User
      .findByIdAndUpdate(id, validatedBody, {
        new          : true,
        runValidators: true,
      });

    if (!user) {

      res.status(404).send();

    }

    res.send(user);

  } catch (e) {

    res.status(500).send();

  }

};

exports.deleteOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {

      res.status(404).send();

    }

    res.send(user);

  } catch (e) {

    res.status(500).send();

  }

};
