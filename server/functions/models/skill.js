const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  percent: Number,
})

module.exports = mongoose.model('skill', skillSchema)
