const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const brands = require("./brands")
const products = new mongoose.Schema({
  id : {
    type:ObjectId,
    index:true
  },
  name: {
    type: String,
    required: true,
    unique:true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock :{
    type: Number,
    required: true,
    min: 0
  },
  brand: {
    type: ObjectId,
    ref: brands,
    required: true,
  }
})
module.exports = mongoose.model('products',products)