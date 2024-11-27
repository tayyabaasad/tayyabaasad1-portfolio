import React from 'react'

const  MobileEducation = () => {
     
  let education=[
   {
           uniName:"H.I.Usmania Girls college(Karachi University);",
           date:"",
           field:"",
           details:" I have done b.com(Audit) which is too hard to pass out from university of karachi but by the grace of Allah i have cleared after marriage, my husbend supported me every time,know i am student of generative Ai at Governore House , as well as i am also a medical student at Abbasi shaheed  Hospital as a pediatrice technician.",
  }
 ]
  return (

    <div className='w-full p-5'>
        <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Education
    </h2>
      <div className="mt-4 divide-y-2 divide-blue-500">

    {education.map((item,i)=>(
      <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
         {item.field}
        </span>
        <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
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
   </div>
  )
}

export default MobileEducation;