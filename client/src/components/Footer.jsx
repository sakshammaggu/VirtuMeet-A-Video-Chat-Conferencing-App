import React from 'react'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start">
                    <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Virtu</span>
                        Meet
                    </Link>
                    <p className="text-gray-400">© 2024 VirtuMeet. All rights reserved.</p>
                </div>

                <div className="flex space-x-8">
                    <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
                    <Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link>
                    <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                    <Link to="/legal" className="text-gray-400 hover:text-white">Legal</Link>
                    <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                    <Link to="/status" className="text-gray-400 hover:text-white">Status</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-gray-900" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Subscribe</button>
                </div>
            </div>
        </div>  
    </footer>
  )
}