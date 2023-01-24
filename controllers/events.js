const { response } = require('express')


const getEvents = async( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'GET_EVENTS'
  })
}

const createEvent = async( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'CREATE_EVENTS'
  })
}

const updateEvent = async( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'UPDATE_EVENTS'
  })
}

const deleteEvent = async( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'DELETE_EVENTS'
  })
}


module.exports = { getEvents, createEvent, updateEvent, deleteEvent }