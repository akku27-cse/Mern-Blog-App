const dotenv = require('dotenv');


const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDb = require('./config/db');


//

//
dotenv.config();

//import routes
const userRoute = require('./routes/userRoutes');
const blogRoute = require("./routes/blogRoutes");

//mongodb
connectDb();

//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//route

app.use("/api/v1/user", userRoute);

app.use("/api/v1/blog",blogRoute)
// app.get('/', (req,res)=> {
//     res.status(200).send({
//         "message":"Node Server"
//     })
// })




//listen
const port = process.env.PORT;
app.listen(port, (req,res) => {
    console.log(`Server Running on Port ${port}`.bgMagenta);    
})

