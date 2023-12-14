import React from 'react'
import lp from "../images/lpbg.png"
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Contactus() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-4'>
  <h5 class="card-header" style={{fontSize:"15px",fontFamily:"inter",color:"red",marginLeft:"167px",marginTop:"45px"}} >Contact Us</h5>
  <div class="card-body" style={{marginLeft:"89px"}} >
    <h5 class="card-title" style={{fontSize:"16px",color:"black",marginLeft:"55px",fontWeight:"800"}}>Get in Touch With Us</h5>
    <p class="card-text" style={{fontSize:"15px",fontFamily:"inter",fontWeight:"500",color:"#545B7A",marginLeft:"44px"}}>Curabitur sit amet auctor massa, ac vulputate odio. Fusce egestas, odio nec vestibulum euismod, purus dolor vulputate magna, quis molestie sapien nibh quis dolor. Sed efficitur sem risus, sed condimentum ligula fermentum at. </p>
  </div>

 </div>
   <div className='row' >
      <div className='col-lg-6 col-sm-12 col-md-12' >
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{marginLeft:"12px",fontSize:"15px",textAlign:"center"}} >Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Any" style={{boxShadow:"none"}}  />
</div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{marginLeft:"12px",fontSize:"15px"}} >Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@goodluck.com" style={{boxShadow:"none"}} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{marginLeft:"12px",fontSize:"15px"}} >Phone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="91+1234567890" style={{boxShadow:"none"}} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Choose Your Feed" style={{boxShadow:"none"}} />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Additional And Honest Feed back' style={{boxShadow:"none",outline:"none"}} ></textarea>
</div>
<button style={{width:"160px",height:"45px",marginLeft:"78px",background:"red",border:"none",color:"white",borderRadius:"23px",fontFamily:"inherit",fontSize:"17px",fontWeight:"500"}}>send Meassage</button>
      </div>

      <div className='col-lg-6 col-sm-12 col-md-12' >
        <img src={lp} style={{width:"340px",marginLeft:"155px"}}/>
      </div>
      <div className='row'>
<div className='col-10' style={{background:"red",marginTop:"12px",marginLeft:"23px"}}>
<div className='row'>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>
<div className='col-4'>
<FaPhone style={{marginLeft:"22px",color:"White",height:"22px",fontSize:"34px"}}/>
</div>
<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >Line Free Call:</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"15px"}}  >(001) 1231 3456</p>
</div>
</div>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>
<div className='col-4'>
<MdOutlineMailOutline style={{marginLeft:"22px",color:"White",height:"22px",fontSize:"34px"}}/>
</div>
<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >Email Us:</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"15px"}}  >contact@goodluck.com</p>
</div>
</div>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>
<div className='col-4'>
<IoLocationOutline style={{marginLeft:"22px",color:"White",height:"22px",fontSize:"34px"}}/>
</div>
<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >Address:</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"10px"}}  >F-89 & 11, First Floor, Alankar Plaza, Upon Domino’s Pizza, Sikar Rd, Sector 2, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039, India</p>
</div>
</div>
</div>
</div>
    </div>
  </div>
  
    <div className='row'>
    <div className='col-10' style={{marginTop:"32px",marginLeft:"34px"}} >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1030270724386!2d75.77593648054338!3d26.963636516325067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db24b29e5e583%3A0x64e6b11bf29764b9!2sAlankar%20Plaza%2C%20CENTRAL%20SPINE-3%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1702363731026!5m2!1sen!2sin" width="600" height="450"  style={{marginLeft:"186px",height:"auto"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
   </div>
   <div className='row'>
<div className='col-10' style={{background:"black",marginTop:"15px",marginLeft:"23px"}}>
<div className='row'>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>
<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >GoodLuck</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"12px"}}>GoodLuck Company has garnered positive reviews for its exemplary products and services.</p>
</div>
</div>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>

<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >Company</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"15px"}}  >Aboutus</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"15px"}}  >Privace</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"15px"}}  >Steamp</p>
</div>
</div>
<div className='col-4' style={{display:'flex',alignItems:"center"}}>
<div className='col-4'>
<p style={{color:"White",marginLeft:"23px",fontSize:"15px"}} >Company</p>
<p style={{color:"white",marginLeft:"23px",fontSize:"10px"}}  >F-89 & 11, First Floor, Alankar Plaza</p>
</div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
  
  )
}

export default Contactus;