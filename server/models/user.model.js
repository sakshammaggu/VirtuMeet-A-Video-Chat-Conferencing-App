const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    }, 

    password:{
        type: String,
        require: true,
    },
},{
    timestamps: true,
})

const User=mongoose.model('User', userSchema);
export default User;