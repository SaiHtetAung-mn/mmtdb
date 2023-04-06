const Team = require('../../models/Team');
const TEAM = require('../../constants/team.constant');

async function run() {
    const initData = [
        {
            id: 1,
            name: TEAM.TN4U
        }
    ];

    await Team.bulkWrite(
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