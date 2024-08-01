import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {}

const GetProjects = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Project Endpoint</h3>
      <h3 className="text-1xl font-bold mb-6">POST api/resume/get/projects</h3>
      <p className='mx-16'>
      &#8226;  Will return my projects that I have worked on from my resume.
      </p>
      <br />
      <p className='mx-16'>
      Endpoint URL:
      </p>
      <br />
      <div className='w-3/4 mx-16'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume/get/projects`}
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
              "project_id":1,
              "resume_id":1,
              "project_name":"Resume API",
              "description":"Turned my resume into api where users can access information via http requests"
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

export default GetProjects