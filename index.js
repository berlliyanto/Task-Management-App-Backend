const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const auth = require("./middlewares/auth.middleware");
const {unless} = require('express-unless');

var port = process.env.PORT;
const app = express();

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(
    ()=>{
        console.log("Database Connected to task_management");
    },
    (error)=>{
        console.log("Database Can't Connected", error);
    }
);

app.use(cors());
auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path:[
            { url: "/api/login", methods: ["POST"] },
            { url: "/api/register", methods: ["POST"] },
        ]
    })
)

app.use(express.json())
app.use("/api", require("./routes/app.routes"));
app.listen(port, function () {
    console.log("Connected to : ", port);
  })
