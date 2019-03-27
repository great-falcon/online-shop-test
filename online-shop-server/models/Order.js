const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const order = new Schema({
  products: [{id: String, count: Number}],
  totalPrice: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", order);