import React from 'react'

import { Avatar, Dropdown, Navbar} from "flowbite-react";
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import {useSelector} from 'react-redux';

export default function Header() {
    const {currentUser}=useSelector(state=>state.user);

    return (
        <Navbar className='border-b-2'>

            {/* Logo */}
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Virtu</span>
                Meet
            </Link>

            {/* Links to other pages on large window size*/}
            <div className="flex gap-2 md:order-2">
                { 
                    currentUser ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar 
                                    alt='user'
                                    img={currentUser.profilePicture}
                                    rounded
                                />

                                
                            }
                        >
                        
                            <Dropdown.Header>
                                <span className='block text-sm'>@{currentUser.userName}</span>
                                <span className='block text-sm font-medium'>{currentUser.email}</span>
                            </Dropdown.Header>

                            <Link to='/profile?tab=profile'>
                                <Dropdown.Item>Profile</Dropdown.Item>
                            </Link>

                            <Dropdown.Divider />
                            <Dropdown.Item>Sign Out</Dropdown.Item>

                        </Dropdown>

                    ) : 
                    (
                        <>
                            <Link to="/sign-in">
                                <Button gradientDuoTone='greenToBlue'>
                                    Sign In
                                </Button>
                            </Link>

                            <Link to="/sign-up">
                                <Button gradientDuoTone='redToYellow'>
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )
                }

                <Navbar.Toggle />
            </div>

            {/* Links to other pages on mobile window size*/}
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link to='/'>Home</Link>
                </Navbar.Link>

                <Navbar.Link>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                    
                <Navbar.Link>
                    <Link to='/meetings'>Meetings</Link>
                </Navbar.Link>
                
            </Navbar.Collapse>
        </Navbar>
    )
}