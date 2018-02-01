var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  title: String,
  seller: String,
  description: String,
  added_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);