let mongoose = require('mongoose')
let Schema = mongoose.Schema

let VideojuegoSchema = Schema({
  nombre: String,
  genero: String,
  plataforma: String,
  precio: Number,
  desarrollador: String,
  año: Number
})

module.exports = mongoose.model('Videojuego', VideojuegoSchema, 'videojuegos')