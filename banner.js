
import pic from "../images/logo.png";
import pic2 from "../images/facebook.png";
import pic3 from "../images/instagram.png";
import pic4 from "../images/twitter.png";
import '../components/house.css'
function Banner(){
    return(
  <>
  <nav className="navbar">
   <div>
   <img src={pic} className='log'/>
   <i className="log_lb">House <span className="cl">Hub</span></i>
    </div>
    <ul className="navs">
      <li className="navitems">
        <a href="">Home</a>
      </li>
      <li className="navitems">
        <a href="">About</a>
      </li>
      <li className="navitems">
        <a href="">Contact</a>
      </li>
  
    </ul> 
    <div>
       <a href="">
    <img src={pic2} className="socialmedia"/>

    </a>
    <a href="">
    <img src={pic3} className="socialmedia"/>

    </a>
    <a href="">
    <img src={pic4} className="socialmedia"/>

    </a>
    </div>
   
   </nav>

  </>

         
    );
}
export default Banner