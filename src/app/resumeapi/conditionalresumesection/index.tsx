import React from 'react'
import Introduction from './intro'
import APIClients from './apiclients'
import CURL from './curl'
import Postman from './postman'
import GetEducation from './geteducation'
import GetExperience from './getexperience'
import GetSkills from './getskills'
import GetNameContact from './getnamecontact'
import GetProjects from './getprojects'
import PostComment from './postcomment'

type Props = {
    category: string
}

const ConditionalResumeSection = ({category}: Props) => {
   if (category === "Introduction") {
         return (<Introduction />)
      } else if (category === "APIClients"){
         return (<APIClients />)
      } else if (category === "cURL"){
         return (<CURL />)
      } else if (category === "Postman"){
         return (<Postman />)
      } else if (category === "NameContact"){
         return (<GetNameContact />)
      } else if (category === "Education"){
         return (<GetEducation />)
      } else if (category === "Experience"){
         return (<GetExperience />)
      } else if (category === "Skills"){
         return (<GetSkills />)
      } else if (category === "Projects"){
         return (<GetProjects />)
      } else if (category === "Comment"){
         return (<PostComment />)
      } else {
         return (<div>Not supposed to be here</div>)
     }
}

export default ConditionalResumeSection