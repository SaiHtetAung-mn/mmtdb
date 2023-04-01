const v1Router = require('express').Router();
const testRouter = require('./test.route');

v1Router.use('/test', testRouter);

module.exports = v1Router;