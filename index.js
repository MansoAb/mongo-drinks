const express = require("express");
const mongoose = require("mongoose");

const port = 3000;

const app = express();
app.use(express.json());
app.use(require("./routes/drink.route"));

mongoose.connect(
  "mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/test",
  function () {
    console.log("Подключение к Монго прошло успешно.");
  }
);

app.listen(port, function () {
  console.log("Cервер запущен.");
});
