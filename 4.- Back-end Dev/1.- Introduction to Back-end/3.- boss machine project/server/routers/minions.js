const express = require("express");
const minionsRouter = express.Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("../db.js");
const { v4: uuidv4 } = require("uuid");
// /api/minions

// GET /api/minions to get an array of all minions.
minionsRouter.get("/", (req, res, next) => {
  const minions = getAllFromDatabase("minions");
  res.send(minions);
});
// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post("/", (req, res, next) => {
  const name = req.query.name;
  const title = req.query.title;
  const weaknesses = req.query.weaknesses;
  const salary = req.query.salary;

  if (!name || !title || !weaknesses || !salary) {
    res.status(400).send();
  }
  const id = uuidv4();
  const minionObj = {
    id: id,
    name: name,
    title: title,
    weaknesses: weaknesses,
    salary: salary,
  };
  addToDatabase("minions", minionObj);
  res.send(minionObj);
});
// MIDDLEWARE for :minionId param
minionsRouter.param("minionId", (req, res, next, id) => {
  // const minionId = Number(id);
  req.minionId = id;
  next();
});
// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get("/:minionId", (req, res, next) => {
  const minion = getFromDatabaseById("minions", req.minionId);
  if (!minion) {
    res.status(404).send(`Minion for id ${req.minionId} not found.`);
  }
  res.send(minion);
});
// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put("/:minionId", (req, res, next) => {
  const name = req.query.name;
  const title = req.query.title;
  const weaknesses = req.query.weaknesses;
  const salary = req.query.salary;

  if (!name || !title || !weaknesses || !salary) {
    res.status(400).send();
  }
  const minionObj = {
    id: id,
    name: name,
    title: title,
    weaknesses: weaknesses,
    salary: salary,
  };
  const minion = updateInstanceInDatabase("minions", req.minionId);
  res.sendStatus(minion);
});
// DELETE /api/minions/:minionId to delete a single minion by id.

module.exports = minionsRouter;
