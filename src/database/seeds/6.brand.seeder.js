const Brand = require('../../models/Brand');

async function run() {  
    const initData = [
        {
            id: 1,
            name: 'samsung',
        },
        {
            id: 2,
            name: 'apple',
        },
        {
            id: 3,
            name: 'xiaomi',
        },
        {
            id: 4,
            name: 'oneplus',
        },
        {
            id: 5,
            name: 'huawei',
        },
        {
            id: 6,
            name: 'honor',
        },
        {
            id: 7,
            name: 'nothing',
        },
        {
            id: 8,
            name: 'oppo',
        },
        {
            id: 9,
            name: 'vivo',
        },
        {
            id: 10,
            name: 'motorola',
        },
        {
            id: 11,
            name: 'nokia',
        },
        {
            id: 12,
            name: 'realme',
        },
        {
            id: 13,
            name: 'zte',
        },
        {
            id: 14,
            name: 'asus',
        },
        {
            id: 15,
            name: 'google',
        },
        {
            id: 16,
            name: 'tecno',
        },
        {
            id: 17,
            name: 'qualcomm'
        },
        {
            id: 18,
            name: 'media tek'
        }
    ]

    await Brand.bulkWrite(
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