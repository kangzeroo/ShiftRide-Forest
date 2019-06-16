const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    rewardType: String,
    value: Number,
    audience: String,
    maxUsers: Number,
    startTime: Date,
    endTime: Date,
    notes: String,
    promotionCode: String
  },
  {
    timestamps: true,
    strict: false
  }
);

module.exports = mongoose.model("Promotion", schema);
