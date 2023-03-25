const express = require("express");

const taskController = require('../controllers/taskController')
// const TaskModel = require("../models/tasks")
const router = express.Router();

router.get('/create' , taskController.createTask);
router.post('/add' , taskController.addTask);
router.get('/all' , taskController.getAllTasks);
router.get('/' , taskController.getAllTasks);
router.get('/:id' , taskController.taskDetails)
router.post('/update' , taskController.updateTask)
// router.post('/update' , taskController.updateTask)

module.exports = router;