const deviceRouter = require('express').Router();
const controller = require('../../../controllers/device.controller');

/**
* @swagger
* paths:
*  /devices/{device_id}:
*    get:
*     summary: Return device detail
*     security:
*      - BearerAuth: []
*     tags: [Device]
*     parameters:
*      - in: path
*        name: device_id
*        schema: 
*         type: string
*         required: true
*         description: Device id
*     responses:
*      200: 
*        description: Success
*      404: 
*        description: Device not found
*/
deviceRouter.get('/:id', controller.getDeviceDetail);

module.exports = deviceRouter;