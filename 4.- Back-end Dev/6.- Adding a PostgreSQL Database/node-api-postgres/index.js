const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    info: "Node.js, Express, and Postgres API",
  });
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
