'use client';

import React from 'react'
import Spotlight from '../shared/SpotlightText';
import SwapColumnFeatures from './SwapColumnFeature';

type Props = {}

const PortfolioPage = (props: Props) => {
  return (
    <section className='flex flex-col pt-14'>
      <div className='h-1/4'>
        <Spotlight text='Portfolio' />
      </div>
      
      <div className='h-3/4'>
        <SwapColumnFeatures />
      </div>
    </section>
  )
}

export default PortfolioPage