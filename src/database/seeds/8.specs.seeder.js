const Specs = require('../../models/Specs');

async function run() {
    const initData = [
        {
            device_id: "64396ef8443a70e19b94f670", // Replace actual id
            body: {
                dimension: {
                    width: 78.1,
                    height: 163.4,
                    thickness: 8.9,
                    unit: 'mm'
                },
                weight: {
                    value: 234,
                    unit: 'g'
                },
                build: {
                    frame: 'aluminium',
                    front: 'Gorilla Glass Victus 2',
                    back: 'Gorilla Glass Victus 2'
                },
                sim: ['nano', 'dual']
            },
            display: {
                type: 'Dynamic AMOLED 2X',
                resolution: {
                    x: 1440,
                    y: 3088,
                },
                size: {
                    value: 6.8
                },
                density: {
                    value: 500
                },
                refresh_rate: 120,
                max_brightness: 1200,
                is_aod: true,
                features: ['HDR 10+', '10B colors']
            },
            platform: {
                os: {
                    type: 'android',
                    version: 13
                },
                ui: {
                    name: 'OneUI',
                    version: 5.1
                }
            },
            soc: {
                chipset: {
                    brand_id: '643a45b3c0040e5b20907ddd',
                    name: 'snapdragon 8 gen 2',
                    size: 4
                },
                cpu: 'Octa-core (1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)',
                gpu: 'Adreno 740'
            },
            memory: {
                has_card_slot: false,
                ram: [8, 12],
                storage: [256, 512],
                expandable_storage: 0
            },
            camera: {
                rear: [
                    {
                        type: 'wide',
                        resolution: 200,
                        features: ['f/1.7, 24mm', 'multi-directional PDAF', 'Laser AF', 'OIS']
                    },
                    {
                        type: 'periscope telephoto',
                        resolution: 10,
                        features: ['f/4.9, 230mm', "Dual Pixel PDAF", "OIS", "10x optical zoom"]
                    },
                    {
                        type: 'telephoto',
                        resolution: 10,
                        features: ['f/4.9,  f/2.4, 70mm', "Dual Pixel PDAF", "OIS", "10x optical zoom"]
                    },
                    {
                        type: 'ultrawide',
                        resolution: 12,
                        features: ['f/2.2, 13mm', "Dual Pixel PDAF", "Super steady video"]
                    },
                ],
                front: [
                    {
                        type: 'wide ',
                        resolution: 12,
                        features: ['f/2.2, 13mm', "Dual Pixel PDAF", "Super steady video"]
                    }
                ]
            },
            speaker: {
                has_headphone_jack: true,
                type: 'stereo',
                features: ['Tuned by AKG']
            },
            battery: {
                type: 'Li-Ion',
                is_removable: false,
                capacity: 5000,
                charging: {
                    wired: 45,
                    wireless: 15
                },
                is_fast_charging: true
            },
            connectivity: {
                network: ['5g', '4g', '3g'],
                usb_type: 'c'
            },
            colors: ["Phantom Black", "Green", "Cream", "Lavender", "Graphite", "Sky Blue", "Lime", "Red", "BMW M Edition"],
            sensors: ["Fingerprint (under display, ultrasonic)", "Accelerometer", "Gyro", "Proximity", "Compass", "Barometer"],
            other_features: ["IP68 dust/water resistant (up to 1.5m for 30 mins)", "Samsung DeX", "Samsung Pay (Visa, MasterCard certified)"]
        }
    ];

    await Specs.bulkWrite(
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