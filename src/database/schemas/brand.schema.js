const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    logo_url: {
        type: String,
        default: ''
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

module.exports = brandSchema;