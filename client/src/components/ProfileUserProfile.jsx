import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import {useSelector} from 'react-redux';

export default function ProfileUserProfile() {
    const {currentUser}=useSelector((state)=>state.user);
    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>

            <form className='flex flex-col gap-3'>
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                    <img 
                        src={currentUser.profilePicture} 
                        alt="userProfilePicture" 
                        className='rounded-full w-full h-full object-cover border-8 border-[darkgray]' 
                    />
                </div>
                
                <TextInput type='text' id='userName' placeholder='userName' defaultValue={currentUser.userName}/>
                <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>

                <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                    Update
                </Button>
            </form>

            <div className="flex justify-between my-1">
                <span className='text-red-600'>Delete Account</span>
                <span className='text-blue-600'>Sign Out</span>
            </div>
        </div>
    )
}