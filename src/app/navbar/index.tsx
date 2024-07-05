'use client';

import React from 'react'
import Image from "next/image";
import useMediaQuery from '../hooks/useMediaQuery';
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    
                    <div className='relative'>
                        {/* LOGO */}
                        <div className='before:absolute before:-top-3 before:-left-8 before:z-[-1] before:content-logo'>
                            {/* TEXT */}
                            <h1 className='text-white'>uis Caraballo Software Engineer</h1>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? ( 
                        <div className={`${flexBetween} gap-8`}>
                            {/* LINKS */}
                            <div className={`${flexBetween} gap-8 text-sm text-white`}>
                                <Link href="/">Home</Link>
                                <Link href="/#frontendskills">Front-end skills</Link>
                                <Link href="/#backendskills">Back-end skills</Link>
                                <Link href="/#portfolio">Portfolio</Link>
                                <Link href="/#contact">Contact</Link>
                            </div>
                        </div>
                    ):(
                        <button 
                        className="bg-transparent p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-black" />

                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link href="/">Home</Link>
                    <Link href="/#frontendskills">Front-end skills</Link>
                    <Link href="/#backendskills">Back-end skills</Link>
                    <Link href="/#portfolio">Portfolio</Link>
                    <Link href="/#contact">Contact</Link>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar