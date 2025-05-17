const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo.js");
const wrapAsync = require("../utils/wrapAsync.js");

// GET all Todos
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  })
);

// Post new Todo
router.post(
  "/",
  wrapAsync(async (req, res) => {
    const { task } = req.body;
    const newTodo = new Todo({ task });
    const result = await newTodo.save();

    res.status(201).json(newTodo);
  })
);

// DELETE new Todo
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    res.send(204).end();
  })
);

// TOGGLE isDone
router.patch(
  "/:id",
  wrapAsync(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.isDone = !todo.isDone;
    await todo.save();
    res.json(todo);
  })
);

module.exports = router;
