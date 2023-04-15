const mongoose = require('mongoose');
const { BRAND, CATEGORY, DEVICE_SERIES } = require('../constant.db');

const deviceSchema = new mongoose.Schema({
    model_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BRAND.MODEL_NAME,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CATEGORY.MODEL_NAME,
        required: true
    },
    device_series_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DEVICE_SERIES.MODEL_NAME,
    },
    release_date: {
        type: Date,
        required: true
    },
    release_status: {
        type: String,
    },
    status: {
        type: String
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = deviceSchema;