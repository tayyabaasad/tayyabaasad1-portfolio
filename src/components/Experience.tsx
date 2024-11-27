import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Experience = () => {
     
     let experience=[
      {
             compName:"multinational company;",
             dateStart:"2020",
             dateEnd:"2023",
              position:"product manager",
              details:"There was my responsibility to manage product's purchasing or resale in markite",
              work:["Handle product stock",'product sales','record of input and output']
      
      },
    
      {
        compName:"private school;",
        dateStart:"2014",
        dateEnd:"2019",
         position:"incharge",
         work:["distribution of duties to staff",'handle parents issues','manage time',]

 }


    ]

  return (
  <Card data-aos="zoom-in-down" className='h-[85vh] overflow-y-auto'>
    <CardHeader>
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>experience</CardTitle>
    </CardHeader>
  <CardContent className="space-y-2">
  
    <div className="-my-8 divide-y-2 divide-gray-100">
      {experience.map((item,i)=>(
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
           {item.position}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart}-${item.dateEnd}`}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
          {item.compName}
          </h2>
          <p className="leading-relaxed">
             Responsibilities
          </p>
          <ul className='ml-4 list-disc mr-1'>
            {item.work.map((workItem,i)=>(
              <li key={i}>{workItem}</li>
            ))}
           
          </ul>

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

    );
};

export default Experience;