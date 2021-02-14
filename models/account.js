const mongoose = require('../initializers/mongoose')

const account = new mongoose.Schema({
    name: { type: String, required: true },
    balance: { type: Number, required: true },
})

account.set('timestamps', true)

module.exports = mongoose.model('Account', account)