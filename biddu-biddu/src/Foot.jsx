import React from "react";
import { Link } from "react-router-dom";
import '../src/App.css';
const Footers=()=>{
  return(<><div id="footer">
      
  <div className="footer_left">
    <div className="footer_opn">About us</div>
    <div className="footer_opn"> FAQ </div>
    <div className="footer_opn">Privacy Policy</div>
  </div>

  <div className="footer_right">
     <div className="footer_opn"> <i className="fab fa-whatsapp fa-2x" style={{"color":"#fff"}}/> </div>
     <div className="footer_opn"><i className="fab fa-facebook-f fa-2x" style={{'color':'#fff'}}/> </div>
     <div className="footer_opn"><i className="fab fa-instagram fa-2x" style={{'color':'#fff'}}/></div>
     <div className="footer_opn"> <i className="fab fa-linkedin-in fa-2x" style={{'color':'#fff'}}/></div>
  </div>

</div></>)
    

}

export default Footers