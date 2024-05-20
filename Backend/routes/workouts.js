const express = require("express");
const workoutController = require("../controllers/workoutController");

const router = express.Router();

router.get("/workout", workoutController.getAllWorkout);

router.get("/workout/:id", workoutController.getSingleWorkout);

router.post("/workout", workoutController.addNewWorkout);

router.put("/workout/:id", workoutController.editWorkout);

router.delete("/workout/:id", workoutController.deleteWorkout);

module.exports = router;
