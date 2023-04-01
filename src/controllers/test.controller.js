const { getSuccessResponseFormat } = require("../utils/api-res-format.util")

exports.justTest = (req, res, next) => {
    res.status(200).json(
        getSuccessResponseFormat().json(200, 'This is testing', null, 'Test message')
    );
}