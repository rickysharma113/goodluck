import React from 'react'
import cpu from '../images/CPU.jpg'
import laptop2 from '../images/laptop2.jpeg'
import team1 from '../images/team1.png'
import Laptop from '../images/Laptop.jpg'
import '../HomeData/My.css'
import { FaStar } from "react-icons/fa";
const Testimony = () => {
  return (
    <div>
      <div className='container'>
      <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
       <h1 className='about'>Testimony</h1>
        <h1>WHAT PEOPLE SAY ABOUT US</h1>
        <hr></hr>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br></br> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
       </div>
       <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                           
                               
                                <div className='card-body'>
                                <div className='border d-flex gap-2'>
                                <FaStar style={{color:" rgb(248, 19, 2)"}}/>
                                <FaStar  style={{color:" rgb(248, 19, 2)"}}/>
                                <FaStar  style={{color:" rgb(248, 19, 2)"}}/>
                                <FaStar  style={{color:" rgb(248, 19, 2)"}}/>
                                <FaStar  style={{color:" rgb(248, 19, 2)"}}/>
                                </div>
                                    <h5 style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor per mattis, pulvinar dapibus leo.</h5>
                                    <div style={{ display: "flex", justifyContent: "center",gap:"20px" }}>
                                       <img src={team1} alt='team1' style={{height:"10vh",borderRadius:"50px"}}></img>
                                    <div>
                                        <p>John doe</p>
                                        <p>designer</p>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                         
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                                <div className='card-Header'>
                                    <img src={Laptop} alt="My Image" style={{ width: "100%", height: "30vh" }} />

                                </div>
                                <div className='card-body'>
                                    <h2 style={{textAlign:"center"}}>while you wait</h2>
                                    <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>
                                        <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div>
                                        <button className='btn'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                                <div className='card-Header'>
                                    <img src={laptop2} alt="My Image" style={{ width: "100%", height: "30vh" }} />

                                </div>
                                <div className='card-body'>
                                    <h2 style={{textAlign:"center"}}>while you wait</h2>
                                    <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>
                                        <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div>
                                        <button className='btn'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
    </div>
  )
}

export default Testimony
