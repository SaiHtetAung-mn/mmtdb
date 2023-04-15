const Device = require('../../models/Device');

async function run() {
    const initData = [
        {
            model_name: "Galaxy S23",
            price: 4400000,
            brand_id: "642ef72dcec880e3f24c59e9", // Replace actual id
            category_id: "642ef72dcec880e3f24c59e9", // Replace actual id
            device_series_id: "642ef72dcec880e3f24c59e9", // Replace actual id
            release_date: (new Date()).toISOString(),
        }
    ];

    await Device.bulkWrite(
        initData.map(item => {
            return {
                "insertOne": {
                    "document": item
                }
            }
        })
    );
}

module.exports = {
    run
}