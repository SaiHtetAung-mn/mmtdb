const mongoose = require('mongoose');
const specsSchema = require('../database/schemas/specs.schema');
const { SPECS } = require('../database/constant.db');

const Specs = mongoose.model(SPECS.MODEL_NAME, specsSchema, SPECS.COLLECTION_NAME);
module.exports = Specs;