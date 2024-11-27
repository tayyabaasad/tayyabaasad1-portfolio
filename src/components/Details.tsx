

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"




export function Details() {
  return (
    <Tabs defaultValue="Education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="Education">Education</TabsTrigger>
        <TabsTrigger value="Experience"> experience</TabsTrigger>
        <TabsTrigger value="Skills">Skills</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="Education">
        <Education/>
      </TabsContent>

      <TabsContent value="Experience">
        <Experience/>
      </TabsContent>

      <TabsContent value="Skills">
        <Skills/>
      </TabsContent>
      <TabsContent value="Projects">
        <Projects/>
      </TabsContent>
      <TabsContent value="Contact">
        <Contact/>
      </TabsContent>
      </Tabs>
      
  )
}
