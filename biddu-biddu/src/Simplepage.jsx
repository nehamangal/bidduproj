import Nav from "./Nav";
import Footers from "./Foot";
import Pgrent from "./Pgrent";
import PGorRoomContext from "./context/PGorRoom/pGorRoomContext";
import React, { useContext, useEffect , useState} from "react";

const Simple=()=>{

  const context = useContext(PGorRoomContext);
  const { pgrooms, getPGorRooms} = context;

  useEffect(() => {
   
   
    getPGorRooms();

    console.log(pgrooms)
 
  // eslint-disable-next-line
}, []);

    return (
        <>
        <Nav />
        {pgrooms.map((note) => {
          // console.log(note)
          return <Pgrent key={note._id} pgroom={note}/>;
        })}
     
<div style={{marginTop:"50rem"}}>
 <Footers />
 </div>
 </>
    )

}

export default Simple;