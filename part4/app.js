const logger = require("./utils/logger");
const config = require('./utils/config')
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const blogRouter = require("./controllers/blog");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
logger.info('connecting mongodb',config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI)
    .then( ()=> {
        logger.info('connted to mongodb');
    })
    .catch( (err) => {
        logger.error('failed to connect to DB',err.message)
    })
// add the middleware for the express
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

// the routes for the app
app.use("/api/blogs", blogRouter);

// some helper function for the http request
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
