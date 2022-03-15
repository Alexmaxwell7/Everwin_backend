const Employee = require("../model/employee");
const to = require("await-to-js").default;
const mongoose = require("mongoose");
//get employee details
exports.getEmployee = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let employee, err;
    [err, employee] = await to(Employee.find());
    if (err) {
      return res.status(500).json({ "Error ": err });
    }
    return res.status(200).json(employee);
  };

  exports.getEmployeeById = async (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    try{
        const user = await Employee.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
  
  //create employee controller
  exports.createEmployee = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("requested body", req.body);
    let err, data, employee;
    if (!req.body.id) {
      employee = new Employee(req.body);
      employee.id = employee._id;
      [err, data] = await to(employee.save());
      if (err) {
        return res.status(400).json({
          ERROR: "Something happening during creation of Expenses",
        });
      }
      if (data) {
        console.log("data", data);
        return res.status(200).json({
          SUCCESS: "Employee setup creation successful",
          id: data._id,
        });
      } else {
        return res.status(400).json({
          ERROR: "Employee creation unsuccessful",
        });
      }
    } else {
      employee = req.body;
      [err, data] = await to(
        Employee.findOneAndUpdate({ id: req.body.id }, req.body)
      );
  
      if (err) {
        return res.status(400).json({
          ERROR: "Something happening during Updation of Employee",
        });
      }
  
      if (data) {
        return res.status(200).json({
          SUCCESS: "Employee Updated successful",
          id: req.body.id,
        });
      } else {
        return res.status(404).json({
          ERROR: "Employee Not Found",
        });
      }
    }
  };
  //deleteExpenses_data controller
  exports.deleteEmployee = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let employee;
    [err, employee] = await to(
      Employee.findOneAndDelete(
        { _id: mongoose.Types.ObjectId(req.params.id) },
        req.body
      )
    );
    if (err) {
      return res.status(500).json({ Error: err });
    }
    return res.status(200).json({"successfull delete":employee});
  };