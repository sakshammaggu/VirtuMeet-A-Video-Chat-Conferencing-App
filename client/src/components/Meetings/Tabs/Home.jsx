import React from 'react';
import { Card } from "flowbite-react";

import { BiSolidVideoPlus } from "react-icons/bi";
import { MdMeetingRoom } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { BiSolidVideoRecording } from "react-icons/bi";

export default function Home() {
  return (
    <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-10 lg:p-24 lg:mx-24 sm:p-16 sm:-mt-10 mx-4 sm:mx-7 pb-16'>
      <Card className="max-w-sm cursor-pointer hover:bg-gradient-to-r from-red-400 to-yellow-200 text-center transform transition-transform duration-300 hover:scale-105">
        <BiSolidVideoPlus className="text-gray-700 text-4xl -mt-5"/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          New Meeting
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Start an Instant Meeting
        </p>
      </Card>

      <Card className="max-w-sm cursor-pointer hover:bg-gradient-to-r from-blue-400 to-green-300 text-center transform transition-transform duration-300 hover:scale-105">
        <MdMeetingRoom className="text-gray-700 text-4xl -mt-5"/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Join Meeting
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Via Invitation Code
        </p>
      </Card>

      <Card className="max-w-sm cursor-pointer hover:bg-gradient-to-r from-lime-400 to-cyan-300 text-center transform transition-transform duration-300 hover:scale-105">
        <RiCalendarScheduleFill className="text-gray-700 text-4xl -mt-5"/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Schedule Meeting
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Plan your Meeting
        </p>
      </Card>

      <Card className="max-w-sm cursor-pointer hover:bg-gradient-to-r from-fuchsia-400 to-rose-300 text-center transform transition-transform duration-300 hover:scale-105">
        <BiSolidVideoRecording className="text-gray-700 text-4xl -mt-5"/>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          View Recordings
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Find Meeting Recordings
        </p>
      </Card>
    </div>
  )
}