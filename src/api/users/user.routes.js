const express = require('express');
const controller = require('./user.controller');

const userRouter = new express.Router();

userRouter
  .post('/users', controller.createOne)
  .get('/users', controller.getAll)
  .get('/users/:id', controller.getOne)
  .patch('/users/:id', controller.updateOne)
  .delete('/users/:id', controller.deleteOne);

module.exports = userRouter;
