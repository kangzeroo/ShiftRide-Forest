const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: "User" },
    alias: String,
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
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        required: false
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
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
    lockboxLocation: String,
    lockboxVideoUrl: String
  },
  {
    timestamps: true
  }
);

schema.pre("save", function(next) {
  if (this.ownerId) {
    this.ownerId = mongoose.Types.ObjectId(this.ownerId);
  }
  next();
});

module.exports = mongoose.model("Vehicle", schema);
