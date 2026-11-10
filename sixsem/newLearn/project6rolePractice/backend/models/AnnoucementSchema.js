const mongoose = require("mongoose");

const AnnoucementSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  gender : {
    type : String,
    enum : ["female","male","others","all"],
    required : true
  }
});
const AnnouncementModel = mongoose.model("Announcement", AnnoucementSchema);

module.exports = AnnouncementModel