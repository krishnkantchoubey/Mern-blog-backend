const mongoose = require("mongoose");

//schema
const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
  },
  {
    timestamp: true,
  }
);

//compile schema to model

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
