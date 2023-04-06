const PortalUser = require("../models/PortalUser");
const { ROLE } = require('../database/constant.db');

exports.getPortalUserList = async () => {
    const users = await PortalUser.aggregate([
        {
            $unset: ["password"]
        }
    ]);

    return users;
}

exports.getPortalUserByEmail = async (email) => {
    return await PortalUser.findOne({email});
}

exports.getPortalUserByRoleName = async (roleName) => {
    const portalUsers = await PortalUser.aggregate([
        {
            $lookup: {
                from: ROLE.COLLECTION_NAME,
                localField: "role_id",
                foreignField: "_id",
                as: "roles"
            }
        },
        {
            $match: {
                "roles.0.name": roleName
            }
        },
        {
            $unset: ["roles"]
        }
    ]);
    
    return portalUsers[0] ?? null;
}