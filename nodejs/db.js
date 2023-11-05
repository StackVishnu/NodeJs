const mongoose = require('mongoose')

const dbUri = //'insert URL here'

module.exports = () => {
   return mongoose.connect(dbUri);
}