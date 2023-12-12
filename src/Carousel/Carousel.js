import React from 'react'
import Laptop from '../images/Laptop.jpg'
import CPU from '../images/CPU.jpg'
import phone from '../images/phone.png'
const Carousel = () => {
  return (
    <>
    <div id="carouselExampleSlidesOnly" class="carousel slide position-relative" data-bs-ride="carousel"  >
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{height:"80vh"}}>
      <img src={Laptop} class=" w-100 h-100" alt="..." style={{objectFit:"cover"}} />
    </div>
    <div class="carousel-item"  style={{height:"80vh"}}>
      <img src={CPU} class="d-block w-100 h-100" alt="..."  style={{objectFit:"cover"}}/>
    </div>
    <div class="carousel-item">
      <img src={CPU} class="d-block w-100 h-100" alt="..."/>
    </div>
  </div>
{/* 
  <div className="position-absolute w-100 h-100" style={{top:"0",left:"0",backgroundColor:"transparent",backgroundImage:"linear-gradient(300deg,#171b25 45%,#c5261a 51%",opacity:"0.7",transition:"background 0.3s,borderRadius 0.3s,opacity 0.3s",zIndex:0}} >

  </div>

  <div className='h-100' style={{position:"absolute",top:"0",left:"0",width:"100%"}} >
  <div className='container w-100 h-100' >
      <div className='row mx-auto w-100 h-100 align-items-center'  >
        <div className='col-5 mx-auto h-100 d-flex flex-column justify-content-center pb-5' >
          <h1>Best Phone and Laptop Repair Service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='w-25' >Learn More</button>
        </div>


  <div className='col-5 ka mx-auto' >
          <img src={phone} alt="slj"  />
        </div>
      </div>

    </div>
  </div> */}

</div>
    </>
  )
}

export default Carousel
