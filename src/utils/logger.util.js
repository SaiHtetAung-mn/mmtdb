const logger = require('jet-logger');
module.exports = logger.jetLogger(
    logger.LoggerModes.Console,
    undefined,
    false,
    false,
    logger.Formats.Line
);