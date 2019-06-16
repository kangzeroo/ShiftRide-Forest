const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    vehicleId: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    points: Number,
    review: String
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
  next();
});

module.exports = mongoose.model("VehicleReview", schema);
