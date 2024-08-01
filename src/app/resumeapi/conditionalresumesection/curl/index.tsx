import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

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
      <br />

      <h1 className="text-lg font-bold mb-6">Using cURL with the Resume API:</h1>
      <p>
        If cURL is your method of choice to interact with my resume API, first ensure that cURL is installed on your machine. In a command line tool of your choice, run 
        the following command.
      </p>

      <div className='w-96 py-5'>
        <CopyBlock
          language="bash"
          text={`curl --version`}
          showLineNumbers={false}
          theme={dracula}
          codeBlock
        />
      </div>
      <br />

      <p>
        If cURL is installed you should see version information print to the console. If it is not, an error referring to the cURL command not being found will be displayed. 
        You can easily install cURL using a package manager for your distribution. Installing cURL is beyond the scope of this documentation. Please seek a walk through on 
        how to install cURL on the internet if you would like to use cURL to access my resume api and return when cURL is installed.  
      </p>
      <br />
      <p>
        Once you have verified that cURL is installed, run the following command to return my resume api Name and Contact information. 
      </p>

      <div className='w-96 py-5'>
        <CopyBlock
          language="bash"
          text={`curl http://localhost:3000/api/resume`}
          showLineNumbers={false}
          theme={dracula}
          codeBlock
        />
      </div>

      <p>
        The above cURL command is an example of how to interact with my resume api using cURL. 
        See the other available endpoints in the navigation to the left to learn how to interact with the rest of my resume api.
      </p>
    </div>
  )
}

export default cURL