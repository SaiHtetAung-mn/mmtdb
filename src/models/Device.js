const mongoose = require('mongoose');
const { DEVICE } = require('../database/constant.db');
const deviceSchema = require('../database/schemas/device.schema');

const Device = mongoose.model(DEVICE.MODEL_NAME, deviceSchema, DEVICE.COLLECTION_NAME);

module.exports = Device;