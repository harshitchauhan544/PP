const mongoose = require('mongoose')
const fs = require('fs')

const data = fs.readFileSync('.env');
console.log(data.toString());

// mongoose.connect(
//     "mongodb+srv://harshitchauhan544:Harshit404@cluster0.oiagbsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// ).then(()=>{
//     console.log("--- DB Connection Connected");
// }).catch((err)=>{
//     console.log("----- DB Connection Error ------");
//     console.log(err.message);
//     console.log("--------------------------------");
// })

//doing the above work using .env variables

mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("--- DB Connection Connected");
}).catch((err)=>{
    console.log("----- DB Connection Error ------");
    console.log(err.message);
    console.log("--------------------------------");
})