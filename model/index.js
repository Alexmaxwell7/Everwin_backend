const mongoose = require('mongoose');
const expensesSchema = new mongoose.Schema({
    organization_id: {
      type: Number,
    },
    date: {
      type: String
    },
    particulars: {
      type: String
    },
    expenses_Type: {
      type: String,
    },
    amount: {
      type: Number,
    },
    receipt:{
    type:String
    },
    id:{
      type:String
    }
  });
  
module.exports = Expenses = mongoose.model("Expenses", expensesSchema);