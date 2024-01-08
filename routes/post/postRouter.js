const express = require("express");
const { createPost } = require("../../controllers/posts/posts");
const isLogin = require("../../middleware/isLoggin");



const postsRouter = express.Router();

//create
postsRouter.post("/", isLogin, createPost);


module.exports = postsRouter;