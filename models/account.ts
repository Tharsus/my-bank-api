import mongoose from '../initializers/mongoose'

const account = new mongoose.Schema({
    name: { type: String, required: true },
    balance: { type: Number, required: true },
})

account.set('timestamps', true)

export default mongoose.model('Account', account)