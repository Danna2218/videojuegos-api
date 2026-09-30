const express = require('express')
const videojuegoRoutes = require('./routes/videojuego')

const app = express()

app.use(express.json())

app.use('/videojuegos', videojuegoRoutes)

module.exports = app