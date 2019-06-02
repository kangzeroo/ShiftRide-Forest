const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    vehicleId: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    paymentCardId: { type: Schema.Types.ObjectId, ref: "PaymentCard" },
    promotionId: { type: Schema.Types.ObjectId, ref: "Promotion" },
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

schema.pre("save", function(next) {
  if (this.userId) {
    this.userId = mongoose.Types.ObjectId(this.userId);
  }
  if (this.vehicleId) {
    this.vehicleId = mongoose.Types.ObjectId(this.vehicleId);
  }
  if (this.paymentCardId) {
    this.paymentCardId = mongoose.Types.ObjectId(this.paymentCardId);
  }
  if (this.promotionId) {
    this.promotionId = mongoose.Types.ObjectId(this.promotionId);
  }
  next();
});

module.exports = mongoose.model("Trip", schema);
