const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const assetAllocationSchema = new Schema({
    organization_id: {
        type: Number,
      },
    id:String,
    no_assets:Number,
    possession:Number,
    handover:Number,
    category_type:String,
    employee_Name:String,
    department:String,
    designation:String,
    status:String
}, {
    timestamps: true,
});

const AssetAllocationModel = model("assetAllocation", assetAllocationSchema, "assetAllocation");

module.exports = AssetAllocationModel;
