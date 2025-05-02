require('dotenv').config();
require("./src/config/db.js");

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {productRouter} = require('./src/api/v1/products/routes/product-routes.js');
const { authRouter } = require('./src/api/v1/auth/routes/authRoutes.js');


const PORT = 2200;
const app = express();

// App level middleware -- always runs
// app.use((req,res,next)=>{
//     console.log("----Hello----");
// });

// collects the data chunks together , otherwise we get an error
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/products',productRouter)
app.use('/api/v1/auth',authRouter)

app.listen(PORT, ()=>{
    console.log(`App is running on PORT = ${PORT}`);
});