const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
