const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const invoiceSchema = new Schema({
    consumer: {
        type: Schema.Types.ObjectId,
        ref: 'Consumer',
        required: true
    },
    invoiceDueAmount: {
        type: Number,
        required: true
    },
    invoiceMonthlyAmount: {
        type: Number,
        required: true
    },
    invoiceTotalAmount: {
        type: Number,
        required: true
    },
    invoiceStatus: {
        type: String,
        required: true
    },
    invoiceCreatedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    invoiceUpdatedDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

invoiceSchema.methods.setStatus = function (status) {
    this.invoiceStatus = status;
};

const Invoice = mongoose.model('Invoice', invoiceSchema);


export default Invoice;
