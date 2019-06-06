const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    aliasName: String,
    licenseFirstName: String,
    licenseLastName: String,
    licenseNumber: String,
    licenseProvince: String,
    licenseCountry: String,
    licensePostalCode: String,
    licenseBirth: Date,
    licenseExpiry: Date,
    licenseDateOfLastVerification: Date,
    status: String,
    email: String,
    phoneNumber: String,
    profilePicture: String,
    storeCredit: Number,
    canBook: Boolean,
    hasFleet: Boolean,
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
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", schema);
