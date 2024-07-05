import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='border-t-2 border-gray-800'>
        <div className='justify-content mx-auto w-11/12 gap-16 flex'>
            {/* Left Side of Footer */}
            <div className='my-4 basis-2/12 text-xs'>
                <p className='text-gray-400'>LinkedIn</p>
            </div>

            {/* Middle of Footer */}
            <div className='my-4 basis-8/12 text-xs'>
                
            </div>

            {/* Right Side of Footer */}
            <div className='my-4 basis-2/12 text-xs'>
                <p className='text-gray-400'>Right Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer