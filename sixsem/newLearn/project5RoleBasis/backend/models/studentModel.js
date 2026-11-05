const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
  std_name: {
    type: String,
    required: true,
  },
  std_email: {
    type: String,
    required: true,
  },
  std_gender: {
    type: String,
    required: true,
    enum :["female","male","others"]
  },
  std_password : {
    type : String,
    required : true
  }
});

const stdModel = mongoose.model("stds",stdSchema);

module.exports = stdModel;
 