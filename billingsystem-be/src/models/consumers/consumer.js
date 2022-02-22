const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const Invoice = require('../invoices/invoice');

const consumerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
  },
  amountDue: {
    type: Number,
    required: true,
  },
  lastPayment: {
    type: Date,
    required: true,
  },
  lastPaymentAmount: {
    type: Number,
    required: true,
  },
})

consumerSchema.methods.generateInvoice = function() {
  const consumer = this;
  const invoice = new Invoice({
    consumer: this._id,
    invoiceCreatedDate: new Date(),
    invoiceDueAmount: this.amountDue,
    invoiceMonthlyAmount: this.package.monthlyAmount,
    invoiceTotalAmount: this.amountDue + this.package.monthlyAmount,
    invoiceStatus: 'CREATED',
  });
  return invoice.save();
}

const Consumer = mongoose.model('Consumer', consumerSchema);