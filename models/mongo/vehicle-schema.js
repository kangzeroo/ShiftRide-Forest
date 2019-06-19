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
        type: String,
        default: "Point"
      },
      coordinates: [Number]
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
    timestamps: true,
    strict: false
  }
);

schema.pre("save", function(next) {
  if (this.ownerId) {
    this.ownerId = mongoose.Types.ObjectId(this.ownerId);
  }
  next();
});

// schema.index({ location: "2dsphere" });

const Vehicle = mongoose.model("Vehicle", schema);
// Vehicle.on("index", function(error) {
//   // "_id index cannot be sparse"
//   console.log(error.message);
// });

module.exports = Vehicle;
