const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bgPathSchema = new Schema({
  name: String,
  url: String
});

const bgPathModel = mongoose.model('bgPath',bgPathSchema);

module.exports = bgPathModel;