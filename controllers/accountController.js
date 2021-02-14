const AccountService = require('../services/accountService')

module.exports = {
  async create(req, res) {
    console.log(req.body)
    const {name, balance} = req.body;
    if (!name || !balance) {
      throw new Error("Fields 'name' and 'balance' required.");
    }

    const createdAccount = await AccountService.create({name, balance})

    if (createdAccount.error) return res.status(500).json({ message: createdAccount.error })

    return res.status(201).json({ data: createdAccount.data })
  },
}
