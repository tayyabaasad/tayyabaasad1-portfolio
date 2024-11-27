import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
const projects = () => {
     
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
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>projects</CardTitle>
    </CardHeader>
  <CardContent className="space-y-2">
  
 
    <div className=" mt-4 flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-64">
          <Image
            alt="gallery"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/project 1.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
           bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
            <h2 className="text-2xl font-semibold tracking-tight">
              Dynamice Resume Builder
            </h2>
            <p className="leading-relaxed line-clamp-2">
              lets make a resume
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-64">
          <Image
            alt="gallery"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/project 2.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
           bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
            <h2 className="text-2xl font-semibold tracking-tight">
             Netflix Clone
            </h2>
            <p className="leading-relaxed line-clamp-2">
              Lets enjoy some movies
            </p>
          </div>
        </div>
      </div>
    </div>
  

  </CardContent>
</Card>

    )
}

export default projects;