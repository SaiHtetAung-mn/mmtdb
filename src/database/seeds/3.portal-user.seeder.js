const PortalUser = require('../../models/PortalUser');
const Role = require('../../models/Role');
const Team = require('../../models/Team');
const cryptoUtil = require('../../utils/crypto.util');

const ROLE = require('../../constants/role.constant');
const TEAM = require('../../constants/team.constant');

async function run() {  
    const password = await cryptoUtil.hashPassword('123456');
    const superAdminRole = await Role.findOne({name: ROLE.SUPER_ADMIN});
    const tn4uTeam = await Team.findOne({name: TEAM.TN4U});

    const superAdmin = {
        id: 1,
        name: 'Aung Nai Oo',
        email: 'aungnaioo@gmail.com',
        password
    };

    superAdminRole && (superAdmin.role_id = superAdminRole._id.toString());
    tn4uTeam && (superAdmin.team_id = tn4uTeam._id.toString());

    const initData = [superAdmin];

    await PortalUser.bulkWrite(
        initData.map(item => {
            return {
                "updateOne": {
                    "filter": {id: item.id},
                    "update": {...item},
                    "upsert": true
                }
            }
        })
    );
}

module.exports = {
    run
}