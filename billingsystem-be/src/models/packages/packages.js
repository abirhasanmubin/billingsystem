const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const packageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    unique: true
  }
})

packageSchema.statics.getPackageByPrice = async (price) => {
  return await this.findOne({price});
}

packageSchema.statics.getPackageById = async (_id) => {
  return await this.findOne({_id});
}

const Package = mongoose.model('Package', packageSchema);