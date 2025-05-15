import React from 'react'
import Navbar from './components/navbar/navbar'
import IntroSection from './components/homepage/home'
import MyWork from './components/myWork/work'
import Education from './components/education/education'
import WorkExperience from './components/experience/experience'
import ProjectExperience from './components/project/project'
import ContactCard from './components/contact/contact'
import { Route, Routes } from 'react-router-dom'
import Pages from './components/pages/pages'

export default function App() {
  return (
    <div>

      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Pages/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/experience' element={<WorkExperience/>} />
        <Route path='/projects' element={<ProjectExperience/>} />
        <Route path='/contact' element={<ContactCard/>} />
       
      </Routes>
    </div>
  )
}
