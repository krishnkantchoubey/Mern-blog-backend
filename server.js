const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const express = require("express");
const usersRouter = require("./routes/users/usersRouter");
const { notFound, globalErrHandler } = require("./middleware/globalErrorHandler");
const categoryRouter = require("./routes/category/categoryRouter");
const postsRouter = require("./routes/post/postRouter");

require("./config/database")();

//!Server
const app = express();
console.log(process.env.MYKEY);
//db connect
//middleware
app.use(express.json()); //pass incoming data

//Routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/posts", postsRouter);




//? Not Found middleware
app.use(notFound);
  //!Error middleware
app.use(globalErrHandler);

const server = http.createServer(app);

const PORT = process.env.PORT || 9080;
server.listen(PORT, console.log(`Server is running on port ${PORT}`));
