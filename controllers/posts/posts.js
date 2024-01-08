const asyncHandler = require("express-async-handler");
const Post = require("../../model/Post/Post");
const Category = require("../../model/Category/Category");
const User = require("../../model/User/User");
//@desc Create a post
//@route POST /api/v1/categories
//@access Private

exports.createPost = asyncHandler(async(req, res)=>{
    //Get the payload
    const {title,  content, categoryId} = req.body;
    //check if post exists
    const postFound = await Post.findOne({ title })
    if(postFound) {
        throw new Error("Post already exists");
    }

    //create post
    const post = await Post.create({
        title,
        content,
        category: categoryId,
        author: req?.userAuth?._id,
    });
    //!Associate post to user
    await User.findByIdAndUpdate(
        req?.userAuth?._id,
        {
        $push:{posts: post._id},
    },
    {
        new: true,
    }
    );

    //*Push post into category
     await Category.findByIdAndUpdate(
        req?.userAuth?._id,
        {
        $push:{posts: post._id},
        },
       {
        new: true,
       }
    );
    //? send the response
    res.json({
        status:'success',
        message: "Post Succesfully created",
        post,
    });
});