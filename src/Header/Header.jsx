import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import "../Header/My.css";
const Header = () => {
  return (
    <>
   <div className='container hu' style={{width:"100%"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<div className='' style={{display:"flex", gap:"20px"}}>
<div><FaFacebook className='icon'/></div>
   <div><FaTwitter className='icon'/></div>
   <div><FaYoutube className='icon'/></div>
</div>
<div style={{display:"flex",gap:"10px"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
<IoMdMail className='icon' />
<span>contact@goodluck.com</span>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
<IoCall className='icon'/> 
<span>6465465465</span>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
<FaClock className='icon' />
<span>Mon-fri:10:00-07:00</span>
</div>
</div>
</div>

   </div>
    </>
  )
}

export default Header