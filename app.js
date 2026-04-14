const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 8080;

const messages = [];
const {addNewMessage, getIndex} = require('./controllers/messageController')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", getIndex);

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", addNewMessage);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
