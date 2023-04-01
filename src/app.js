const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Logger = require('./utils/logger.util');
const createError = require('http-errors');
const { getErrorResponseFormat } = require('./utils/api-res-format.util');
const app = express();

const apiRouter = require('./routes/api');

/**
 * Global middleware
 */
app.use(morgan('dev'));
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Route config
 */
app.use('/api', apiRouter);

/*
* 404 middleware for all api route
*/
app.use('*', (req, res, next) => {
    next(createError(404, 'Route not found'));
});

/**
 * Catch forwarded error from controller 
 */
app.use((err, req, res, next) => {
    let status = err.status ?? 500;
    let message = (status == 500) ? 'Internal server error' : err.message;
    (status == 500) && Logger.err(err instanceof Error ? err.stack : err);
    res.status(status).json(
          getErrorResponseFormat().json(status, message)
    );
});

module.exports = app;