const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
  fullName: String,
  birthday: String,
  titleJob: String,
  email: String,
  shortSummary: String,
  summary: String,
  mobile: String,
  aboutHeader: String,
  aboutDescription: String,
  aboutPhoto: String,
  skillHeader: String,
  skillSummary: String,
})

module.exports = mongoose.model('profile', profileSchema)
