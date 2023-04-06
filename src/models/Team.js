const mongoose = require('mongoose');
const teamSchema = require('../database/schemas/team.schema');
const { TEAM } = require('../database/constant.db');

const Team = mongoose.model(TEAM.MODEL_NAME, teamSchema, TEAM.COLLECTION_NAME);

module.exports = Team;