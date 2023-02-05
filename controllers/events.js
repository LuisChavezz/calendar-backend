const { response } = require('express')
const Event = require('../models/Event')


const getEvents = async( req, res = response ) => {

  const events = await Event.find().populate('user', 'name')

  res.json({
    ok: true,
    events
  })
}

const createEvent = async( req, res = response ) => {

  const event = new Event( req.body )

  try {
    event.user = req.uid

    const eventSaved = await event.save()

    res.json({
      ok: true,
      event: eventSaved
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el admin...'
    })
  }
}

const updateEvent = async( req, res = response ) => {

  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById( eventId )

    if ( !event ) {
      res.status(404).json({
        ok: false,
        msg: 'Evento no existe en la base de datos'
      })
    }

    if ( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene los permisos necesarios para modificar este evento'
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }

    const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, {new: true} )
    
    res.json({
      ok: true,
      event: eventUpdated
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el admin...'
    })
  }
}

const deleteEvent = async( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'DELETE_EVENTS'
  })
}


module.exports = { getEvents, createEvent, updateEvent, deleteEvent }