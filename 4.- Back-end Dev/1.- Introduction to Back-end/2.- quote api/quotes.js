const express = require("express");
const quotesRouter = express.Router();
const { quotes } = require("./data");
const { getRandomElement, getFromAuthor, deleteById } = require("./utils");
const { v4: uuidv4 } = require("uuid");

// Get a random quote
quotesRouter.get("/random", (req, res, next) => {
  const obj = {};
  obj.quote = getRandomElement(quotes);
  res.send(obj);
});

// Filter by author, or get all if no author is specified
quotesRouter.get("/", (req, res, next) => {
  const person = req.query.person;
  const obj = {};
  if (person) {
    obj.quotes = getFromAuthor(quotes, person);
    res.send(obj);
  } else {
    obj.quotes = quotes;
    res.send(obj);
  }
});

// Add new quote
quotesRouter.post("/", (req, res, next) => {
  const quote = req.query.quote;
  const person = req.query.person;
  if (!quote || !person) {
    res.status(400).send();
  } else {
    let uuid = uuidv4();
    console.log(uuid);
    const quoteObj = {
      quote: {
        quote: quote,
        person: person,
        id: uuid,
      },
    };
    quotes.push(quoteObj.quote);
    res.send(quoteObj);
  }
});

// Delete by ID
quotesRouter.delete("/", (req, res, next) => {
  const id = req.query.id;
  if (id) {
    deleteById(quotes, id);
    res.send(id);
  } else {
    res.status(404).send();
  }
});

module.exports = quotesRouter;
