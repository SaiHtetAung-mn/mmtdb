const mongoose = require('mongoose');
const { CATEGORY } = require('../database/constant.db');
const categorySchema = require('../database/schemas/category.schema');

const Category = mongoose.model(CATEGORY.MODEL_NAME, categorySchema, CATEGORY.COLLECTION_NAME);

module.exports = Category;