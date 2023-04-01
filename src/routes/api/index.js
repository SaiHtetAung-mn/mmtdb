const apiRootRouter = require('express').Router();
const v1Router = require('./v1');

apiRootRouter.use('/v1', v1Router);

module.exports = apiRootRouter;
