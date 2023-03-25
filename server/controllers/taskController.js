const Task = require("../models/tasks")

const createTask = (req,res) => {
    res.render("createTask" , {})
}

const addTask = (req,res) => {
    const {title , description} = req.body;

    const newTask = new Task({
        title,
        description
    })
    newTask.save()
    .then(res.redirect("all"))
    .catch( err => console.log(err)) 
    }

// const createTask = (req,res) => {
//     const { title , description} = req.body;
//     const newTask = new Task({
//         title,
//         description
//     })
//     newTask.save()
//     .then(res.redirect("allTasks"))
//     .catch( err => console.log(err));
// }

const getAllTasks = (req,res) => {
    Task.find()
    .then( result => res.render("allTasks" , {results : result , pagetitle : "All tasks"}))
    .catch(err => console.log(err))
}
const taskDetails = (req,res) => {
    const id = req.params.id;
    Task.findById(id)
    .then( result => res.render("task" , {results : result , pagetitle : "All tasks"}))
    .catch(err => console.log(err))
}

const updateTask = (req,res) => {
    const titleWhere = req.body.title;
    const desc = req.body.description;
    console.log(req.body);
    Task.findOneAndUpdate( {title : titleWhere } , {description : desc} )
    .then( res.redirect('/'))
    .catch(err => console.log(err))
}

module.exports = {
    getAllTasks,
    createTask,
    addTask,
    taskDetails,
    updateTask
}


// const getAll = (req,res) => {
//     Task.find()
//     .then( result => {
//         res.render('allTasks' , { results : result , title : 'All Tasks'})
//     })
//     .catch( err => {
//         console.log(err);
//     })
// }
