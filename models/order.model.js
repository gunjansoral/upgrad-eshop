const mongoose = require('mogoose');
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  address: { type: Schema.Types.ObjectId, required: true },
  product: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true, default: 1 },
  user: { type: Schema.Types.ObjectId, required: true },
});

model('Order', orderSchema);