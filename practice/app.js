const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRoute = require("./routes/taskRoute");
// middleware
app.use(express.json());
// setting routes
app.use("/task", taskRoute);
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
mongoose.connect(`process.global.env`).then(() => {
  console.log("database connected succesfully");
  app.listen(3000, () => {
    console.log("server is listning at port 3000");
  });
});
