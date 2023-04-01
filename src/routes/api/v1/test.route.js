const testRouter = require('express').Router();
const controller = require('../../../controllers/test.controller');

testRouter.get('/', controller.justTest);

module.exports = testRouter;