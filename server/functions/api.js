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

const uri =
  'mongodb+srv://admin:VawRwTiCjKb5@cluster0.8f1tm.mongodb.net/db_mypersonalws_v2'

mongoose.connect(uri)
mongoose.connection.once('open', () => {
  console.log('Database connection successful')
})

module.exports.handler = serverless(app)
