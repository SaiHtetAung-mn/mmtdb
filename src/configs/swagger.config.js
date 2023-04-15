const path = require('path');
const URLS = {
    Production: '',
    Local: `http//localhost:${process.env.SERVER_PORT}`
}
const env = process.env.NODE_ENV;
const serverUrl = env == 'production' ? URLS.Production : 
    URLS.Local;

const version1 = Object.freeze({
    definition: {
        openapi: '3.0.0', 
        info: {
            title: 'MMTDB API',
            version: '1.0.0',
            description: 'MMTDB API for version 1'
        },
        servers: [
            {
                url: `${serverUrl}`,
                variables: {
                    "basePath": {
                        default: "/api/v1"
                    }
                }
            }
        ]
    },
    apis: [path.resolve(__dirname, '../routes/api/v1/')+'/*.js']
});

module.exports = {
    v1: version1
}