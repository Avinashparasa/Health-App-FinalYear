const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get("/workout", (req, res) => {
  res.json({ msg: "all the workouts are displayed here in this page" });
});

router.get("/workout/:id", (req, res) => {
  res.json({
    msg: "the details of the single workout is available in this page",
  });
});

router.post("/workout", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

router.put("/workout/:id", (req, res) => {
  res.json({ msg: "the workout details can be edited in this page" });
});

router.delete("/workout/:id", (req, res) => {
  res.json({ msg: "the workout details can be deleted from the workout list" });
});

module.exports = router;
