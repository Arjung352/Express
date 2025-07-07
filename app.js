// // middleware in express js
const express = require("express");
let people = require("./people");
const app = express();
app.use(express.static("./post-method"));
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
// // app.get("/api/people", (req, res) => {
// //   res.json(people);
// // });
// // app.post("/api/people", (req, res) => {
// //   const { name } = req.body;
// //   if (!name) {
// //     return res.status(400).json({ sucess: false });
// //   }
// //   people.push({ name: name });
// //   res.status(201).json(people);
// // });
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let newPeople = [...people];
  let peopleID = people.find((people) => people.id === Number(id));
  if (peopleID) {
    newPeople = newPeople.map((series) => {
      if (series.id == id) {
        series.name = name;
      }
      return series;
    });
  } else {
    return res.json({ Error: "Person with that id not found" });
  }
  res.json(newPeople);
});
// app.post("/login", (req, res) => {
//   let { name } = req.body;
//   if (name) {
//     people.push({ name });
//     return res.json(people);
//   }
//   return res.status(401).send("Please provide a name");
// });
app.post("/api/person", (req, res) => {
  let { name, id } = req.body;
  if ((name, id)) {
    people.push({ id, name });
    return res.json(people);
  }
});
app.delete("/api/person/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ error: "Person not found with that ID" });
  }
  people = people.filter((person) => person.id !== Number(id));
  return res.status(200).json(people);
});
app.listen(5000, () => {
  console.log("port listning at port 5000");
});
