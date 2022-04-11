const mongoose = require("mongoose");

// mongodb+srv://user_01:1111@cluster0.a9cry.mongodb.net/test

const DB_HOST =
  "mongodb+srv://user_01:1111@cluster0.a9cry.mongodb.net/online_shop?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
