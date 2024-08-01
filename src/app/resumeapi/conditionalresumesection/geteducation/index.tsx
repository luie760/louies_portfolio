import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {}

const GetEducation = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Education Endpoint</h3>
      <h3 className="text-1xl font-bold mb-6">POST api/resume/get/education</h3>
      <p className='mx-16'>
      &#8226;  Will return my education details from my resume.
      </p>
      <br />
      <p className='mx-16'>
      Endpoint URL:
      </p>
      <br />
      <div className='w-3/4 mx-16'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume/get/education`}
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
      <div className='w-4/5 mx-16'>
        <CopyBlock
          language="json"
          text={
            `{
              "education_id":1,
              "resume_id":1,
              "degree":"BS in Computer Science",
              "institution":"University of the Pacific",
              "location":"Stockton, CA",
              "start_date":"2009-08-01",
              "end_date":"2012-05-16",
              "description":"Concentration: Software Engineering"
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

export default GetEducation