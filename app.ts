// Express
import express from 'express'
import routes from './routes'

// Init express app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', routes)

export default app