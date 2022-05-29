const express = require('express');
const router = express.Router();
const tasksController = require("../controllers/task.controller.js");

router.get("/", tasksController.findAll);
router.post("/", tasksController.create);
router.get("/:id", tasksController.findById);
router.put("/:id", tasksController.update);
router.patch("/:id", tasksController.updateCompleted);
router.delete("/:id", tasksController.delete);

module.exports = router;
