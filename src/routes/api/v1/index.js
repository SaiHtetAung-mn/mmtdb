const v1Router = require('express').Router();
const portalUserRouter = require('./portal-user.route.v1');

v1Router.use('/portal-users', portalUserRouter);

module.exports = v1Router;