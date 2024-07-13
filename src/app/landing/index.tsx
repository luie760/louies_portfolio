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
            <div className="text-6xl text-white my-5">Hi, I'm Louie. I build things!</div>
            <div className="text-sm text-white my-5">I'm a seasoned software engineer with a robust background 
              in full-stack development and DevOps engineering. Over the past 10 years, I've accumulated extensive 
              experience across a wide array of technologies and industries
            </div>
            <div className="text-sm text-white my-5">Stay for a bit! Feel free to explore some of my portfolio 
              projects and contact me to see how my skills and expertise can contribute to your next project or team
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