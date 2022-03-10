const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const assetSettingSchema = new Schema({
    organization_id: {
        type: Number,
      },
     categories:String,
     items:String
}, {
    timestamps: true,
});

const AssetSettingsModel = model("assetSettings", assetSettingSchema, "assetSettings");

module.exports = AssetSettingsModel;
