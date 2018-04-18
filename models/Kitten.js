var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittenSchema = new Schema({
  name: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Kitten', kittenSchema);
