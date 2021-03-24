const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  company: String,
  image: String,
  title: String,
  description: String,
})

module.exports = mongoose.model('portfolio', portfolioSchema)
