"use client"

import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import React from 'react'

import {Details} from "./Details";
import { Sidebar } from "./Sidebar";
import MobileCard from "./MobileComponents/Card";
import MobileEducation from "./MobileComponents/Education";
import MobileExperience from "./MobileComponents/Experience";
import MobileSkills from "./MobileComponents/Skills";
import MobileProjects from "./MobileComponents/Projects";
import MobileContact from "./MobileComponents/contact";


const MainPage = () => {
    useEffect(()=>{
        AOS.init({
           once:false,
        });
      },[]);
  return (



    <div>
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
    
     
       <MobileCard />
  
      <MobileEducation/>
      <MobileExperience/>
      <MobileSkills />
      <MobileProjects />
      <MobileContact/>
</div>
    <div className="hidden  md:flex md:overflow-hidden md:h-screen">
    <div className="w-1/5">
        <Sidebar/>

    </div>
     <div className="w-full">
        <Details/>
     </div>
    
    </div>
    </div>
  )
}

export default MainPage;
