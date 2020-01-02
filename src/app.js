'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

mongoose.connect('mongodb://database:27017/kube_test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

mongoose.connection.on('open', () => {
  console.log('Database is connected')
})

mongoose.connection.on('error', err => {
  console.error(err)
})

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})