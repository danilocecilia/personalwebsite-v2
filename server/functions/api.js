const express = require('express')
const expressGraphQL = require('express-graphql')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const cors = require('cors')
const schema = require('./schema/schema')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  '/',
  cors(),
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
)

const uri = process.env.DB_URI

mongoose.connect(uri)
mongoose.connection.once('open', () => {
  console.log('Database connection successful')
})

module.exports.handler = serverless(app)
