const deviceRepo = require('../repositories/device.repo');
const createError = require('http-errors');
const { getSuccessResponseFormat } = require('../utils/api-res-format.util');

exports.getDeviceDetail = async (req, res, next) => {
    const deviceId = req.params.id;

    try {
        const device = await deviceRepo.getDeviceById(deviceId);
        if(!device) {
            return next(createError(404));
        }

        const deviceDetail =await deviceRepo.getDeviceDetail(deviceId);

        res.status(200).json(
            getSuccessResponseFormat().json(200, deviceDetail)
        );
    }
    catch(err) {
        let error = createError(500, err.message);
        error.stack = err.stack;
        next(error);
    }
}