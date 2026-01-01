const express = require("express");
const { createTask, getMyTasks } = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, createTask);
router.get("/", auth, getMyTasks);

module.exports = router;
