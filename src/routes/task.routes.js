const { Router } = require("express")
const router = Router();
const { getAllTasks, singleTask, createTask, deleteTask, updateTask } = require("../controllers/task.controller")

router.get("/tasks", getAllTasks)

router.get("/tasks/:id", singleTask)

router.post("/tasks", createTask)

router.delete("/tasks/:id", deleteTask)

router.put("/tasks/:id", updateTask)

module.exports = router;