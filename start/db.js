const mongoose = require("mongoose");

module.exports = function (url) {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Error in connecting to DataBase", err.message);
    });
};
