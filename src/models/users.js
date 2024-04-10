const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const users = new mongoose.Schema({
  id: {
    type: ObjectId,
    index: true,
  },
  name: {
    type: String,

  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique:true

  },
  discounts:mongoose.Schema.Types.Mixed
  
})
module.exports = mongoose.model('users',users)

