const Category = require('../../models/Category');

async function run() {  
    const initData = [
        {
            id: 1,
            name: 'budget',
        },
        {
            id: 2,
            name: 'midrange',
        },
        {
            id: 3,
            name: 'flagship',
        }
    ]

    await Category.bulkWrite(
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