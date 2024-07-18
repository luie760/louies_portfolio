import React from 'react'

type Props = {}

const cURL = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">cURL</h3>
      <p>
        cURL is a powerful command-line tool that supports various protocols, including HTTP and HTTPS. It is widely used for testing APIs because it is lightweight, versatile, and available on most operating systems.
      </p>
      <br />

      <h1 className="text-lg font-bold mb-6">Advantages of cURL:</h1>
      <p className='mx-16'>  
        &#8226; <span className='font-bold'>Simplicity:</span> Easy to use from the command line.
        <br />
        <br />
        &#8226; <span className='font-bold'>Flexibility:</span> Supports a wide range of protocols and options.
        <br />
        <br />
        &#8226; <span className='font-bold'>Automation:</span> Can be used in scripts for automated testing and integration.
      </p>
      <br />

      <h1 className="text-lg font-bold mb-6">Disadvantages of cURL:</h1>
      <p className='mx-16'>
        &#8226; <span className='font-bold'>Manual Effort:</span> Requires manual construction of requests.
        <br />
        <br />
        &#8226; <span className='font-bold'>No GUI:</span> Lacks a graphical interface, which can be less intuitive for some users.
      </p>
    </div>
  )
}

export default cURL