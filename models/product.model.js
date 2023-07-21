const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  availableItems: { type: Number, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
}, {
  timestamps: true
});

model('Product', productSchema);