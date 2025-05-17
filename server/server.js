const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./routes/todos.js");

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(DB_URL);
}

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

// app.get("/", (req, res) => {
//   res.send("Hello");
//   console.log(`${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Serve is listening at: "http://localhost:${PORT}"`);
});
