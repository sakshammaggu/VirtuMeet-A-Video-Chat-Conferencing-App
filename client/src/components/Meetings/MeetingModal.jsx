import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import MeetingHostButton from './MeetingHostButton';

export default function MeetingModal({openModal, toggleModal}) {
    const [meetingUsername, setMeetingUsername] = useState('');
    const cleanUpInput = (input) => {
        return input.replace(/\s+/g, ' ').trim();
      };
    const handleMeetingFormChange=(e)=>{
        const cleanedInput = cleanUpInput(e.target.value);
        setMeetingUsername(cleanedInput);
    };
    useEffect(() => {
        if (!openModal){
            setMeetingUsername('');
        }
    }, [openModal])

    return (
        <Modal show={openModal} onClose={toggleModal} size="lg">
            <Modal.Header>Host A New Meeting</Modal.Header>

            <Modal.Body>
                <div className="space-y-6 -mt-4">
                    <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                        Start an instant meeting.
                    </p>
                </div>
                <br />
                <form onChange={handleMeetingFormChange}>
                    <div className="mb-2 block">
                        <Label htmlFor="meetingUsername" value="Set Your Meeting Username" />
                    </div>
                    <TextInput type="text" id="meetingUsername" required />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <MeetingHostButton toggleModal={toggleModal}/>
            </Modal.Footer>
        </Modal>
    )
}