const express = require('express');
const userRouter = require('../api/users');
const taskRouter = require('../api/tasks');
const authRouter = require('../api/auth');

// Create app
const app = express();

// Use json for api
app.use(express.json());

// Register routers
app.use(userRouter);
app.use(authRouter);
app.use(taskRouter);

module.exports = { app };
