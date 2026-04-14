const pool = require('../db/pool')


async function addNewMessage(req,res){
    const message = req.body.message
    const username = req.body.username
    await pool.query("INSERT INTO messages(username, message) VALUES($1, $2)", [username, message])
    res.redirect('/')
}

module.exports = addNewMessage