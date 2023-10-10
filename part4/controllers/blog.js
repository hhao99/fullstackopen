const blogRouter = require("express").Router();
const { Blog } = require('../models/blog')
const logger = require('../utils/logger')
blogRouter.get("/", (req, res) => {
  Blog.find({})
    .then(  blogs => {
      res.send(blogs)
    })
});

module.exports = blogRouter;
