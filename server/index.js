import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from '../server/routes/auth.route.js';

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
app.use(express.json());

app.listen((3000), ()=>{
    console.log("Server is running at port 3000!");
})

app.use('/api/auth', authRoutes);

// middleware to handle errors
app.use((err, req, res, next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message
    })
});