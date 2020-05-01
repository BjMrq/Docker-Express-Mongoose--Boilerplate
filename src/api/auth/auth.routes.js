const express = require('express');
const controller = require('./auth.controller');

const userRouter = new express.Router();

userRouter
  .post('/login', controller.logIn);

module.exports = userRouter;
