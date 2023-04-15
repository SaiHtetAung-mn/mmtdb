const Device = require('../models/Device');
const ObjectId = require('mongoose').Types.ObjectId;
const { BRAND, CATEGORY, DEVICE_SERIES, SPECS } = require('../database/constant.db');

exports.getDeviceById = async (id) => {
    try {
        return await Device.findOne({_id: id});
    }
    catch(err) {
        return null;
    }
}

exports.getDeviceDetail = async (id) => {
    const devices = await Device.aggregate([
        {
            $match: {
                _id: new ObjectId((""+id).toString())
            }
        },
        {
            $lookup: {
                from: BRAND.COLLECTION_NAME,
                localField: "brand_id",
                foreignField: "_id",
                as: "brands"
            }
        },
        {
            $lookup: {
                from: CATEGORY.COLLECTION_NAME,
                localField: "category_id",
                foreignField: "_id",
                as: "categories"
            }
        },
        {
            $lookup: {
                from: DEVICE_SERIES.COLLECTION_NAME,
                localField: "device_series_id",
                foreignField: "_id",
                as: "device_series"
            }
        },
        {
            $lookup: {
                from: SPECS.COLLECTION_NAME,
                localField: "_id",
                foreignField: "device_id",
                as: "specifications"
            }
        },
        {
            $addFields: {
                brand: {$first: "$brands"},
                category: {$first: "$categories"},
                device_series: {$first: "$device_series"},
                specs: {$first: "$specifications"}
            }
        },
        {
            $unset: ["brands", "categories", "device_series", "specifications"]
        }
    ]);

    return devices[0] ?? null;
}