import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function HostMeetingInfo() {
  return (
    <div className='min-h-screen mt-36'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-14">
        <div className="flex-1">
          {/* Logo */}
          <Link to="/" className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Virtu</span>
              Meet
          </Link>

          <p className='text-sm mt-5 text-justify'>
            Empower your <b>virtual collaborations</b> with our video conferencing solution, where
            <b> seamless connectivity</b> meets unparalleled clarity. Experience the future of <b>communication</b>, designed 
            to elevate your <b>interactions</b> and <b>foster innovation</b>.
          </p>
        </div>

        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Set Your Meeting Username:" />
              <TextInput type='text' placeholder='Username' id='userName' />
            </div>

            <div>
              <Label value="Set Your Meeting Password:" />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>

            <Button gradientDuoTone='purpleToPink'>
              Host A New Meeting
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}