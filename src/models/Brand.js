const mongoose = require('mongoose');
const { BRAND } = require('../database/constant.db');
const brandSchema = require('../database/schemas/brand.schema');

const Brand = mongoose.model(BRAND.MODEL_NAME, brandSchema, BRAND.COLLECTION_NAME);

module.exports = Brand;