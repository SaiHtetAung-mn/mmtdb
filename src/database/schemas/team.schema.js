const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    // id is just for update matching when seed
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = teamSchema;