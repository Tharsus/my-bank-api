const mongoose = require('mongoose')

const { mongoConfig } = require('../config')

// mongoose.set('debug', mongoConfig.debug)

mongoose.connect(`${mongoConfig.url}/${mongoConfig.db}`, {
// mongoose.connect(`mongodb://127.0.0.1:27017/bank`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

module.exports = mongoose
