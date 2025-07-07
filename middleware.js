// middleware in express js
const express = require("express");
const app = express();
const { logger } = require("./logger");
const authenticate = require("./authenticate");
app.use([logger, authenticate]);
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/about/product", (req, res) => {
  res.send("Product page");
});
app.get("/about/product/price", (req, res) => {
  res.send("Price page");
});
app.listen(5000, () => {
  console.log("port listning at port 5000");
});
