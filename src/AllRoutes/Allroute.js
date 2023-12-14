import React from 'react'
import {Route,Routes} from "react-router-dom"
 import Slider from "../HomeData/Slider"
import   About  from '../HomeData/About'
import Services from '../HomeData/Services'
import App from '../App'
import  Contact  from '../HomeData/Contact us'
export default function Allroute() {
  return (
    <>
        <Routes>
             <Route path='/Home' element={<Slider/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </>
  )
}
