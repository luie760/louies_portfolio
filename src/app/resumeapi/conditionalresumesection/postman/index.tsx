import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

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
      <p>
        If Postman is your method of choice to interact with my resume API, first ensure that Postman is installed on your machine. You will need to work in a workspace 
        or create a new workspace and navigate to make a http request where you can select to make a GET or POST request depending on which endpoint you want to interact 
        with in my resume api. 
      </p>
      <br />
      <p>
        For example, in Postman, select GET and enter the following content in the body as the request URL and select SEND 
        to return my resume api Name and Contact information. 
      </p>

      <div className='w-96 py-5'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume`}
          showLineNumbers={false}
          theme={dracula}
          codeBlock
        />
      </div>

      <p>
        See the other available endpoints in the navigation to the left to learn how to interact with the rest of my resume api.
      </p>
    </div>
  )
}

export default Postman