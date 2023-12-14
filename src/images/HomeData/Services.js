import React from 'react'
import '../../Style.css'
import cpu from '../../images/CPU.jpg'
import laptop2 from '../../images/laptop2.jpeg'
import Laptop from '../../images/Laptop.jpg'
import laptop3 from '../../images/laptop3.jpeg'
import { FaCheck } from "react-icons/fa";
import laptop4 from '../laptop4.jpg'
const Services = () => {

  {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  return (
    <>
      <div style={{}}>
        <section>
          <div className='servicediv'>
            <h5 style={{ fontFamily: 'Poppins, sans-serif', color: "#CF261A" }}>SERVICES</h5>
            <h1 className=' text1 mt-4' style={{ fontFamily: 'Bebas Neue, sans-serif' }} >CHOOSE GOOD LUCK SERVICES</h1>
            <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>

              <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
            </div>
            <div className='container p-4 '>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </section>

        <div className='container mb-5'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <d iv className='card'>
                <div className='card-Header'>
                  <img src={cpu} alt="My Image" style={{ width: "100%", height: "30vh" }} />

                </div>
                <div className='card-body space'>
                  <h2 style={{ textAlign: "center" }}>while you wait</h2>
                  <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>
                    <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                  </div>
                  <div>
                    <p className='font'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <button className='btn font '>BOOK NOW</button>
                  </div>
                </div>
              </d>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
              <div className='card card2'>
                <div className='card-Header'>
                  <img src={Laptop} alt="My Image" style={{ width: "100%", height: "30vh" }} />

                </div>
                <div className='card-body space'>
                  <h2 style={{ textAlign: "center" }}>while you wait</h2>
                  <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>
                    <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                  </div>
                  <div>
                    <p className='font'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <button className='btn font'>BOOK NOW</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
              <div className='card card3'>
                <div className='card-Header'>
                  <img src={laptop2} alt="My Image" style={{ width: "100%", height: "30vh" }} />

                </div>
                <div className='card-body space'>
                  <h2 style={{ textAlign: "center" }}>while you wait</h2>
                  <div style={{ display: "flex", justifyContent: "center", height: "10px" }}>
                    <div style={{ borderBottom: '5px solid #cf261a', width: '100px', }}></div>
                  </div>
                  <div style={{ textWrap: "wrap" }}>
                    <p className='font'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <button className='btn font'>BOOK NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <section className='demoimg'>
          <div className='row  democontent '>
            <div className='col-sm-12 col-md-6 col-lg-6 '>
              
            </div>


            <div className='col-sm-12 col-md-6 col-lg-6'>
              
            </div>
          </div>
        </section>

        <div className='container-fluid my-auto p-5' style={{ backgroundColor: "#f5f5f5" }}>
          <div className='row mx-auto'>
            <div className='col-lg-1 col-md-4 col-sm-12 mb-2'></div>
            <div className='col-lg-5 col-md-4 col-sm-12 mb-2'>
              <div className=''>
                <img className='original-box-shadow' src={laptop3} alt="laptop" style={{ width: "100%", height: "60vh" }} />
              </div>
            </div>
            <div className='col-lg-5 col-md-4 col-sm-12'>
              <h5 className='font' style={{ color: '#cf261a' }}>BENIFITS</h5>
              <h2 className='text-start text1 fontt2' style={{ fontSize: "50px" }}>WHY CHOOSE GOODLUCK FOR YOUR DEVICE?</h2>
              <hr></hr>
              <p className='font1 fs-5' style={{ color: "#7a7a7a" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div>
                <div className='check'>
                  <FaCheck style={{ color: "lightgreen", fontSize: "20px" }} />
                  <span className='font1 fs-5 ' style={{ color: "#7a7a7a" }}>Lorem ipsum Dolor sit amet consectur</span>
                </div>
                <div className='check'>
                  <FaCheck style={{ color: "lightgreen", fontSize: "20px" }} />
                  <span className='font1 fs-5 ' style={{ color: "#7a7a7a" }}>Lorem ipsum Dolor sit amet consectur</span>
                </div>
                <div className='check'>
                  <FaCheck style={{ color: "lightgreen", fontSize: "20px" }} />
                  <span className='font1 fs-5 ' style={{ color: "#7a7a7a" }}>Lorem ipsum Dolor sit amet consectur</span>
                </div>
                <div className='check'>
                  <FaCheck style={{ color: "lightgreen", fontSize: "20px" }} />
                  <span className='font1 fs-5 ' style={{ color: "#7a7a7a" }}>Lorem ipsum Dolor sit amet consectur</span>
                </div>
                <div className='check'>
                  <FaCheck style={{ color: "lightgreen", fontSize: "20px" }} />
                  <span className='font1 fs-5 ' style={{ color: "#7a7a7a" }}>Lorem ipsum Dolor sit amet consectur</span>
                </div>
                <button className='btn2 fs-6 mt-5'>BOOK APPOINTMENT</button>
              </div>
            </div>
            <div className='col-lg-1 col-md-4 col-sm-12 mb-2'></div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Services