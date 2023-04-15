const mongoose = require('mongoose');
const { DEVICE_SERIES } = require('../database/constant.db');
const deviceSeriesSchema = require('../database/schemas/device-series.schema');

const DeviceSeries = mongoose.model(DEVICE_SERIES.MODEL_NAME, deviceSeriesSchema, DEVICE_SERIES.COLLECTION_NAME);

module.exports = DeviceSeries;