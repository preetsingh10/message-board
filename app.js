const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 8080;

const messages = []
const newMessageController = require("./controllers/newMessageController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", newMessageController);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
