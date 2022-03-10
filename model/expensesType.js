const mongoose = require('mongoose');
const expensesTypeSchema = new mongoose.Schema({
    // organization_Id: {
    //   type: String
    // },
    type: {
      type: String,
    },
    id:{
      type:String
    }
  });
  
module.exports = ExpensesType = mongoose.model("ExpensesType", expensesTypeSchema);