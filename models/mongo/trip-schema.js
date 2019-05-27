const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: ObjectId,
    vehicleId: ObjectId,
    paymentCardId: ObjectId,
    promotionId: ObjectId,
    hadIssues: String,
    notes: String,
    paymentPaused: Boolean,
    paymentFailed: Boolean,
    paidAt: Date,
    voidPayment: Boolean,
    returnBy: Date,
    bookedAt: Date,
    returnedAt: Date,
    bookedAtLocation: String,
    userNotes: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Trip", schema);
