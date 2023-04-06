const authConfig = require('../configs/auth.config');
const createError = require('http-errors');
const portalUserRepo = require('../repositories/portal-user.repo');
const ROLE = require('../constants/role.constant');
const jwt = require('jsonwebtoken');

function authenticate() {
    const authUser = async (req, res, next, roleNameToMatch) => {
        try {
            let userId = null;

            const tokenHeader = req.headers.authorization;
            if(tokenHeader && (""+tokenHeader).startsWith("Bearer ")) {
                const token = tokenHeader.split(" ")[1];
                const payload = jwt.verify(token, authConfig.jwt_secret);
                userId = payload.user_id ?? null;
            }

            const user = await portalUserRepo.getPortalUserByRoleName(roleNameToMatch);

            if(user?._id.toString() !== userId) {
                return next(createError(401, 'Unauthorized'));
            }

            // Can access current user with req.user in controller
            req.user = JSON.parse(JSON.stringify(user));
            next();
        }
        catch(err) {
            if(err.name == "TokenExpiredError") {
                return next(createError(401, 'Token expired'));
            }

            if(err.name == "JsonWebTokenError") {
                return next(createError(401, 'Invalid jwt token'));
            }

            let error = createError(500, 'Internal server error');
            error.stack = err.stack;
            next(error);
        }
    }

    return {
        SuperAdmin: (req, res, next) => authUser(req, res, next, ROLE.SUPER_ADMIN)
    }
}

module.exports = {
    authenticate
}