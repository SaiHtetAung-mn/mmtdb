const DeviceType = require('../../models/DeviceType');

async function run() {  
    const initData = [
        {
            id: 1,
            name: 'smartphone',
        },
        {
            id: 2,
            name: 'tablet',
        }
    ]

    await DeviceType.bulkWrite(
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