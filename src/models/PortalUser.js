const mongoose = require('mongoose');
const portalUserSchema = require('../database/schemas/portal-user.schema');
const { PORTAL_USER } = require('../database/constant.db');

const PortalUser = mongoose.model(PORTAL_USER.MODEL_NAME, portalUserSchema, PORTAL_USER.COLLECTION_NAME);

module.exports = PortalUser;