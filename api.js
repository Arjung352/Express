// A basic example of express JS
// let app = require("express")();
// app.get("/", (req, res) => {
//   res.status(200).send("hello word");
// });
// app.get("/about", (req, res) => {
//   res.status(200).send("welcome to about page");
// });
// app.all("*", (req, res) => {
//   res.status(404).send("Page not found");
// });
// app.listen(5000, () => {
//   console.log("server is listining at port 5000");
// });

// Here we are returning a Static Html page-->
// There are 3 ways to send a file:-
// 1. describing the specific path
// 2. dumping all the file into static folder
// 3. using ssr(sever side rendering)
// const express = require("express");
// const path = require("path");
// let app = express();
// app.use(express.static("./static"));
// app.get("/", (req, res) => {
//   res.sendfile(path.resolve(__dirname, "./static"));
// });
// app.all("*", (req, res) => {
//   res.status(404).send("Page not found");
// });
// app.listen(5000, () => {
//   console.log("server is listing at port 5000");
// });

// making a custom API
// const express = require("express");
// const path = require("path");
// let { netflix } = require("./netflix");
// let app = express();
// app.use(express.static(path.join(__dirname, "static")));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./static"));
// });
// app.get("/api/:req", (req, res) => {
//   let asked = req.params.req;
//   let result = netflix.filter((series) => {
//     return Object.values(series).some(
//       (value) => String(value).toLowerCase() === asked
//     );
//   });
//   if (result.length === 0) {
//     res.json({ error: "series not found" });
//   } else {
//     res.json(result);
//   }
// });
// app.all("*", (req, res) => {
//   res.status(404).send("Page not found");
// });

// app.listen(5000, () => {
//   console.log("Server listening at port 5000");
// });

// returning a specific data using params
// const express = require("express");
// const path = require("path");
// let app = express();
// let { netflix } = require("./netflix");
// app.use(express.static("./static"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./static"));
// });
// app.get("/api", (req, res) => {
//   let api = netflix.map((element) => {
//     return element.id;
//   });
//   res.json(api);
// });
// app.get("/api/:id", (req, res) => {
//   let reqID = req.params.id;
//   let singleInfo = netflix.find((series) => series.id === Number(reqID));
//   res.json(singleInfo);
// });
// app.listen(5000, () => {
//   console.log("Server listning at port 5000");
// });
//  making a api for returning the information about a perticular series:-
// let express = require("express");
// let app = express();
// let { netflix } = require("./netflix");
// let path = require("path");
// app.use(express.static(path.resolve(__dirname, "./static")));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./static/index.html"));
// });
// app.get("/api", (req, res) => {
//   res.json(netflix);
// });
// // now we can use params to provide requested info:-
// app.get("/api/:res", (req, res) => {
//   let querry = req.params.res;
//   let result = netflix.find((series) => series.sname === querry);
//   res.json(result);
// });
// app.listen(5000, () => {
//   console.log("server listning at port 5000");
// });

// In this we are going to use querry
// In this we can take multiple request from user and return them a derired output
// const express = require("express");
// const path = require("path");
// const { netflix } = require("./netflix");
// let app = express();
// app.use(express.static(path.resolve(__dirname, "./static")));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./static/index.html"));
// });
// app.get("/api", (req, res) => {
//   res.json(netflix);
// });
// app.get("/api/id/:id/name/:series", (req, res) => {
//   const { id, series } = req.params;
//   console.log(id);
//   const result = netflix.filter(
//     (item) => item.id === Number(id) || item.sname === series
//   );

//   if (result.length > 0) {
//     res.status(200).json(result[0]);
//   } else {
//     res.status(404).json({ error: "Series not found" });
//   }
// });

// querry-->
// app.get("/api/query", (req, res) => {
//   let { name, limit } = req.query;
//   let sortedArray = [...netflix];
//   if (name) {
//     sortedArray = sortedArray.filter((series) => {
//       return series.sname.startsWith(name);
//     });
//   }
//   if (limit) {
//     sortedArray = sortedArray.slice(0, Number(limit));
//   }
//   if (sortedArray < 1) {
//     res.json({ error: "No series matches your search" });
//   }
//   res.status(200).json(sortedArray);
// });
// app.listen(5000, () => {
//   console.log("server is listning at port 5000");
// });
