const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    ownerId: ObjectId,
    licensePlate: String,
    make: String,
    model: String,
    color: String,
    year: Number,
    vin: String,
    active: Boolean,
    verified: Boolean,
    costMultiple: Number,
    gasMultiple: Number,
    hasGasCard: Boolean,
    location: Array,
    parkingDescription: String,
    fullAddress: String,
    bodyType: String,
    transmission: String,
    seatCount: Number,
    gasType: String,
    petsAllowed: Boolean,
    smokingAllowed: Boolean,
    features: Array,
    description: String,
    photos: Array,
    specialInstructions: String,
    lockboxCode: String,
    lockboxLocation: Array,
    lockboxVideoUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vehicle", schema);
