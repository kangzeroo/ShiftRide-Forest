const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    aliasName: String,
    licenseFirstName: String,
    licenseLastName: String,
    licenseNumber: String,
    licenseAddress: String,
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
    timestamps: true,
    strict: false
  }
);

// schema.index({ location: "2dsphere" });
const User = mongoose.model("User", schema);
// User.on("index", function(error) {
//   // "_id index cannot be sparse"
//   console.log(error.message);
// });

module.exports = User;
