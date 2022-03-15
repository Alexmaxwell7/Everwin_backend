const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    first_name: {
      type: String,
    },
    id:{
      type:String
    },
    last_name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      salary: {
        type: String,
      },
  });
  
module.exports = Employee = mongoose.model("Employee", employeeSchema);