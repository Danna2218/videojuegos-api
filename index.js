const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/videojuegos')
  .then(() => {
    console.log('MongoDB conectado')

    app.listen(3000, () => {
      console.log('Servidor ejecutándose en el puerto 3000')
    })
  })
  .catch(error => {
    console.log('Error de conexión:', error)
  })