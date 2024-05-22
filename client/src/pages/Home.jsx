import React from 'react'
import '../css/Home.css';
import meetingThemePic from '../assets/images/meetingThemePic.jpg'

import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="home-page">
      <div className="top-section flex gap-x-28">

        <div>
          <div className='font-bold text-black text-4xl mx-6 text-left'>
            Online Meeting Platform
            <br />
            For Modern Work
          </div>

          <br />

          <p className='font-bold text-gray-700 text-2xl mx-6 text-left'>
            Empower your organization with 
            <br />
            face-to-face collaboration and connect 
            <br />
            with your team everwhere, anywhere.
          </p>

          <br />

          <div className="flex flex-wrap gap-2 mx-6 my-4">
            <Button color="dark">Host A Meeting</Button>
            
            <form>
              <div className="relative flex items-center">
                  <svg className="absolute left-3 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm5.01 1H5v2.01h2.01V8Zm3 0H8v2.01h2.01V8Zm3 0H11v2.01h2.01V8Zm3 0H14v2.01h2.01V8Zm3 0H17v2.01h2.01V8Zm-12 3H5v2.01h2.01V11Zm3 0H8v2.01h2.01V11Zm3 0H11v2.01h2.01V11Zm3 0H14v2.01h2.01V11Zm3 0H17v2.01h2.01V11Zm-12 3H5v2.01h2.01V14ZM8 14l-.001 2 8.011.01V14H8Zm11.01 0H17v2.01h2.01V14Z" clipRule="evenodd"/>
                  </svg>
                  
                  <input 
                      id="meeting-link"
                      type="text"
                      placeholder="Enter a Code or a Link"
                      className="font-bold pl-10 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black dark:text-white"
                  />  
              </div>
            </form>
          </div>
        </div>

        <div className=''>
          <img src={meetingThemePic} alt="meetingThemePic" className='meetingThemePic'/>
        </div>
      </div>
    </div>
  )
}