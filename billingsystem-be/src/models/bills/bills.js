const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const billSchema = new Schema({
  invoiceId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Invoice'
  },
  amountPaid: {
    type: Number,
    required: true
  },
  amountDue: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
});

const Bill = mongoose.model('Bill', billSchema);