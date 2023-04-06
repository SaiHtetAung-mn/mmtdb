const mongoose = require('mongoose');
const roleSchema = require('../database/schemas/role.schema');
const { ROLE } = require('../database/constant.db');

const Role = mongoose.model(ROLE.MODEL_NAME, roleSchema, ROLE.COLLECTION_NAME);

module.exports = Role;