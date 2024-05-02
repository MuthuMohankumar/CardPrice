import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card/Card'


function App() {

  const data=[
    {
     title:"FREE",
     price:"$0/month",
     user:"single-user",
     storage:"50GB storage",
     project1:"Unlimited Public Project",
     community:"Community Access",
     project2:"Unlimited Private Project",
     support:"Dedicated Phone Support",
     subdomain: "Free subdomain",
     report: "Monthly Status Report",
     projectIcon:"fas fa-check",
     text:"text-muted",
   },
   {
    title:"PLUS",
    price:"$9/month",
    user:"5 Users",
    storage:"50GB storage",
    project1:"Unlimited Public Project",
    project2:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    subdomain: "Free subdomain",
    report: "Monthly Status Report",
    community:"Community Access",
    projectIcon:"fas fa-check",
    text:"text-muted",
  },
  {
    title:"PRO",
    price:"$49/month",
    user:"Unlimited Users",
    storage:"50GB storage",
    project1:"Unlimited Public Project",
    project2:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    subdomain: "Free subdomain",
    report: "Monthly Status Report",
    community:"Community Access",
    projectIcon:"fas fa-check",
    text:"text-muted",
  }
  
  ]
  

  return (
    <>
      <Card data={data} />
    </>
  )
}

export default App
