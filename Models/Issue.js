const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  text: String,
  isOpen: Boolean,
  issueNumber: Number,
  dateOpened: {
    type: String,
    default: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
  },
  issueCreator: String,
  tags: Array
});

module.exports = Issue = mongoose.model('issue', issueSchema);