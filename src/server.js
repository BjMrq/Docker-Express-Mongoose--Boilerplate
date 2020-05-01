const express = require('express');
const userRouter = require('./api/users');
const taskRouter = require('./api/tasks');

// Create app
const app = express();

// Use json for api
app.use(express.json());

// Register routers
app.use(userRouter);
app.use(taskRouter);

module.exports = { app };
