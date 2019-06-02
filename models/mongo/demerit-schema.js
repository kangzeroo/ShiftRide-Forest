const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    value: Number,
    demeritDate: Date,
    demeriReason: String,
    tripId: { type: Schema.Types.ObjectId, ref: "Trip" }
  },
  {
    timestamps: true
  }
);

schema.pre("save", function(next) {
  if (this.userId) {
    this.userId = mongoose.Types.ObjectId(this.userId);
  }
  if (this.tripId) {
    this.tripId = mongoose.Types.ObjectId(this.tripId);
  }
  next();
});

module.exports = mongoose.model("Demerit", schema);
