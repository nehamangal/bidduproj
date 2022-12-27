import pGorRoomContext from "./pGorRoomContext";
import { useState } from "react";

//state accessible to all
const PGorRoomState = (props) =>{

    const host="http://localhost:5000"

    const [pgrooms, setpgrooms] = useState([])
    const [tiffin, settiffin] = useState([])


    const getPGorRooms = async ()=>{
        
     
        const response = await fetch(`${host}/api/pgorroom/fetchallpgoroom`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              
            }
          });

          const json = await response.json();
          // console.log(json)
          setpgrooms(json)

    }

    const getTiffin = async ()=>{
        
     
      const response = await fetch(`${host}/api/tiffin/fetchalltiffin`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            
          }
        });

        const json = await response.json();
        // console.log(json)
        settiffin(json)

  }


    const addPgRoom = async (title,description, tag)=>{

      const response = await fetch(`${host}/api/pgorroom/newpgroom`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
       
          body: JSON.stringify({title:title,description:description,tag:tag})
        });
        const json = await response.json()

      setpgrooms(pgrooms.concat(json))  // return a new array
      
  
  }


return (                              //export
        <pGorRoomContext.Provider value={{pgrooms,tiffin, getPGorRooms, getTiffin,addPgRoom }}>  
         {props.children}
        </pGorRoomContext.Provider>
    )

  }


export default PGorRoomState;
