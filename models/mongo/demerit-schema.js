const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: ObjectId,
    value: Number,
    demeritDate: ObjectId,
    demeriReason: String,
    tripId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Demerit", schema);
