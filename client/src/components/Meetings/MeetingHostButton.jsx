import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MeetingHostButton({toggleModal}) {
    const {currentUser}=useSelector((state)=>state.user);
    const navigate=useNavigate();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: '',
    });
    const [callDetails, setCallDetails] = useState();
    const createMeeting=async()=>{
        if (!currentUser) return;

        try {
            const id=crypto.randomUUID();
            const call=client.call('default');

            if (!call)
                throw new Error('Failed to create a call')

            const startsAt=values.dateTime.toISOString() || new Date(Date.now()).toISOString;
            const description=values.description || 'Instant Meeting';

            await call.getOrCreate({
                data: {
                    startsAt: startsAt,
                    custom: {
                        description: description,
                    }
                }
            });

            setCallDetails(call);

            if (!values.description){
                navigate(`/meeting/host/${call.id}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick=()=>{
        try {
            createMeeting();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button className="w-full sm:w-auto" onClick={handleClick}>Host Meeting</Button>
    )
}