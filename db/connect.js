const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect("mongodb+srv://nacica:0232@cluster0.coc9oas.mongodb.net/todoapp?retryWrites=true&w=majority")
    .then(() => console.log("データベースと接続中・・・"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;