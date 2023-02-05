 /*
    Rutas de Eventos (events)
    url: host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

// Métodos
const { validateFields } = require('../middlewares/fields-validator');
const { validateJWT } = require('../middlewares/validate-jwt');  // validación del JWT
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

// Validación del JWT
router.use( validateJWT ) // * Cualquier petición a continuación requerirá la validación del token

// Get events
router.get('/', getEvents)

router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de fin es obligatoria').custom( isDate ),
    validateFields
  ],
  createEvent
)

router.put(
  '/:id', 
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de fin es obligatoria').custom( isDate ),
    validateFields
  ],
  updateEvent
)

router.delete('/:id', deleteEvent)


module.exports = router;