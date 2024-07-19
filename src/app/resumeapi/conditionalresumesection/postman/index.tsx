import React from 'react'

type Props = {}

const Postman = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Postman</h3>
      <p>
        Postman is a popular GUI tool for testing APIs. It provides a comprehensive set of features for making HTTP requests, organizing them into collections, and generating automated tests.
      </p>
      <br />

      <h1 className="text-lg font-bold mb-6">Advantages of Postman:</h1>
      <p className='mx-16'>  
        &#8226; <span className='font-bold'>User-Friendly Interface:</span> Intuitive GUI for making and managing requests.
        <br />
        <br />
        &#8226; <span className='font-bold'>Collections:</span> Organize requests into collections for better management.
        <br />
        <br />
        &#8226; <span className='font-bold'>Environment Variables:</span> Use variables to manage different environments (e.g., development, staging, production).
        <br />
        <br />
        &#8226; <span className='font-bold'>Automated Testing:</span> Create tests to automate the verification of API responses.
      </p>
      <br />

      <h1 className="text-lg font-bold mb-6">Disadvantages of Postman:</h1>
      <p className='mx-16'>
        &#8226; <span className='font-bold'>Resource Intensive:</span> Can be heavier on system resources compared to command-line tools.
        <br />
        <br />
        &#8226; <span className='font-bold'>Learning Curve:</span> While intuitive, it may take time to fully explore and utilize all features.
      </p>
      <br />

      <h1 className="text-lg font-bold mb-6">Using Postman with the Resume API:</h1>
    </div>
  )
}

export default Postman