const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send("Welcome to Ladybird")
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})