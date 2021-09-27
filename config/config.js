const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
    user: process.env.User,
    host: process.env.Host,
    database: process.env.Database,
    password: process.env.Password
});


client.connect()


module.exports = client