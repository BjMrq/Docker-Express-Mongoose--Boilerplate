
const Task = require('../../models/Task/Task');


exports.getOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const task = await Task.findById(id);

    if (!task) {

      res.status(404).send();

    }

    res.send(task);

  } catch (e) {

    res.status(500).send();

  }

};

exports.getAll = async (req, res) => {

  try {

    const tasks = await Task.find();

    res.send(tasks);


  } catch (e) {

    res.status(500).send(e.message);

  }

};

exports.createOne = async ({ body }, res) => {

  try {

    const newTask = await new Task(body).save();

    res.status(201).send(newTask);

  } catch (e) {

    res.status(500).send(e.message);

  }

};

exports.updateOne = async ({ params, body }, res) => {

  try {

    const { id } = params;

    const task = await Task
      .findByIdAndUpdate(id, body, {
        new          : true,
        runValidators: true,
      });

    if (!task) {

      res.status(404).send();

    }

    res.send(task);

  } catch (e) {

    res.status(500).send();

  }

};

exports.deleteOne = async ({ params }, res) => {

  try {

    const { id } = params;

    const user = await Task.findByIdAndDelete(id);

    if (!user) {

      res.status(404).send();

    }

    res.send(user);

  } catch (e) {

    res.status(500).send();

  }

};
