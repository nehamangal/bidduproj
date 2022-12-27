import React,{useEffect, useState}  from "react";

const Pgrent=(props)=>{

  const [base64String, setbase64String] = useState("");
  const {pgroom} = props
  console.log(pgroom)

  useEffect(() => {
    var datastring=  btoa (new Uint8Array(pgroom.img[0].data.data).reduce(function(data,byte){
      return data+String.fromCharCode(byte);
    },""));
    setbase64String(datastring)
    console.log(base64String)
    // eslint-disable-next-line 

    
  }, [])
 

  
  
return (<>

<div style={{marginTop:"10rem",marginLeft:"30rem"}}>
    <div className="card mb-3" style={{maxWidth:"590px",maxHeight:"560px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`data:image/png;base64,${base64String}`} className="img-fluid rounded-start"  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         */}
         <div className="container text-center">
  <div className="row row-cols-4">
    <div className="col">Name: {pgroom.type}</div>
    <div className="col">AC/Non-AC: {pgroom.acNonac}</div>
    <div className="col">Wifi: {pgroom.wifi}</div>
  </div>
  <div className="row row-cols-4">
    {/* <div className="col">LateBath: {pgroom.lateBath}</div> */}
    {/* <div className="col">Kichen: {pgroom.kitchen}</div> */}
    <div className="col">Price: {pgroom.price}</div>
    <div className="col">Seater: {pgroom.seater}</div>
    <div className="col">Electricity Bill: {pgroom.electricity}</div>
  </div>
  <div className="row row-cols-4">
  {/* <div className="col">Furnished: {pgroom.fullsemifurnished}</div>
    <div className="col">Price: {pgroom.price}</div>
    <div className="col">Address: {pgroom.address }</div>
    {/* <div className="col">Electricity Bill: {pgroom.electricityBill}</div> 
  */}
  </div> 
</div>
        <div>
       
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Know More
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        dsnjkdsnjsk
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    </div>
  </div>
</div> 
 </div>
 


</>
)


}

export default Pgrent;