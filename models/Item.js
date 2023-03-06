const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
