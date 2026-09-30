let Videojuego = require('../models/videojuego')

const controller = {

  getVideojuegos: function (req, res) {
    Videojuego.find({}).exec()
      .then(videojuegosList => {
        if (!videojuegosList) {
          return res.status(404).send({
            message: "No data found"
          })
        }

        return res.status(200).json(videojuegosList)
      })
      .catch(err => {
        res.status(500).send({
          message: `Error: ${err}`
        })
      })
  },

  getVideojuego: function (req, res) {
    let videojuegoId = req.params.id

    if (videojuegoId == null) {
      return res.status(404).send({
        message: "Videojuego not found"
      })
    }

    Videojuego.findById(videojuegoId).exec()
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: "Videojuego not found"
          })
        }

        return res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).send({
          message: `Internal error -> ${err}`
        })
      })
  },

  saveVideojuego: function (req, res) {

    let videojuego = new Videojuego()

    const {
      nombre,
      genero,
      plataforma,
      precio,
      desarrollador,
      año
    } = req.body

    if (nombre && genero && plataforma && precio && desarrollador && año) {

      videojuego.nombre = nombre
      videojuego.genero = genero
      videojuego.plataforma = plataforma
      videojuego.precio = precio
      videojuego.desarrollador = desarrollador
      videojuego.año = año

      videojuego.save()
        .then(storedVideojuego => {

          storedVideojuego
            ? res.status(200).json({
                videojuego: storedVideojuego
              })
            : res.status(404).send({
                message: "Error saving the document"
              })
        })
        .catch(error => {
          res.status(500).send({
            message: "Error while saving the document"
          })
        })

    } else {

      return res.status(400).send({
        message: "Data is not right"
      })
    }
  },

  updateVideojuego: function (req, res) {

    let videojuegoId = req.params.id
    let update = req.body

    Videojuego.findByIdAndUpdate(
      videojuegoId,
      update,
      { returnDocument: 'after' }
    )
      .then(updatedVideojuego => {

        if (!updatedVideojuego) {
          return res.status(404).send({
            message: "The document does not exist"
          })
        }

        return res.status(200).send({
          videojuego: updatedVideojuego
        })
      })
      .catch(error => {
        res.status(500).send({
          message: `Error while updating ${error}`
        })
      })
  },

  deleteVideojuego: function (req, res) {

    let videojuegoId = req.params.id

    Videojuego.findByIdAndRemove(videojuegoId)
      .then(removedVideojuego => {

        if (!removedVideojuego) {
          return res.status(404).send({
            message: "The videojuego does not exist"
          })
        }

        return res.status(200).send({
          videojuego: removedVideojuego
        })
      })
      .catch(err => {
        res.status(500).send({
          message: "Error while deleting"
        })
      })
  }
}

module.exports = controller