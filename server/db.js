//TO CONNECT MY DATABASE TO MY SERVER(BACKEND)

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    post: 5432,
    database: "my_todo"
});

module.exports = pool;