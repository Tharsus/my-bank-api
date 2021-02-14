const envLoader = require('env-o-loader')

const mongooseConfig = envLoader('./mongoose.yaml')

module.exports = {
  mongoConfig: {
    url: mongooseConfig.url,
    db: mongooseConfig.db,
    debug: mongooseConfig.debug,
  },
}
