const mongoose = require('mongoose');
const Model = mongoose.model;
const Schema = mongoose.Schema;
const Types = Schema.Types;
const Card = require('./card.model');

const ListSchema = new Schema({
  title: Types.String,
  cards: [
    {
      type: Types.ObjectId,
      ref: Card,
      default: [],
    }
  ]
});

module.exports = Model('List', ListSchema, 'lists');