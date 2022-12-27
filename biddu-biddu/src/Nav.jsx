import React,{useState,useRef} from "react";
import { Link } from "react-router-dom";
import '../src/App.css';
const Nav=()=>{

  
  const refClose = useRef(null);
  function changeFunc(event) {
    if(refClose.current.style.display=='none')
    refClose.current.style.display = 'block';
    else
    refClose.current.style.display='none'
   
  }
    return(<>
    
  <div id="navbar"> 
            <div id="nav_left">
              <i id="fab" className="fab fa fa-bars" onClick={changeFunc}/>
            <span id="name">Biddu</span>
            <span id="login">Log In</span>
            </div>
               
             <i className="log" style={{display:'none'}} ><a><Link to="/login">LOG IN</Link></a></i>
             <div id="nav_right" ref={refClose}>
              <ul>
                <li> <Link to="/home">HOME</Link> </li>
                <li><Link to="/about">ABOUT</Link> </li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/login">LOG IN</Link> </li>
                <li><Link to="/formss">FORM</Link> </li>
              </ul>
                  
              </div>
            <div/>

            {/* <img className="menu_icons" src="./images/menu-svgrepo-com.svg" height="35vh" onclick="showMenu()" alt="" /> */}
            
            
           
</div>
    </>)
}

export default Nav