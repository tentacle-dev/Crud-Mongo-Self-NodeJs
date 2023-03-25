const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const database = process.env.MONGODB_URI
mongoose.connect(database , {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => console.log("Connected") )
.catch( err => console.log(err));


app.use(express.urlencoded({extended: false}))

app.use('/' , require('./routes/routes'))
const PORT = 3000;

app.listen(PORT , console.log("Server Created at port 3000"));

// const path = require('path')
// const mongoose = require("mongoose");
// const Router = require("./routes/routes.js");



//mongoose.connect(MONGODB_URI , {
//    useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(app.listen(PORT, () => {
//     console.log("Server is running at port 3000");
// }))
// .catch(error => {
//     console.log(error);
//     }
// )



// app.use(express.json());

// app.use(Router);


// module.exports = app;