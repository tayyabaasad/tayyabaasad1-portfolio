import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Education = () => {
     
     let education=[
      {
              uniName:"H.I.Usmania Girls college(Karachi University);",
              date:"",
              field:"",
              details:" I have done b.com(Audit) which is too hard to pass out from university of karachi but by the grace of Allah i have cleared after marriage, my husbend supported me every time,know i am student of generative Ai at Governore House , as well as i am also a medical student at Abbasi shaheed  Hospital as a pediatrice technician.",
     }
    ]

  return (
  <Card data-aos="zoom-in-down" className='h-[85vh] overflow-y-auto'>
    <CardHeader>
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Education</CardTitle>
    </CardHeader>
  <CardContent className="space-y-2">
  
    <div className="-my-8 divide-y-2 divide-gray-100">
      {education.map((item,i)=>(
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
           {item.field}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
          {item.uniName}
          </h2>
          <p className="leading-relaxed">
           {item.details}
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      )

      )}

     </div>
  </CardContent>
</Card>

    )
}

export default Education;