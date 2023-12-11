import React from 'react'
import {Route,Routes} from "react-router-dom"
 import Slider from "../images/HomeData/Slider"
import   About  from '../images/HomeData/About'
import Services from '../images/HomeData/Services'
import App from '../App'
import  Contact  from '../images/HomeData/Contact us'
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
