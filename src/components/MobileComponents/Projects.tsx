import Image from 'next/image';
import React from 'react'

const MobileProjects = () => {
  return (
    <div className='w-full p-5'>
       <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    Projects
  </h2>
  <div className="flex flex-wrap -m-4">
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
  </div>
  )
}

export default MobileProjects;