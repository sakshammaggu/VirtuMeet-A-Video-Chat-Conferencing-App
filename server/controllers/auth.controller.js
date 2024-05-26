import User from '../models/user.model.js';
import bcyrptjs from 'bcryptjs';

export const signup=async(req, res)=>{
    const {userName, email, password}=req.body;

    if (!userName || !email || !password || userName==='' || email==='' || password===''){
        return res.status(400).json({message: "All fields are mandatory!!"});
    }

    const hashedPassword=bcyrptjs.hashSync(password, 10);

    const newUser=new User({
        userName: userName,
        email: email,
        password: hashedPassword
    });


    try {
        await newUser.save();
        res.json("Signup successfull!!");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}