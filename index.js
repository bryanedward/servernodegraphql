'use strict'

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var schema = require('./schema/schema.js');
var controller = require('./controller/controller')
var cors = require('cors')
const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: controller,
    graphiql: true
}))

app.listen(process.env.port || 2000, function () {
    console.log('connect');
})
