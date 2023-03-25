const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    // due_date:{
    //     type: Date,
    //     required: true
    // },
    // created_at:{
    //     type: DateTime,
    //     required:true
    // },
    // updated_at:{
    //     type:DateTime,
    //     required:true
    // },
    // completed:{
    //     type:Boolean,
    //     required:true
    // },
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
