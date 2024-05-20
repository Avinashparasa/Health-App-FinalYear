const express = require("express");
const router = express.Router();

router.get("/workout", (req, res) => {
  res.json({ msg: "all the workouts are displayed here in this page" });
});

router.get("/workout/:id", (req, res) => {
  res.json({
    msg: "the details of the single workout is available in this page",
  });
});

router.post("/workout", (req, res) => {
  res.json({ msg: "new workout can be added to the workout list" });
});

router.put("/workout/:id", (req, res) => {
  res.json({ msg: "the workout details can be edited in this page" });
});

router.delete("/workout/:id", (req, res) => {
  res.json({ msg: "the workout details can be deleted from the workout list" });
});

module.exports = router;
