const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ecom_db");
const schema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

module.exports = mongoose.model("users", schema);
