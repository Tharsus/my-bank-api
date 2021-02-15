import envLoader from 'env-o-loader'

const mongooseConfig = envLoader('./mongoose.yaml')

export default {
  mongoConfig: {
    url: mongooseConfig.url,
    db: mongooseConfig.db,
  },
}
