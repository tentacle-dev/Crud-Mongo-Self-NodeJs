const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes/routes.js");

const MONGODB_URI = "mongodb+srv://thanush:test1234@crud1.cn1rwp2.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(app.listen(3000, () => {
    console.log("Server is running at port 3000");
}))
.catch(error => {
    console.log(error);
    }
)

app.use(express.json());

app.use(Router);

module.exports = app;