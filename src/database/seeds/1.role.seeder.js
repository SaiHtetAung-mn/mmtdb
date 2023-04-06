const Role = require('../../models/Role');
const ROLE = require('../../constants/role.constant');

async function run() {  
    const initData = [
        {
            id: 1,
            name: ROLE.SUPER_ADMIN
        }
    ]

    await Role.bulkWrite(
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