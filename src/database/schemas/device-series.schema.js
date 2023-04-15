const mongoose = require('mongoose');
const { BRAND } = require('../constant.db');

const deviceSeriesSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BRAND.MODEL_NAME,
        required: true
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = deviceSeriesSchema;