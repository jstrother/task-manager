const mongoose = require('mongoose');
const Model = mongoose.model;
const Schema = mongoose.Schema;
const Types = Schema.Types;
const List = require('./list.model');

const BoardSchema = new Schema({
  title: Types.String,
  lists: [
    {
      type: Types.ObjectId,
      ref: List,
      default: []
    }
  ]
});

module.exports = Model('Board', BoardSchema, 'boards');