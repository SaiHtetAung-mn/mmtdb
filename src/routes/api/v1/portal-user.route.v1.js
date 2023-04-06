const portalUserRouter = require('express').Router();
const controller = require('../../../controllers/portal-user.controller');
const { authenticate } = require('../../../middlewares/portal-user.middleware');

portalUserRouter.get('/', authenticate().SuperAdmin, controller.getPortalUserList);

portalUserRouter.post('/login', controller.login);

module.exports = portalUserRouter;