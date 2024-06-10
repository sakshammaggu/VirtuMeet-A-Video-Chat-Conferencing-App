import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

import { BsAppIndicator } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import { IoRecordingSharp } from "react-icons/io5";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";

export default function MeetingsSidebar({ onTabChange }) {
    const location=useLocation();
    const [tab, setTab] = useState('');

    useEffect(()=>{
        const urlParams=new URLSearchParams(location.search);
        const tabFromUrl=urlParams.get('tab');
        if (tabFromUrl){
            setTab(tabFromUrl);
            onTabChange(tabFromUrl);
        }
    }, [location.search]);

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/meetings?tab=home'>
                        <Sidebar.Item as='div' active={tab==='home'} className='font-semibold hover:bg-gray-300' icon={BsAppIndicator}>
                            Home
                        </Sidebar.Item>
                    </Link>
                    
                    <Link to='/meetings?tab=upcoming'>
                        <Sidebar.Item as='div' active={tab==='upcoming'} className='font-semibold hover:bg-gray-300' icon={CgCalendar}>
                            Upcoming
                        </Sidebar.Item>
                    </Link>
                    
                    <Link to='/meetings?tab=recordings'>
                        <Sidebar.Item as='div' active={tab==='recordings'} className='font-semibold hover:bg-gray-300' icon={IoRecordingSharp}>
                            Recordings
                        </Sidebar.Item>
                    </Link>

                    <Link to='/meetings?tab=personalRoom'>
                        <Sidebar.Item as='div' active={tab==='personalRoom'} className='font-semibold hover:bg-gray-300' icon={MdOutlineBroadcastOnPersonal}>
                            Personal Room
                        </Sidebar.Item>
                    </Link>
                    
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}