const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const taskController = require('../controllers/task.controller');

router.post("/login", authController.login);
router.post("/register", authController.register);

router.post("/user/:id", authController.changePassword);
router.get("/user", authController.getUserData);
router.get("/user/:id", authController.userProfile);

router.get("/task/:id", taskController.getTaskUser);
router.post("/task", taskController.addTask);
router.put("/task/:id", taskController.updateTaskUser);

module.exports = router;