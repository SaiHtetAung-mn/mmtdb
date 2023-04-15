const portalUserRouter = require('./portal-user.route.v1');
const deviceRouter = require('./device.route.v1');

const v1Router = require('express').Router();

v1Router.use('/portal-users', portalUserRouter);
v1Router.use('/devices', deviceRouter);

module.exports = v1Router;