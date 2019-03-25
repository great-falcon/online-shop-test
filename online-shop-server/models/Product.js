const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = new Schema({
  title: String,
  imageUrl: String,
  thumbnailUrl: String,
  price: Number
});

module.exports = mongoose.model("Product", product);