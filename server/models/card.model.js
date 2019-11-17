const mongoose = require('mongoose');
const Model = mongoose.model;
const Schema = mongoose.Schema;
const Types = Schema.Types;

const CardSchema = new Schema({
  title: Types.String,
  body: Types.String,
});

module.exports = Model('Card', CardSchema, 'cards');