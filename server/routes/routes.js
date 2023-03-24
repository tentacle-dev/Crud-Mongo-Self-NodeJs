const express = require("express");

const TaskModel = require("../models");

const app = express();

app.post("/add" ,async (req,res) => {
  const task = new TaskModel(req.body);
  try {
    await task.save();
    res.send(task)
  } catch (error) {
    res.status(500).send(error)
  }
});

app.get("/tasks" , async(req,res) => {
    const task = await TaskModel.find();
    try {
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = app;