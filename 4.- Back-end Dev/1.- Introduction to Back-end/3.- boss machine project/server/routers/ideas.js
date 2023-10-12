// /api/ideas
const express = require("express");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db.js");
const checkMillionDollarIdea = require('../checkMillionDollarIdea.js')
// GET /api/ideas to get an array of all ideas.
ideasRouter.get("/", (req, res, next) => {
  const ideas = getAllFromDatabase("ideas");
  res.send(ideas);
});

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
  const name = req.query.name;
  const description = req.query.description;
  const numWeeks = req.query.numWeeks;
  const weeklyRevenue = req.query.weeklyRevenue;
  if (!name || !description || !numWeeks || !weeklyRevenue)
    res.status(400).send();
  const ideaObject = {
    name: name,
    description: description,
    numWeeks: numWeeks,
    weeklyRevenue: weeklyRevenue,
  };
  const result = addToDatabase("ideas", ideaObject);
  res.send(result);
});

// MIDDLEWARE for ideaId param
ideasRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (!idea) res.status(404).send(`Idea for id ${id} not found.`);
  req.idea = idea;
  next();
});

// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get("/:ideaId", (req, res, next) => {
  res.send(req.idea);
});

// PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put("/:ideaId", checkMillionDollarIdea, (req, res, next) => {
  const name = req.query.name;
  const description = req.query.description;
  const numWeeks = req.query.numWeeks;
  const weeklyRevenue = req.query.weeklyRevenue;
  if (!name || !description || !numWeeks || !weeklyRevenue)
    res.status(400).send();
  const ideaObject = {
    id: req.idea.id,
    name: name,
    description: description,
    numWeeks: numWeeks,
    weeklyRevenue: weeklyRevenue,
  };
  const result = updateInstanceInDatabase("ideas", ideaObject);
  res.send(result);
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete("/:ideaId", (req, res, next) => {
  const result = deleteFromDatabasebyId("ideas", req.idea.id);
  res.send(result);
});

module.exports = ideasRouter;
