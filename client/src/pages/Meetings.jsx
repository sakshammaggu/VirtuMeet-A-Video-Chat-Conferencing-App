import React from 'react';
import MeetingsSidebar from '../components/Meetings/MeetingsSidebar';

export default function Meetings() {
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            {/* Sidebar */}
            <div className="md-w-56">
                <MeetingsSidebar />
            </div>
        </div>
    )
}