import React from 'react'
import '../HomeData/My.css'
import repair from '../images/repair1.png'
import laptop from '../images/lpbg.png'
const Process = () => {
  return (
    <div>
      <div className='container'>
       <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
       <h1 className='about'>Process</h1>
        <h1>COMPREHENSIVE DEVICE REPAIR</h1>
        <hr></hr>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br></br> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
       </div>
       <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div className='d-flex'>
            <div >
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            </div>
            <div className='d-flex mt-3'>
            <div >
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            </div>
            <div className='d-flex mt-3'>
            <div >
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            </div>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12' style={{display:"flex",justifyContent:"center"}}>
            <img src={laptop} alt='lptp' style={{height:"55vh"}}></img>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div className='d-flex gap-4'>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            <div >
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           
            </div>
            <div className='d-flex mt-3 gap-4'>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            <div >
           
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           
            </div>
            <div className='d-flex mt-3 gap-4'>
            <img src={repair} alt='repair' style={{height:"10vh"}}></img>
            <div >
                <h3>Water Damage Repair</h3>
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Process
