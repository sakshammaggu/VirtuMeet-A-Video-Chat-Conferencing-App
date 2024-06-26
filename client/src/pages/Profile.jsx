import React from 'react';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileUserProfile from '../components/ProfileUserProfile';

export default function Profile() {
    const location=useLocation();
    const [tab, setTab]=useState('');

    useEffect(()=>{
        const urlParams=new URLSearchParams(location.search);
        const tabFromUrl=urlParams.get('tab');
        if (tabFromUrl){
            setTab(tabFromUrl);
        }
    }, [location.search]);

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            {/* Sidebar */}
            <div className="md-w-56">
                <ProfileSidebar />
            </div>

            {/* Profile */}
            {tab==='profile' && <ProfileUserProfile />}
        </div>
    )
}