const Account = require('../models/account')

module.exports = {
  async create(accountParams = {}) {
    try {
      const account = await Account.create(accountParams)

      return {
        status: true,
        data: account,
      }
    } catch (error) {
      return {
        status: false,
        error: error.message,
      }
    }
  },
}
