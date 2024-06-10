import React from 'react';
import { Sidebar } from 'flowbite-react';

import { BsAppIndicator } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import { IoRecordingSharp } from "react-icons/io5";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";

export default function MeetingsSidebar() {
    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item as='div' className='font-semibold' icon={BsAppIndicator}>
                        Home
                    </Sidebar.Item>

                    <Sidebar.Item as='div' className='font-semibold' icon={CgCalendar}>
                        Upcoming
                    </Sidebar.Item>

                    <Sidebar.Item as='div' className='font-semibold' icon={IoRecordingSharp}>
                        Recordings
                    </Sidebar.Item>

                    <Sidebar.Item as='div' className='font-semibold' icon={MdOutlineBroadcastOnPersonal}>
                        Personal Room
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}