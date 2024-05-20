require("dotenv").config();
const express = require("express");

//express app
const app = express();

//routers
app.get("/", (req, res) => {
  res.json({ msg: "This is the message form express app" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
