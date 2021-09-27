const { Client } = require('pg');
require('dotenv').config()


const client = new Client({
    user: process.env.User,
    host: process.env.Host,
    database: process.env.Database,
    password: process.env.Password,
    ssl: process.env.DATABASE_URL ? true : false
});


client.connect()


module.exports = client