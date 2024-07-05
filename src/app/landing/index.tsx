import React from 'react'
import EllipseImg from "../../../public/Ellipse.png"
import Image from "next/image";
import GradientShadowButton from '../shared/GradientShadowButton';

type Props = {}

const Landing = (props: Props) => {
  return (
    <section id="landing" className='flex justify-center items-center h-screen w-screen'>
        <div className='flex justify-center items-center'>
          <Image className="float-left" src={EllipseImg} alt="Ellipse" />
          <div className="float-left w-1/3">
            <div className="text-sm text-white my-5">Software Engineer - Full Stack Developer</div>
            <div className="text-6xl text-white my-5">Hi, I'm Louie</div>
            <div className="text-sm text-white my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='flex gap-3'>
              <GradientShadowButton btnText='Portfolio' route='/portfolio' />
              <GradientShadowButton btnText='Contact' route='/contact' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Landing