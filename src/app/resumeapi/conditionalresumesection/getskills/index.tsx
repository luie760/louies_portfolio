import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {}

const GetSkills = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Skills Endpoint</h3>
      <h3 className="text-1xl font-bold mb-6">POST api/resume/get/skills</h3>
      <p className='mx-16'>
      &#8226;  Will return skills from my resume.
      </p>
      <br />
      <p className='mx-16'>
      Endpoint URL:
      </p>
      <br />
      <div className='w-96 mx-16'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume/get/skills`}
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
      <div className='w-96 mx-16'>
        <CopyBlock
          language="json"
          text={
            `{
              "skill_id":1,
              "resume_id":1,
              "skill_name":"Linux",
              "proficiency_level":"Pro"
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

export default GetSkills