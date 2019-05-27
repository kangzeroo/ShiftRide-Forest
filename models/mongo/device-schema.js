const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    provider: String,
    providerId: String,
    vehicleId: ObjectId,
    imei: String,
    kitId: String,
    simId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Device", schema);
