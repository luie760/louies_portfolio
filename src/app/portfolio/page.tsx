'use client';

import React from 'react'
import { DisappearingFeatures } from './DisappearingFeature';
import Spotlight from '../shared/SpotlightText';

type Props = {}

const PortfolioPage = (props: Props) => {
  return (
    <section className='flex flex-col pt-14 h-screen w-screen'>
      <div className='h-1/4'>
        <Spotlight text='Portfolio' />
      </div>
      
      <div className='h-3/4'>
        <DisappearingFeatures />
      </div>
    </section>
  )
}

export default PortfolioPage