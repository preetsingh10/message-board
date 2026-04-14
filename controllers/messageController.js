const pool = require("../db/pool");

async function getIndex(req, res) {
  const data = await pool.query("SELECT * FROM messages");
  res.render("index", { messages: data.rows });
}
async function addNewMessage(req, res) {
  const message = req.body.message;
  const username = req.body.username;
  await pool.query("INSERT INTO messages(username, message) VALUES($1, $2)", [
    username,
    message,
  ]);
  res.redirect("/");
}

module.exports = { addNewMessage, getIndex };
