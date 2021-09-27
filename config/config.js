const { Client, Pool } = require('pg');

const dotenv = require('dotenv')
dotenv.config()

const connectionString = process.env.DATABASE_URL

var client
if(process.env.Deploy ==="true"){
    client = new Pool({
        connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    })
}else{
    client = new Pool({
        connectionString
    })
}






async function connectpg() {
    client.connect((err) => {
        if (err) {
            return console.error('eror de conexion', err.stack)
        }
    })
};

connectpg()


module.exports = client