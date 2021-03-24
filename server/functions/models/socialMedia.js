const mongoose = require('mongoose')
const Schema = mongoose.Schema

const socialMediaSchema = new Schema({
  name: String,
  link: String,
})

module.exports = mongoose.model('socialMedia', socialMediaSchema)
