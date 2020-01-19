const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    title: String,
    items: []
  },
  {
    timestamps: true
  }
);

const Card = mongoose.model("Card", cardSchema)

module.exports = Card;