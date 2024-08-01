import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

type Props = {}

const NameContact = (props: Props) => {
  return (
    <div className='m-16'>
      <h3 className="text-3xl font-bold mb-6">Name and Contact Endpoint</h3>
      <h3 className="text-1xl font-bold mb-6">GET api/resume/</h3>
      <p className='mx-16'>
      &#8226;  Will return my personal details from my resume such as name, phone number, email, and social media links.
      </p>
      <br />
      <p className='mx-16'>
      Endpoint URL:
      </p>
      <br />
      <div className='w-96 mx-16'>
        <CopyBlock
          language="bash"
          text={`http://localhost:3000/api/resume`}
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
      <div className='w-3/4 mx-16'>
        <CopyBlock
          language="json"
          text={
            `{
            "resume_id":1,
            "full_name":"Luis Caraballo",
            "email":"luie760@gmail.com",
            "phone":"(209)986-7976",
            "summary":"",
            "website":"",
            "linkedin":"www.linkedin.com/in/luis-caraballo-b5b0792a/",
            "github":"",
            "location":"CA"
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

export default NameContact