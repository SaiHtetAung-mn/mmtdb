const mongoose = require('mongoose');
const { DEVICE, BRAND } = require('../constant.db');

const specsSchema = new mongoose.Schema({
    device_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: DEVICE.MODEL_NAME,
        index: true,
        unique: true,
        required: true
    },
    body: new mongoose.Schema({
        _id: false,
        dimension: new mongoose.Schema({
            _id: false,
            width: {
                type: Number,
                required: true
            },
            height: {
                type: Number,
                required: true
            },
            thickness: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                enum: ["mm", "in"],
                required: true
            }
        }),
        weight: new mongoose.Schema({
            _id: false,
            value: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                enum: ["g"],
                default: "g"
            }
        }),
        build: new mongoose.Schema({
            _id: false,
            frame: String,
            front: String,
            back: String
        }),
        sim: Array,
    }),
    display: new mongoose.Schema({
        _id: false,
        type: {
            type: String,
            required: true
        },
        resolution: new mongoose.Schema({
            _id: false,
            x: Number,
            y: Number,
        }),
        refresh_rate: Number,
        max_brightness: Number,
        size: new mongoose.Schema({
            _id: false,
            value: Number,
            unit: {
                type: String,
                enum: ['inches'],
                default: 'inches'
            }
        }),
        density: new mongoose.Schema({
            _id: false,
            value: Number,
            unit: {
                type: String,
                enum: ["ppi"],
                default: "ppi"
            }
        }),
        is_aod: Boolean,
        features: Array,
    }),
    platform: new mongoose.Schema({
        _id: false,
        os: new mongoose.Schema({
            _id: false,
            type: {
                type: String,
                enum: ["android", "ios"]
            },
            version: Number
        }),
        ui: new mongoose.Schema({
            _id: false,
            name: String,
            version: Number
        })
    }),
    soc: new mongoose.Schema({
        _id: false,
        chipset: new mongoose.Schema({
            _id: false,
            brand_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: BRAND.MODEL_NAME
            },
            name: String,
            size: String
        }),
        cpu: String,
        gpu: String
    }),
    memory: new mongoose.Schema({
        _id: false,
        has_card_slot: Boolean, 
        ram: Array,
        storage: Array,
        expandable_storage: Number
    }),
    camera: new mongoose.Schema({
        _id: false,
        rear: [
            new mongoose.Schema({
                type: String,
                resolution: Number,
                features: Array,
            })
        ],
        front: [
            new mongoose.Schema({
                type: String,
                resolution: Number,
                features: Array,
            })
        ],
        features: Array,
        video: String
    }),
    speaker: new mongoose.Schema({
        _id: false,
        type: {
            type: String,
            enum: ["stereo", "mono"]
        },
        has_headphone_jack: Boolean,
        features: Array
    }),
    battery: new mongoose.Schema({
        _id: false,
        type: String,
        is_removable: Boolean,
        capacity: Number,
        charging: new mongoose.Schema({
            _id: false,
            wired: Number,
            wireless: Number
        }),
        is_fast_charging: Boolean
    }),
    connectivity: new mongoose.Schema({
        _id: false,
        network: Array,
        usb_type: String
    }),
    colors: Array,
    sensors: Array,
    other_features: Array
});

module.exports = specsSchema;