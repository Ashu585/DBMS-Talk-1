const express = require('express')
const util = require('../src/routers/util')
const app = express()
const port = 3000
const path = require('path')
require('./db/sql')

const publicDir = path.join(__dirname, '../public')

app.use(express.json())
app.use(express.static(publicDir))
app.use(util)

app.get('*', (req, res) => {
    res.status(404).send('Error 404 Not found')
})
app.listen(port, () => {
    console.log('Server is running')
})








