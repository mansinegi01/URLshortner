const express = require('express')
const app = express();
const cors = require('cors')

//import
const {connectDB} = require('./connections')
const route = require('./routes/URLroutes');


//cors
let corsOption = {
    origin : "http://localhost:5173",
    methods : "GET, POST, PUT, PATCH, DELETE",
    credentials : true
}



// Connection with mongoDB
connectDB("mongodb://127.0.0.1:27017/shortURL")

// Middlewares
app.use(cors(corsOption))

app.use(express.urlencoded({extended : false}))
app.use(express.json())


// routes
app.use('/api',route)
app.use("/", route); 


//port
app.listen(5000,()=>console.log("server started"));