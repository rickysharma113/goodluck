import React from 'react'
import "../HomeData/My.css"
import ReactPlayer from 'react-player'
const About = () => {
  return (
    <div className='container' style={{marginTop:"3rem",padding:"5rem"}}>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h1 className='about'>About Us</h1>
          <h1>FEW WORDS ABOUT GOODLUCK</h1>
          <hr></hr>
          <p className='para2'>Curabitur sit amet auctor massa, ac vulputate odio. Fusce egestas, odio nec vestibulum euismod, purus dolor vulputate magna, quis molestie sapien nibh quis dolor. Sed efficitur sem risus, sed condimentum ligula fermentum at</p>
          <button className='button'>Read our story</button>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
      <div className='original-box-shadow' style={{display:"flex"}}>
      <ReactPlayer controls  light={<img src='https://template-kit.rootlayers.com/fixman/wp-content/uploads/sites/19/2021/04/computer-and-phone-repairment-service-VMKZJ72.jpg' style={{width:"35vw"}} alt='Thumbnail'/>} style={{width:"35vw"}} playing url='https://www.brabus.com/_Resources/Persistent/7/f/5/5/7f55a569674f149ba226d86f45c8a45439cb3796/BRABUS%201300R%20Masterpiece%20Gold_WEBTEASER.mp4' />
      </div>
        </div>
      </div>
{/* <div class="card" style={{width:"20rem"}} >
  <p class="card-header" style={{fontSize:"15px",fontFamily:"inter",color:"red"}} >ABOUT US</p>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:"16px",color:"black",marginLeft:"10px",fontWeight:"800"}}>Few Words About Good while</h5>
    <p class="card-text" style={{fontSize:"19px",fontFamily:"inter",fontWeight:"500",color:"#545B7A"}} >Curabitur sit amet auctor massa, ac vulputate odio. Fusce egestas, odio nec vestibulum euismod, purus dolor vulputate magna, quis molestie sapien nibh quis dolor. Sed efficitur sem risus, sed condimentum ligula fermentum at. </p>
   <button style={{width:"120px",height:"34px",marginLeft:"55px",background:"red",border:"none",color:"white",borderRadius:"45px",fontFamily:"inherit",fontSize:"17px",fontWeight:"500"}}>read our story</button>
  </div>
</div> */}

  </div>



   
  )
}

export default About