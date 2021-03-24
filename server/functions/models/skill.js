const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  percentage: Number,
})

module.exports = mongoose.model('skill', skillSchema)
