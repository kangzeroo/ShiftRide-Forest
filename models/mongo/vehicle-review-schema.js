const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: ObjectId,
    vehicleId: ObjectId,
    points: Number,
    review: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("VehicleReview", schema);
