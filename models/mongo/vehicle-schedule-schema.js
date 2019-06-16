const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    vehicleId: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    tripId: { type: Schema.Types.ObjectId, ref: "Trip" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    startAt: Date,
    endAt: Date,
    eventType: String
  },
  {
    timestamps: true,
    strict: false
  }
);

schema.pre("save", function(next) {
  if (this.userId) {
    this.userId = mongoose.Types.ObjectId(this.userId);
  }
  if (this.vehicleId) {
    this.vehicleId = mongoose.Types.ObjectId(this.vehicleId);
  }
  if (this.tripId) {
    this.tripId = mongoose.Types.ObjectId(this.tripId);
  }
  next();
});

module.exports = mongoose.model("VehicleSchedule", schema);
