import React from 'react';
import meetingHomeMiddleSectionPic1 from '../assets/images/meetingHomeMiddleSectionPic1.png';

export default function HomeMiddleSection() {
  return (
    <div className="middle-section mx-4 md:mx-12 lg:mx-28 my-10 lg:my-20 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-y-10 lg:gap-y-0 lg:gap-x-20">
      <div className="flex justify-center lg:justify-start">
        <img src={meetingHomeMiddleSectionPic1} alt="Meeting Home Middle Section" className="w-full max-w-md lg:max-w-none" />
      </div>

      <div className="bg-purple-300 py-8 px-4 md:px-6 lg:py-12 lg:px-8 flex flex-col justify-center lg:w-2/3">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Meet For You</h2>

          <p className="text-base md:text-lg font-bold text-gray-600 mb-10">
            VirtuMeet is for you. We're here to help you connect, communicate, and express your ideas so you can get more done together. 
            We're proud to be trusted by millions of enterprises, small businesses, and individuals, just like you.
          </p>
        </div>
      </div>
    </div>
  );
}