import Nav from "./Nav";
import Footers from "./Foot";
import TiffinCard from "./TiffinCard";
import PGorRoomContext from "./context/PGorRoom/pGorRoomContext";
import React, { useContext, useEffect , useState} from "react";

const Tiffin=()=>{

  const context = useContext(PGorRoomContext);
  const { tiffin, getTiffin} = context;

  useEffect(() => {
   
   
    getTiffin();

    console.log(tiffin)
 
  // eslint-disable-next-line
}, []);

    return (
        <>
        <Nav />
        {tiffin.map((note) => {
          // console.log(note)
          return <TiffinCard key={note._id} tiffin={note}/>;
        })}
     
<div style={{marginTop:"50rem"}}>
 <Footers />
 </div>
 </>
    )

}

export default Tiffin;