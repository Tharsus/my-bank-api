#!/usr/bin/env node

import app from '../app'

const PORT = process.env.NODE_PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
