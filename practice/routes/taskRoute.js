// for creating a task
const router = require("express").Router();
const task = require("../model/task");
router.post("/create-task", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const newTask = new task({ title: title, desc: desc });
    await newTask.save();
    res.status(200).json({ message: "task created succesfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
// for fetching all the tasks
router.get("/get", async (req, res) => {
  try {
    let response = await task.find({});
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
