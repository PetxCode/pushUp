const mongoose = require("mongoose");
const model = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("model", model);
