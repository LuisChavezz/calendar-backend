/*
    Rutas de Eventos (events)
    url: host + /api/events
*/

const { Router } = require('express');
const router = Router();

// Métodos
const { validateJWT } = require('../middlewares/validate-jwt');  // validación del JWT
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

// Validación del JWT
router.use( validateJWT ) // * Cualquier petición a continuación requerirá la validación del token

// Get events
router.get('/', getEvents)
router.post('/', createEvent)
router.put('/', updateEvent)
router.delete('/', deleteEvent)


module.exports = router;