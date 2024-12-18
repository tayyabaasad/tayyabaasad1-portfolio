import React from 'react'

import Typewriter from 'typewriter-effect';
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from '../ui/button';
import Image from 'next/image';


const MobileCard = () => {
  return (
    <div data-aos="zoom-in" className='h-[90vh] bg-blue-100 flex flex-col items-center justify-center'>
        <div className="card glass w-80 p-5 flex flex-col justify-center items-center">
 
        <Image src= "/banner.bg.jpg.jpg" alt="profile-picture" height={200} width={200 } className="rounded-md mx-auto"/>

 
  <div className="card-body">
    
    <h1 className="card-title text-2xl  text-center font-bold tracking-tight uppercase">Tayyaba Asad</h1>
    <h2 className="text-md text-center font-semibold  text-blue-700 ">
     <Typewriter
  options={{
    strings: ['Web Developer','Teacher'],
    autoStart: true,
    loop: true,
  }}/>
     </h2>
     <div className="grid grid-cols-3 gap-2">
      <div className="mt-4">
       <Link href={"https://www.facebook.com/share/1DP6hLKjRe/"} target="facebook" className="text-gray-600 hover:text-[#0762C8]">
      <FaFacebook  className="text-4xl"/></Link>
  
      </div>
      <div className="mt-4">
      
       <Link href={"https://www.linkedin.com/in/tayyaba-tayyaba-8a576a2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="linkedin" className="text-gray-600 hover:text-[#0762C8]">
      <FaLinkedin  className="text-4xl"/></Link>
  
      </div>
           
      <div className="mt-4">
      
      <Link href={"https://wa.me/qr/YUXJL64SK7YAD1"} target="whatsapp" className="text-gray-600 hover:text-[#25D366]">
     <FaWhatsapp  className="text-4xl"/></Link>
 
     </div>
     
    </div>
    <Link href={"/Tayyaba cv2.pdf" }  className="mr-4 w-full" target="_blank">
    <Button>
      <FaCloudDownloadAlt  className="mr-2 h-4 w-4"/> Download cv
    </Button></Link>
    
  </div>
</div>
</div>
  );
};

export default  MobileCard;