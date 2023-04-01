const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

exports.connect = async () => {
    const URL = `${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    await mongoose.connect(URL);
}

exports.disconnect = () => {
    mongoose.connection.close();
}