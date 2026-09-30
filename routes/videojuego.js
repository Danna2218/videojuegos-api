const { Router } = require('express')
const VideojuegoController = require('../controllers/videojuego')

const router = Router()

router.get('/', VideojuegoController.getVideojuegos)
router.get('/:id', VideojuegoController.getVideojuego)

router.post('/save-videojuego', VideojuegoController.saveVideojuego)

router.put('/edit-videojuego/:id', VideojuegoController.updateVideojuego)

router.delete('/delete-videojuego/:id', VideojuegoController.deleteVideojuego)

module.exports = router