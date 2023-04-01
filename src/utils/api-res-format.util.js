const standardJsonFormat = {
    status: '', // success | error
    status_code: '', // http status code
    message: '',
    payload: {
        data: null,
        metadata: {}
    }
}

function getErrorResponseFormat() {
    return {
        /**
         * @param {Number} statusCode HTTP status code
         * @param {String} errorMessage Error message
         */
        json: (statusCode, errorMessage='') => {
            const resFormat = JSON.parse(JSON.stringify(standardJsonFormat));

            resFormat.status = 'error';
            resFormat.status_code = parseInt(statusCode);
            resFormat.message = errorMessage;

            return resFormat;
        }
    }
}

function getSuccessResponseFormat() {
    return {
        /**
         * @param {Number} statusCode HTTP status code
         * @param {*} data Data to pass
         * @param {Object} metadata Meta data like pagination data
         * @param {String} message Response message
         * @returns 
         */
        json: (statusCode, data=null, metadata={}, message=null) => {
            const resFormat = JSON.parse(JSON.stringify(standardJsonFormat));

            resFormat.status = 'success';
            resFormat.status_code = parseInt(statusCode);
            resFormat.payload.data = data;
            resFormat.payload.metadata = metadata || {};
            resFormat.message = message;

            return resFormat;
        }
    }
}

module.exports = {
    getErrorResponseFormat,
    getSuccessResponseFormat
}