const portalUserRepo = require('../repositories/portal-user.repo');
const { getSuccessResponseFormat } = require('../utils/api-res-format.util');
const cryptoUtil = require('../utils/crypto.util');
const jwtUitl = require('../utils/jwt.util');
const createError = require('http-errors');

exports.getPortalUserList = async (req, res, next) => {
    try {
        const users = await portalUserRepo.getPortalUserList();
        res.status(200).json(
            getSuccessResponseFormat().json(200, users)
        );
    }
    catch(err) {
        let error = createError(500, err.message);
        error.stack = err.stack;
        next(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email = "", password="" } = req.body;

        const portalUser = await portalUserRepo.getPortalUserByEmail(email);
        if (!portalUser) {
            return next(createError(401, 'User with the given credential does not exist'));
        }

        const isPasswordMatch = await cryptoUtil.comparePassword(password, portalUser.password);
        if (!isPasswordMatch) {
            return next(createError(401, 'Password is incorrect'));
        }

        const token = jwtUitl.createJWTToken({user_id: portalUser._id.toString()});

        return res.status(200).json(
            getSuccessResponseFormat().json(200, {
                token,
                user_id: portalUser._id.toString(),
            })
        );
    }
    catch (err) {
        let error = createError(500, err.message);
        error.stack = err.stack;
        next(error);
    }
}