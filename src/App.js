import Laptop from './images/Laptop.jpg'
import CPU from './images/CPU.jpg'
import './App.css';
import Allroute from './AllRoutes/Allroute';
import Header from './Header/Header';
import logo from '../src/images/Remove.png'
import Service from './Services/Service';

function App() {
  return (
    <>
    <div className="Home Display">
     <div className='row'>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Good While</a> */}
    <img src={logo} alt='jhg' style={{width:"70px",height:"45px",fontSize:"20px"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-2">
        <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:"34px",textAlign:"center",fontSize:"16px"}} >Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:"34px",textAlign:"center",fontSize:"16px"}} >About us</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:"34px",textAlign:"center",fontSize:"16px"}} >Services</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:"34px",textAlign:"center",fontSize:"16px"}}>Contact us</a>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Appoitment</a></li>
            <li><a class="dropdown-item" href="#">Team</a></li>
            <li><a class="dropdown-item" href="#">Careers</a></li>
            <li><a class="dropdown-item" href="#">Error 404</a></li>
            <li><a class="dropdown-item" href="#">FAQ</a></li>
          </ul>
        </li>
        
      </ul>
  <button style={{width:"130px",height:"34px",border:"none",borderRadius:"30px",background:"Red",color:"white",fontWeight:"500",fontSize:"15px",fontFamily:"inherit"}}>Book Now</button>
    </div>
  </div>
</nav>
     </div>
     <div className='Container-fluid'>
     <div id="carouselExampleControlsNoTouching" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={Laptop} class="d-block " alt="..." style={{height:"85vh",width:"100%"}} />
      
    </div>
    <div class="carousel-item">
    <img src={CPU} class="d-block " alt="..." style={{height:"85vh",width:"100%"}} />
    </div>
    <div class="carousel-item">
      <img src={Laptop} class="d-block " alt="..." style={{height:"85vh",width: "100%"}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
    </div>
    <Allroute/>
    <Service/>
    </>
  );
}

export default App;
