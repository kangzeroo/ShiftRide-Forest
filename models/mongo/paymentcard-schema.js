const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    cardNumber: String,
    expiryMonth: String,
    expiryYear: ObjectId,
    issueMonth: String,
    issueYear: String,
    cvc: Number,
    firstName: String,
    lastName: String,
    address: String,
    brand: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("PaymentCard", schema);
