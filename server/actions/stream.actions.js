import { useSelector } from "react-redux";
import { StreamClient } from 'stream';
// import dotenv from 'dotenv';

// dotenv.config();

const apiKey = import.meta.env.VITE_PUBLIC_STREAM_API_KEY;
const apiSecret = import.meta.env.VITE_STREAM_SECRET_KEY;

export const tokenProvider=async()=>{
    const {currentUser}=await useSelector((state)=>state.user);

    if (!currentUser) throw new Error('User not authenticated.');
    if (!apiKey) throw new Error('No Api Key.');
    if (!apiSecret) throw new Error('No Api Secret.');

    const client=new StreamClient(apiKey, apiSecret);
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued=Math.floor(Date.now()/1000)-60;

    const token=client.createToken(currentUser.id, exp, issued);

    return token;
};