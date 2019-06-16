const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    cardNumber: String,
    expiryMonth: String,
    expiryYear: String,
    issueMonth: String,
    issueYear: String,
    cvc: Number,
    firstName: String,
    lastName: String,
    address: String,
    brand: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" }
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
  next();
});

module.exports = mongoose.model("PaymentCard", schema);
