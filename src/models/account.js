const mongoose = require('mongoose');
const { Schema } = mongoose;
const AccountSchema = new Schema(
  {
    name: { type: String, default: '', required: true },
    accNumber: { type: String, default: '', required: true },
    balance: { type: Number, default: 0, required: true },
    type: {
      type: String,
      enum: ['root', 'sub'],
      default: 'root',
      required: false,
    },
    status: {
      type: String,
      enum: ['new', 'active', 'inactive', 'blocked'],
      default: 'new',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
  },
  { timestamps: true },
  { optimisticConcurrency: true }
);
module.exports = mongoose.model('account', AccountSchema);
