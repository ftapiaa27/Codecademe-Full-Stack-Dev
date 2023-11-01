const express = require("express");
const apiRouter = express.Router();
const minionsRouter = require("./routers/minions.js");
const ideasRouter = require("./routers/ideas.js");
const meetingsRouter = require("./routers/meetings.js");

apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);
module.exports = apiRouter;
