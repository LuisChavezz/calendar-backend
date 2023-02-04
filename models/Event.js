const { Schema, model } = require('mongoose');

const EventSchema = Schema({
  title: {
    type: String,
    require: true
  },
  notes: {
    type: String
  },
  start: {
    type: Date,
    require: true
  },
  end: {
    type: Date,
    require: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

EventSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object
})

module.exports = model( 'Event', EventSchema )