const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const articleRoutes = require('./routes/article')


app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/auth', authRoutes)
app.use('/category', categoryRoutes)
app.use('/article', articleRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: 'not found' })
    next()
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "something went wrong" })
    next()
})

module.exports = app