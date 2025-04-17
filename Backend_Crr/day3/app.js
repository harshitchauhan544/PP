const PORT = 2100;
const express = require('express');
const { requestLog } = require('./utils/logger');
const { saveProductInDb } = require('./database/db');


const app = express();

app.use(express.json()); // to parse the json data from the body of the request

// use -> is a middleware -> runs at every request
app.use((req,res,next)=>{
    console.log(Object.keys(res));
    requestLog(req);
    next();
})

app.get("/",(req,res)=>{
    // console.log(req.url,req.method);
    // requestLog(req);
    res.json({
        status : "success",
        message: `Server is running on port ${2100}`
    })
});

app.post('/products',async (req,res)=>{
    // console.log(req.url,req.method);
    // requestLog(req);
    try{
        const data = req.body;
        console.log(data);
        await saveProductInDb(data);
        res.json({
            status : "fail",
            message: "Work in progress"
        })
    }
    catch(err){
        console.log("/products",err.message);
        res.status(500);
        res.json({
            status : "fail",
            message: "Something went wrong.."
        })
    }
});

app.use((req,res,next)=>{
    res.status(404);
    res.json({
        status : "fail",
        message: "Route not defined"
    })
})


app.listen(PORT, ()=> {
    console.log(`App is running on port: ${PORT}`)
})