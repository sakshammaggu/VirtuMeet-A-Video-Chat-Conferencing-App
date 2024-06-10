import React, { useState } from 'react';
import MeetingsSidebar from './MeetingsSidebar';

import Home from './Tabs/Home.jsx';
import Upcoming from './Tabs/Upcoming.jsx';
import Recordings from './Tabs/Recordings.jsx';
import PersonalRoom from './Tabs/PersonalRoom.jsx';

export default function MeetingsDisplaySection() {
    const [currentTab, setCurrentTab] = useState('home');

    const renderContent = () => {
        switch (currentTab) {
            case 'home':
                return <Home />;
            case 'upcoming':
                return <Upcoming />;
            case 'recordings':
                return <Recordings />;
            case 'personalRoom':
                return <PersonalRoom />;
            default:
                return <Home />;
        }
    };

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <MeetingsSidebar onTabChange={setCurrentTab} />
            {renderContent()}
        </div>
    );
}