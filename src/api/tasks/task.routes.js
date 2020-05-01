const express = require('express');
const controller = require('./task.controller');

const taskRouter = new express.Router();

taskRouter
  .post('/tasks', controller.createOne)
  .get('/tasks', controller.getAll)
  .get('/tasks/:id', controller.getOne)
  .patch('/tasks/:id', controller.updateOne)
  .delete('/tasks/:id', controller.deleteOne);

module.exports = taskRouter;
