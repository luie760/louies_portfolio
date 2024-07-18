'use client';

import React, {useState} from 'react'
import Spotlight from '../shared/SpotlightText';
import Sidebar from './Sidebar';
import ConditionalResumeSection from './conditionalresumesection'

type Props = {}

const ResumeApiPage = (props: Props) => {
  const [active, setActive] = useState('Introduction');
  const triggerSetActive = (category: string) =>{
    console.log(category);
    if (category === active) return;
    setActive(category);
  };

  return (
    <section className='flex flex-col pt-14'>
      <div className='h-1/4'>
        <Spotlight text='Resume API' />
      </div>
      <div className='h-3/4'>
        <div className='flex flex-row'>
          {/* Left navigation for documentation categories */}
          <div className=''>
            <Sidebar mode='dark' active={active} onSelect={triggerSetActive} />
          </div>
          {/* Main display area for selected documentation category */}
          <div className='text-white'>
            <ConditionalResumeSection category={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeApiPage