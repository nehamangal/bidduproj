import React,{useEffect, useState}  from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav";
import Footers from "./Foot";
import rent from './images/illustration.png'
const TiffinCard=(props)=>{

  const [base64String, setbase64String] = useState("");
  const {tiffin} = props
  console.log(tiffin)

  useEffect(() => {
    var datastring=  btoa (new Uint8Array(tiffin.img[0].data.data).reduce(function(data,byte){
      return data+String.fromCharCode(byte);
    },""));
    setbase64String(datastring)
    console.log(base64String)
    // eslint-disable-next-line 

    
  }, [])
 

  
    return (<>
    {/* <Nav /> */}
    
    <div className="card mb-3" style={{"marginTop":"10rem","display":"flex","textAlign":"center","justifyContent":"center","marginLeft":"6rem","marginRight":"6rem","height":"14rem"}}>
      <div className="row g-0">
        <div className="col-md-4">
        <img style={{"width":"17rem"}} src={`data:image/png;base64,${base64String}`} className="img-fluid rounded-start"  />
        </div>
        <div className="col-md-8">
        <div style={{"fontWeight":"bold","marginTop":"1rem"}} className="row justify-content-evenly">
        <div  className="col-4">
          <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Name</button>
        </div>
        <div className="col-4">
        <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Pick'n'Drop</button>
        </div>
        <div className="col-4">
        <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Timing</button>
        </div>
      </div>
      <div className="row justify-content-evenly" style={{"marginTop":"1rem"}}>
        <div className="col-4">
          {tiffin.name}
        </div>
        <div className="col-4">
        {tiffin.pickndrop}
        </div>
        <div className="col-4">
        {tiffin.timing}
        </div>
      </div>
    
      <div className="row justify-content-evenly" style={{"marginTop":"2rem"}}>
        <div className="col-4">
        <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Price</button>
        </div>
        {/* <div className="col-4">
        <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Seater</button>
        </div>
        <div className="col-4">
         
        <button style={{"paddingLeft":"1rem","paddingRight":"1rem","fontWeight":"bold"}}>Electricity</button>
        </div> */}
      </div>

      <div className="row justify-content-evenly" style={{"marginTop":"1rem"}}>
        <div className="col-4">
        {tiffin.price}
        </div>
       
      </div>
        </div>
      </div>
    </div>
    
    
     {/* <div style={{marginTop:"50rem"}}>
     <Footers />
     </div> */}
    
    
    </>
    )
    
    
    }
    
    export default TiffinCard;