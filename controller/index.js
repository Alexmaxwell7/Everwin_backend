const Expenses = require("../model/index");
const ExpensesType = require("../model/expensesType");
const to = require("await-to-js").default;
const mongoose = require("mongoose");

// exports.getExpenses = async (req, res) => {
// let expenses, err;
// [err, expenses] = await to(Expenses.find());
// if (err) {
//   return res.status(500).json({ "Error ": err });
// }
// return res.status(200).json(expenses);
// };

//getallexpenses_data controller
exports.getExpenses = async (req, res) => {
  let data, err;
  [err, data] = await to(
    Expenses.aggregate([
      {
        $lookup: {
          from: "expensestypes",
          localField: "expenses_Type",
          foreignField: "type",
          as: "ExpensesType_Data",
        },
      },
    ])
  );
  if (!data)
    return res
      .status(404)
      .json({ status: false, message: "Data Details not found." });
  else return res.status(200).json({ status: true, data });
};
//getallexpensestype controller
exports.getExpensesType = async (req, res) => {
  let expenses, err;
  [err, expenses] = await to(ExpensesType.find());
  if (err) {
    return res.status(500).json({ "Error ": err });
  }
  return res.status(200).json(expenses);
};

//createExpenses and updateExpenses controller
exports.createExpenses = async (req, res) => {
  console.log("requested body", req.body);
  let err, data, expenses;
  if (!req.body.id) {
    expenses = new Expenses(req.body);
    expenses.id = expenses._id;
    [err, data] = await to(expenses.save());
    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during creation of Expenses",
      });
    }
    if (data) {
      console.log("data", data);
      return res.status(200).json({
        SUCCESS: "Expenses setup creation successful",
        id: data._id,
      });
    } else {
      return res.status(400).json({
        ERROR: "Expenses creation unsuccessful",
      });
    }
  } else {
    expenses = req.body;
    [err, data] = await to(
      Expenses.findOneAndUpdate({ id: req.body.id }, req.body)
    );

    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during Updation of Expenses",
      });
    }

    if (data) {
      return res.status(200).json({
        SUCCESS: "Expenses Updated successful",
        id: req.body.id,
      });
    } else {
      return res.status(404).json({
        ERROR: "Expenses Not Found",
      });
    }
  }
};
//indivual. updateExpenses controller
exports.updateExpenses = async (req, res) => {
  let expenses;
  [err, expenses] = await to(
    Expenses.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
  );
  if (err) {
    return res.status(500).json({ Error: err });
  }
  return res.status(200).json(expenses);
};
//deleteExpenses_data controller
exports.deleteExpenses = async (req, res) => {
  let expenses;
  [err, expenses] = await to(
    Expenses.findOneAndDelete(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
  );
  if (err) {
    return res.status(500).json({ Error: err });
  }
  return res.status(200).json(expenses);
};
//create and update expensestype controller
exports.createExpensestype = async (req, res) => {
  console.log("requested expensestype", req.body);
  let err, data, expenses;
  if (!req.body.id) {
    expenses = new ExpensesType(req.body);
    expenses.id = expenses._id;
    [err, data] = await to(expenses.save());
    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during creation of Expenses",
      });
    }
    if (data) {
      console.log("data", data);
      return res.status(200).json({
        SUCCESS: "Expenses setup creation successful",
        id: data._id,
      });
    } else {
      return res.status(400).json({
        ERROR: "Expenses creation unsuccessful",
      });
    }
  } else {
    expenses = req.body;
    [err, data] = await to(
      Expenses.findOneAndUpdate({ id: req.body.id }, req.body)
    );

    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during Updation of Expenses",
      });
    }

    if (data) {
      return res.status(200).json({
        SUCCESS: "Expenses Updated successful",
        id: req.body.id,
      });
    } else {
      return res.status(404).json({
        ERROR: "Expenses Not Found",
      });
    }
  }
};
//deleteexpensestype controller
exports.deleteExpensestype = async (req, res) => {
  let expensestype;
  [err, expensestype] = await to(
    ExpensesType.findOneAndDelete(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
  );
  if (err) {
    return res.status(500).json({ Error: err });
  }
  return res.status(200).json(expensestype);
};
