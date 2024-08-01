import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {}

const GetExperience = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Experience Endpoint</h3>
      <h3 className="text-1xl font-bold mb-6">POST api/resume/get/experience</h3>
      <p className='mx-16'>
      &#8226;  Will return my work experience details from my resume.
      </p>
      <br />
      <p className='mx-16'>
      Endpoint URL:
      </p>
      <br />
      <div className='w-3/4 mx-16'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume/get/experience`}
          showLineNumbers={false}
          theme={dracula}
          codeBlock
        />
      </div>
      <br />
      <p className='mx-16'>
      Example response:
      </p>
      <br />
      <div className='mx-16'>
        <CopyBlock
          language="json"
          text={
            `{
              "experience_id":1,
              "resume_id":1,
              "title":"Software Engineer III",
              "company":"Crosslink Professional Tax Solutions",
              "location":"Lathrop, CA",
              "start_date":"2012-08-12",
              "description":"Developed, maintained, and supported software"
}`}
          showLineNumbers={false}
          theme={dracula}
          codeBlock
          wrapLongLines
        />
      </div>
    </div>
  )
}

export default GetExperience