import React from "react";
import { Link } from "react-router-dom";
import '../src/App.css';
import Allrouter from "./Rou";

const App=()=>{
return(<>

<Allrouter />

  <div id="navbar"> 
            <div id="nav_left">Biddu</div>

                <img className="menu_icons" src="./images/close-svgrepo-com (1).svg"  height="35vh" onclick="hideMenu()" alt="" />
             <div id="nav_right">
              <ul>
                <li> <Link to="/home">Home</Link> </li>
                <li><Link to="/about">ABOUT</Link> </li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/login">LOG IN</Link> </li>
              </ul>
                  
              </div>
            <div/>

            <img className="menu_icons" src="./images/menu-svgrepo-com.svg" height="35vh" onclick="showMenu()" alt="" />
            
            
           
    </div>

    <div id="parallax_slide">
                
                <p>Find basic amenities near your educational institute</p>
             <div className="explore_bttn"> <a href="#services" /> Explore </div>
        
    </div>

    <div id="services">
          <div id="services-title"> <h2>OUR SERVICES</h2></div>
          <div id="wrapper">
             <div className="options"> <img src="./images/rent.svg" height="45vh" alt="" /> <Link to="/pg"> PGs and rental rooms</Link></div> 
             <div className="options"> <img src="./images/library-svgrepo-com.svg" height="45vh" alt="" />  <a href="">Libraries</a></div> 
             <div className="options"><img src="./images/lunchbox-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Tiffin</a></div> 
             <div className="options"> <img src="./images/cafe-svgrepo-com.svg" height="45vh" alt="" /><a href="">Cafes</a> </div> 
             <div className="options"> <img src="./images/hospital-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Medical services</a></div> 
             <div className="options"> <img src="./images/laundry-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Laundry services</a></div> 
             <div className="options"> <img src="./images/jeep-car-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Rent vehicles</a> </div> 
             <div className="options"> <img src="./images/gym-svgrepo-com.svg" height="45vh" alt="" />   <a href="">Fitness</a></div> 
             <div className="options"> <img src="./images/groceries-grocery-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Grocery and Dairy</a> </div>         
             <div className="options"> <img src="./images/house-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Flat</a></div>         
             <div className="options"> <img src="./images/maid-svgrepo-com (1).svg" height="45vh" alt="" /> <a href="">Maid</a></div>         
             <div className="options"> <img src="./images/restaurant-svgrepo-com.svg" height="45vh" alt="" /> <a href="">Restaurants</a></div>         
          </div>
       </div>

       <div id="footer">
      
        <div className="footer_left">
          <div className="footer_opn">About us</div>
          <div className="footer_opn"> FAQ </div>
          <div className="footer_opn">Privacy Policy</div>
        </div>

        <div className="footer_right">
           <div className="footer_opn"> <i className="fab fa-whatsapp fa-2x" style={{'color':'#fff'}}/> </div>
           <div className="footer_opn"><i className="fab fa-facebook-f fa-2x" style={{'color':'#fff'}}/> </div>
           <div className="footer_opn"><i className="fab fa-instagram fa-2x" style={{'color':'#fff'}}/></div>
           <div className="footer_opn"> <i className="fab fa-linkedin-in fa-2x" style={{'color':'#fff'}}/></div>
        </div>
   
    </div>
</>
)

}


export default App;