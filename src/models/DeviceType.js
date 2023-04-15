const mongoose = require('mongoose');
const { DEVICE_TYPE } = require('../database/constant.db');
const deviceTypeSchema = require('../database/schemas/device-type.schema');

const DeviceType = mongoose.model(DEVICE_TYPE.MODEL_NAME, deviceTypeSchema, DEVICE_TYPE.COLLECTION_NAME);

module.exports = DeviceType;