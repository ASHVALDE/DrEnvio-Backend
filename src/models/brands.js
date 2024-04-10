const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const brands = new mongoose.Schema({
  id : {
    type:ObjectId,
    index:true
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
})
module.exports = mongoose.model('brands',brands)