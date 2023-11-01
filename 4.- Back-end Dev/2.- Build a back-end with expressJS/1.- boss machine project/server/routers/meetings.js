// /api/meetings
const meetingsRouter = require("express").Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("../db.js");

// GET /api/meetings to get an array of all meetings.
meetingsRouter.get("/", (req, res, next) => {
  const meetings = getAllFromDatabase("meetings");
  res.send(meetings);
});

// POST /api/meetings to create a new meeting and save it to the database.
meetingsRouter.post("/", (req, res, next) => {
  const time = req.query.time;
  const day = req.query.day;
  const note = req.query.note;
  const date = new Date();
  if (!time || !day || !note) res.status(400).send();
  const dateObj = {
    time: time,
    day: day,
    note: note,
    date: date,
  };
  const result = addToDatabase("meetings", dateObj);
  res.send(result);
});

// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete("/", (req, res, next) => {
  const result = deleteAllFromDatabase("meetings");
  res.send(result);
});

module.exports = meetingsRouter;
