
const Task = require('../../models/Task/Task');
const { validateCreateUpdateOneRequest } = require('./task.requests');
const { NotFoundError } = require('../../errors/errorTypes');
const { handleHTTPErrors } = require('../../errors/handleErrors');


exports.getOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const task = await Task.findById(id);

    if (!task) {

      throw new NotFoundError('Task');

    }

    res.send(task);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.getAll = async (req, res) => {

  try {

    const tasks = await Task.find();

    res.send(tasks);


  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.createOne = async ({ body }, res) => {

  try {

    const newTask = await new Task(body).save();

    res.status(201).send(newTask);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.updateOne = async ({ params, body }, res) => {

  try {

    const { id } = params;

    // Validate the request body
    const validatedBody = await validateCreateUpdateOneRequest(body);

    // Find the appropriate task
    const task = await Task.findById(id);

    if (!task) {

      // If no task is found return a 404
      throw new NotFoundError('Task');

    }

    // Iterate through the task document to update it's fields
    Object.keys(validatedBody).forEach((updateField) => {

      task[updateField] = validatedBody[updateField];

      return false;

    });

    // Save the task
    await task.save();

    // And return it
    res.send(task);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};

exports.deleteOne = async ({ params }, res) => {

  try {

    const { id } = params;

    // Find the task and delete it
    const user = await Task.findByIdAndDelete(id);

    if (!user) {

      throw new NotFoundError('Task');

    }

    res.send(user);

  } catch (e) {

    handleHTTPErrors(e, res);

  }

};
