const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("Mongodb connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })

const app=express();

app.listen((3000), ()=>{
    console.log("Server is running at port 3000!");
})

