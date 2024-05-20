require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("path : " + req.path);
  console.log("method : " + req.method);
  next();
});

//routers
app.get("/", (req, res) => {
  res.json({ msg: "This is the home page of the fitness application" });
});
app.use("/", workoutRoutes);

const port = process.env.PORT;
//connecting to database
mongoose
  .connect(process.env.MongoDB_database)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
      console.log("database is connected");
    });
  })
  .catch((err) => console.log(err.message));
