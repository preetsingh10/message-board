const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("newMessage");
});

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
