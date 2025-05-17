const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isDone: { type: Boolean, default: false },
},
  {
    timestamps: true, // ⬅️ This adds createdAt and updatedAt fields
  });

module.exports = mongoose.model("Todo", todoSchema);
