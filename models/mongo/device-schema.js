const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    provider: String,
    providerId: String,
    vehicleId: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    imei: String,
    kitId: String,
    simId: String
  },
  {
    timestamps: true,
    strict: false
  }
);

schema.pre("save", function(next) {
  console.log(this);
  if (this.vehicleId) {
    this.vehicleId = mongoose.Types.ObjectId(this.vehicleId);
  }
  next();
});

module.exports = mongoose.model("Device", schema);
