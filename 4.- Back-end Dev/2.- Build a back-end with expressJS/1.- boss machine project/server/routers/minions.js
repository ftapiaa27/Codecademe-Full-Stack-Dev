// /api/minions
const express = require("express");
const minionsRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db.js");

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
  const minionObj = {
    name: name,
    title: title,
    weaknesses: weaknesses,
    salary: salary,
  };
  const result = addToDatabase("minions", minionObj);
  res.send(result);
});

// MIDDLEWARE for :minionId param
minionsRouter.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", id);
  if (!minion) res.status(404).send(`Minion for id ${req.minionId} not found.`);
  req.minion = minion;
  next();
});

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get("/:minionId", (req, res, next) => {
  res.send(req.minion);
});

// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put("/:minionId", (req, res, next) => {
  const name = req.query.name;
  const title = req.query.title;
  const weaknesses = req.query.weaknesses;
  const salary = req.query.salary;
  if (!name || !title || !weaknesses || !salary) res.status(400).send();
  const minionObj = {
    id: req.minion.id,
    name: name,
    title: title,
    weaknesses: weaknesses,
    salary: salary,
  };
  const result = updateInstanceInDatabase("minions", minionObj);
  res.send(result);
});

// DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete("/:minionId", (req, res, next) => {
  const result = deleteFromDatabasebyId("minions", req.minion.id);
  res.send(result);
});

module.exports = minionsRouter;
