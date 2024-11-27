import React from 'react'


import { FaCircleCheck } from "react-icons/fa6";


const MobileSkills = () => {
  return (
    <div className='w-full p-5'> 
     <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
      <div className="mt-4 flex flex-wrap -m-4">
    <div className="p-4 w-full md:w-1/3 ">
    
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
            <FaCircleCheck className='text-white text-lg'/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            HTML
          </h2>
        
        </div>
        <div  className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>
          </div>
      
             <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tight'>
              100%
             </h3>
       </div>      
   </div>
   <div className="flex flex-wrap -m-4">
    <div className="p-4 w-full md:w-1/3 ">
    
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
            <FaCircleCheck className='text-white text-lg'/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            CSS
          </h2>
        
        </div>
        <div  className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[97%%] h-1 bg-blue-500 rounded-lg'/>
          </div>
      
             <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tight'>
              97%
             </h3>
       </div>      
   </div>
   <div className="flex flex-wrap -m-4">
    <div className="p-4 w-full md:w-1/3 ">
    
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
            <FaCircleCheck className='text-white text-lg'/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            JavaScript/TypeScript
          </h2>
        
        </div>
        <div  className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[90%] h-1 bg-blue-500 rounded-lg'/>
          </div>
      
             <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tight'>
              90%
             </h3>
       </div>      
   </div>
   <div className="flex flex-wrap -m-4">
    <div className="p-4 w-full md:w-1/3 ">
    
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
            <FaCircleCheck className='text-white text-lg'/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            English Language
          </h2>
        
        </div>
        <div  className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[90%] h-1 bg-blue-500 rounded-lg'/>
          </div>
      
             <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tight'>
              90%
             </h3>
       </div>      
   </div>
   <div className="flex flex-wrap -m-4">
    <div className="p-4 w-full md:w-1/3 ">
    
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
            <FaCircleCheck className='text-white text-lg'/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            whatsapp stickers editor
          </h2>
        
        </div>
        <div  className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>
          </div>
      
             <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tight'>
              100%
             </h3>
       </div>      
   </div></div>
  )
}

export default MobileSkills;