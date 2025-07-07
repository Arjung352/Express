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
mongoose
  .connect(
    "mongodb+srv://arjung7751:UkLpWYz3oTzn1WRn@cluster0.pzmx1.mongodb.net/Revision"
  )
  .then(() => {
    console.log("database connected succesfully");
    app.listen(3000, () => {
      console.log("server is listning at port 3000");
    });
  });
