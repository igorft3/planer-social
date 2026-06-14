const express = require("express");
const router = express.Router();
const {
  getTodosByList,
  createTodo,
  toggleTodo,
  deleteTodo
} = require("../controllers/todoController");

router.get("/:id", getTodosByList);
router.post("/:id", createTodo);
router.patch("/:id", toggleTodo);
router.delete("/:id", deleteTodo);

module.exports = router;