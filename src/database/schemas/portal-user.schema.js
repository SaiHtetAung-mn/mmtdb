const mongoose = require('mongoose');
const { ROLE, TEAM } = require('../constant.db');

const portalUserSchema = new mongoose.Schema({
    // id is just for update matching when seed
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ROLE.MODEL_NAME,
    },
    team_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: TEAM.MODEL_NAME,
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = portalUserSchema;