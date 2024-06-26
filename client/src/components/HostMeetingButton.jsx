import React from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom';

export default function HostMeetingButton() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/meetings');
    };

    return (
        <Button color="dark" onClick={handleClick}>Host A Meeting</Button>
    )
}