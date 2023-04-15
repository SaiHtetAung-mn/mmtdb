const portalUserRouter = require('express').Router();
const controller = require('../../../controllers/portal-user.controller');
const { authenticate } = require('../../../middlewares/portal-user.middleware');

/**
* @swagger
* paths:
*  /portal-users:
*    get:
*     summary: Return list of portal users
*     security:
*      - BearerAuth: []
*     tags: [Portal User]
*     responses:
*      200: 
*        description: Success
*      401: 
*        description: Unauthorized to get portal users list
*/
portalUserRouter.get('/', authenticate().SuperAdmin, controller.getPortalUserList);

/**
* @swagger
* paths:
*  /portal-users/login:
*    post:
*     summary: Portal user login
*     security:
*      - security_name: []
*     tags: [Portal User]
*     parameters:
*      - in: body
*        name: login
*        schema: 
*         type: object
*         required: true
*         properties:
*          email:
*           type: string
*          password:
*           type: string
*     responses:
*      200: 
*        description:  Success
*        content: 
*          application/json:
*            schema: 
*              type: object
*              properties: 
*                   token: 
*                       type: string
*                       description: JWT token for api call
*                   user_id: 
*                       type: string
*                       description: Authenticated user id
*      401: 
*        description: Wrong credentials
*/
portalUserRouter.post('/login', controller.login);

module.exports = portalUserRouter;