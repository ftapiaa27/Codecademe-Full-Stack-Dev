const express = require("express");
const apiRouter = express.Router();
const minionsRouter = require("./routers/minions.js");

apiRouter.use("/minions", minionsRouter);
module.exports = apiRouter;
