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


// Get events
router.get('/', validateJWT, getEvents)
router.post('/', validateJWT, createEvent)
router.put('/', validateJWT, updateEvent)
router.delete('/', validateJWT, deleteEvent)


module.exports = router;