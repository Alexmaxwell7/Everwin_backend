const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const assetStockSchema = new Schema({
    organization_id: {
        type: Number,
      },
    id:String,
    category_type:String,
    type:String,
    asset_Id:Number,
    make:String,
    modal_No:Number,
    year_of_manufacture:Number,
    status:String,
    no_assets:Number,
    possession:Number,
    handover:Number,
    company:String,
    remarks:String,
    employee_Id:String,
    employee_Name:String,
    department:String,
    designation:String,
    joing_Date:String
}, {
    timestamps: true,
});

const AssetStockModel = model("assetStock", assetStockSchema, "assetStock");

module.exports = AssetStockModel;
