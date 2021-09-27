const { Client } = require('pg');

const dotenv = require('dotenv')
dotenv.config()

const client = new Client({
    user: process.env.User,
    host: process.env.Host,
    database: process.env.Database,
    password: process.env.Password,
    port: 5432,
    ssl: {
        rejectUnauthorized: true
    }
});


async function connectpg() {
    client.connect((err) => {
        if (err) {
            return console.error('eror de conexion', err.stack)
        }
    })
};

connectpg()


module.exports = client