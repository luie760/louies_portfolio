import React from 'react'
import Introduction from './intro'
import APIClients from './apiclients'
import CURL from './curl'
import Postman from './postman'

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
     } else {
         return (<div>Not supposed to be here</div>)
     }
}

export default ConditionalResumeSection