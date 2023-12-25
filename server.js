const http = require("http");
const express = require("express");
const usersRouter = require("./routes/users/usersRouter");
const { notFound, globalErrHandler } = require("./middleware/globalErrorHandler");
require("./config/database")();

//!Server
const app = express();
//db connect
//middleware
app.use(express.json()); //pass incoming data

//Routes
app.use("/api/v1/users", usersRouter);


//? Not Found middleware
app.use(notFound);
  //!Error middleware
app.use(globalErrHandler);

const server = http.createServer(app);

const PORT = process.env.PORT || 9080;
server.listen(PORT, console.log(`Server is running on port ${PORT}`));
