
import './App.css';
import Allroute from './AllRoutes/Allroute';
import Header from './Header/Header';
import logo from '../src/images/background.png'
import Carousel from './HomeData/Carousel/Carousel';
import Service from './Services/Service';
import About from './HomeData/About';
import Process from './HomeData/Process';
import Testimony from './HomeData/Testimony';


function App() {
  return (
    <>
    <Header/>
   <div className='container'>
   <nav class="navbar navbar-expand-lg bg-light " style={{display:"flex"}}>
    <img src={logo} alt='logo' style={{height:"6vh",width:"10vw"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> 
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav gap-5 m-auto">
        <li class="nav-item" >
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    <button className='' style={{ background:"red", border:"none", padding:"10px",borderRadius:"20px",color:"white"}}>Book Now</button>
    </div>
</nav>
   </div>

<Carousel/>

     

 
    <Service/>
    <About/>
    <Process/>
    <Testimony/>
    <Allroute/>
    </>
  );
}

export default App;
