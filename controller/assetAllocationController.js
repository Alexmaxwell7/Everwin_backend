const Stock = require("../model/assetStock");
const Allocation=require('../model/assetAllocation');
const Settings = require('../model/assetSettings');
const to = require("await-to-js").default;
const mongoose = require("mongoose");

//get assetstocks
exports.getAsset_Stock = async (req, res) => {
let stock, err;
[err, stock] = await to(Stock.find());
if (err) {
  return res.status(500).json({ "Error ": err });
}
return res.status(200).json(stock);
};

//create asset_stock and update asset_stock
exports.createAsset_Stock = async (req, res) => {
    console.log("requested body", req.body);
    let err, data, stock;
    if (!req.body.id) {
        stock = new Stock(req.body);
        stock.id = stock._id;
      [err, data] = await to(stock.save());
      if (err) {
        return res.status(400).json({
          ERROR: "Something happening during creation of assetstock",
        });
      }
      if (data) {
        console.log("data", data);
        return res.status(200).json({
          SUCCESS: "stock setup creation successful",
          id: data._id,
        });
      } else {
        return res.status(400).json({
          ERROR: "Stock creation unsuccessful",
        });
      }
    } else {
      stock = req.body;
      [err, data] = await to(
        Stock.findOneAndUpdate({ id: req.body.id }, req.body)
      );
  
      if (err) {
        return res.status(400).json({
          ERROR: "Something happening during Updation of Stock",
        });
      }
  
      if (data) {
        return res.status(200).json({
          SUCCESS: "Stock Updated successful",
          id: req.body.id,
        });
      } else {
        return res.status(404).json({
          ERROR: "Stock Not Found",
        });
      }
    }
  };

//deleteasset_Stock_data controller
exports.deleteAsset_Stock = async (req, res) => {
    let stock;
    [err, stock] = await to(
      Stock.findOneAndDelete(
        { _id: mongoose.Types.ObjectId(req.params.id) },
        req.body
      )
    );
    if (err) {
      return res.status(500).json({ Error: err });
    }
    return res.status(200).json(stock);
  };

 //get assetallocation
exports.getAsset_Allocation = async (req, res) => {
  let allocation, err;
  [err, allocation] = await to(Allocation.find());
  if (err) {
    return res.status(500).json({ "Error ": err });
  }
  return res.status(200).json(allocation);
  };

//create asset_allocation and update asset_allocation
exports.createAsset_Allocation = async (req, res) => {
  console.log("requested body", req.body);
  let err, data, allocation;
  if (!req.body.id) {
      allocation = new Allocation(req.body);
      allocation.id = allocation._id;
    [err, data] = await to(allocation.save());
    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during creation of AssetAllocation",
      });
    }
    if (data) {
      console.log("data", data);
      return res.status(200).json({
        SUCCESS: "Allocation setup creation successful",
        id: data._id,
      });
    } else {
      return res.status(400).json({
        ERROR: "Allocation creation unsuccessful",
      });
    }
  } else {
    allocation = req.body;
    [err, data] = await to(
      Allocation.findOneAndUpdate({ id: req.body.id }, req.body)
    );

    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during Updation of Allocation",
      });
    }

    if (data) {
      return res.status(200).json({
        SUCCESS: "Allocation Updated successful",
        id: req.body.id,
      });
    } else {
      return res.status(404).json({
        ERROR: "Allocation Not Found",
      });
    }
  }
};

//deleteasset_Allocation_data controller
exports.deleteAsset_Allocation = async (req, res) => {
  let allocation;
  [err, allocation] = await to(
    Allocation.findOneAndDelete(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
  );
  if (err) {
    return res.status(500).json({ Error: err });
  }
  return res.status(200).json(allocation);
};

//get assetallocationsettings
 exports.getAsset_Settings = async (req, res) => {
  let settings, err;
  [err, settings] = await to(Settings.find());
  if (err) {
    return res.status(500).json({ "Error ": err });
  }
  return res.status(200).json(settings);
  };

//create asset_allocationsettings and update asset_allocationsettings
exports.createAsset_Settings = async (req, res) => {
  console.log("requested body", req.body);
  let err, data, settings;
  if (!req.body.id) {
    settings = new Settings(req.body);
    settings.id = settings._id;
    [err, data] = await to(settings.save());
    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during creation of AssetSettings",
      });
    }
    if (data) {
      console.log("data", data);
      return res.status(200).json({
        SUCCESS: "Settings setup creation successful",
        id: data._id,
      });
    } else {
      return res.status(400).json({
        ERROR: "Settings creation unsuccessful",
      });
    }
  } else {
    settings = req.body;
    [err, data] = await to(
      Settings.findOneAndUpdate({ id: req.body.id }, req.body)
    );

    if (err) {
      return res.status(400).json({
        ERROR: "Something happening during Updation of Settings",
      });
    }

    if (data) {
      return res.status(200).json({
        SUCCESS: "Settings Updated successful",
        id: req.body.id,
      });
    } else {
      return res.status(404).json({
        ERROR: "Settings Not Found",
      });
    }
  }
};

//deleteasset_Allocation_data controller
exports.deleteAsset_Settings = async (req, res) => {
  let settings;
  [err, settings] = await to(
    Settings.findOneAndDelete(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
  );
  if (err) {
    return res.status(500).json({ Error: err });
  }
  return res.status(200).json(settings);
};
  