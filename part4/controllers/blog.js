const blogRouter = require("express").Router();
const { Blog } = require('../models/blog')
const logger = require('../utils/logger')

blogRouter.get('/', (req,res) => {
  Blog.find({})
    .then( blogs => {
      res.send(blogs)
    })
    .catch( err => {
      res.send(err.message)
    })
})
blogRouter.post("/", (req, res) => {
  const {
    title,
    author,
    url,
    likes
  } = req.body
  const blog = new Blog({
    title,
    author,
    url,
    likes
  })
  blog.save()
    .then( (blog)=> {
      console.log(blog)
      res.send("mongodb is ok")
    })
    .catch(err => {
      res.send(err.message)
    })
});

module.exports = blogRouter;
