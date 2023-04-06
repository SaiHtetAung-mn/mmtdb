const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');

exports.createJWTToken = (data) => {
    const token = jwt.sign(
        data,
        authConfig.jwt_secret,
        { expiresIn: `${authConfig.jwt_token_expire_time}d` }
    );

    return token;
}