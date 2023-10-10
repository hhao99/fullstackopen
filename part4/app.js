const logger = require("./utils/logger");
const config = require('./utils/config')
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const blogRouter = require("./controllers/blog");
const mongoose = require('mongoose');

logger.info('connecting mongodb',config.MONGODB_URI);
mongoose.connect('mongodb://localhost/test')
    .then( ()=> {
        logger.info('connted to mongodb');
    })
    .catch( (err) => {
        logger.error('failed to connect to DB',err.message)
    })

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
