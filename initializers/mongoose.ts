import mongoose from 'mongoose'

import config from '../config'

const {mongoConfig} = config

if (process.env.NODE_ENV === 'test') {
  mongoose.set('debug', true)
}

mongoose.connect(`${mongoConfig.url}/${mongoConfig.db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

export default mongoose
