const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    vehicleId: ObjectId,
    tripId: ObjectId,
    userId: ObjectId,
    startAt: Date,
    endAt: Date,
    eventType: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("VehicleSchedule", schema);
