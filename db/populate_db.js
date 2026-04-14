const pool = require('./pool')

async function populate_db(){
    await pool.query('INSERT INTO messages(message, username) VALUES($1,$2)', ['kida bro', 'preet'])
    await pool.query('INSERT INTO messages(message, username) VALUES($1,$2)', ['vadia 22 ', 'arsh'])
    await pool.query('INSERT INTO messages(message, username) VALUES($1,$2)', ['hor kaam kar kida', 'preet'])
    await pool.query('INSERT INTO messages(message, username) VALUES($1,$2)', ['bas chardikala', 'arsh'])
}
populate_db()