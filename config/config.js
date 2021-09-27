const { Client } = require('pg');

const dotenv = require('dotenv')
dotenv.config()


const client = new Client({
    user: process.env.User,
    host: process.env.Host,
    database: process.env.Database,
    password: process.env.Password,
    ssl: true
});


client.connect()


module.exports = client