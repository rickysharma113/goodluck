import React from 'react'
import '../Style.css'
import cpu from '../images/CPU.jpg'
import laptop2 from '../images/laptop2.jpeg'
import Laptop from '../images/Laptop.jpg'
const Service = () => {
    return (
        <>
            <div style={{}}>
                <section>
                    <div className='servicediv'>
                        <h5 style={{ fontFamily: 'Poppins, sans-serif', color: "#CF261A" }}>SERVICES</h5>
                        <h1 className='font2 text1 mt-4' >CHOOSE GOOD LUCK SERVICES</h1>
                        <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>

                            <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                        </div>
                        <div className='container p-4 '>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </section>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='card'>
                                <div className='card-Header'>
                                    <img src={cpu} alt="My Image" style={{ width: "100%", height: "30vh" }} />

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

                
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-4 col-sm-12'>
                            <div style={{backgroundColor:"#171b26"}} >

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-4 col-sm-12'>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service