import '../src/forms.css';
import Nav from "./Nav";
import PGorRoomContext from "./context/PGorRoom/pGorRoomContext";
import React, { useContext, useEffect , useState} from "react";


const Forms=()=>{

  const context = useContext(PGorRoomContext);
  const { addPgRoom } = context;

  const [pgroom, setpgroom] = useState({ownerName:"", contact_number:"",type:"", for:"", acNonac:"", wifi:"", seater:"", kitchen:"", price:"", price_des:"", diet:"", furnished:"", lateBath:"", electricity:"", address:"", img:[] })

  const handleClick = async(e) => {
    e.preventDefault()
    await addPgRoom(pgroom.ownerName, pgroom.contact_number, pgroom.type, pgroom.for, pgroom.acNonac, pgroom.wifi, pgroom.seater, pgroom.kitchen, pgroom.price, pgroom.price_des, pgroom.diet, pgroom.furnished, pgroom.lateBath, pgroom.electricity, pgroom.address, pgroom.img)
    // setnote({title:"",description:"",tag:""})

    console.log("yes")
  };

  // const onChange = (e) => { 
  //   e.preventDefault();
  //   set({...pgroom, [e.target.name]:e.target.value}) 
   
  // };
return(
    <>
    <Nav />
    <section class="forms">
    <form>
        <div> <h1>Hostels/Pg/Rent Rooms Forms</h1></div>
      
        <div class="mb-3">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> <b>Owner Name</b> </label>
                <input type="text" class="form-control" name="ownerName" id="exampleFormControlInput1" placeholder="Enter Owner Name" value={pgroom.ownerName } required/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> <b> Owner Contact Number</b></label>
                <input type="text" class="form-control" name="contact_number" id="exampleFormControlInput1" placeholder="Enter Owner contact number" value={pgroom.contact_number} required/>
              </div>
            <label for="exampleFormControlInput1" class="form-label"><b>Type (Rent/Pg/Hostel)</b></label>
            <input type="text" class="form-control" name="type" id="exampleFormControlInput1" placeholder="Rent/Pg/Hostel" value={pgroom.type} required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>For (Girl/Boy/Both)</b></label>
            <input type="text" class="form-control" name="for" id="exampleFormControlInput1" value={pgroom.for } placeholder="(Girl/Boy/Both)" required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Ac/Non-Ac</b></label>
            <input type="text" class="form-control" name="acNonac" id="exampleFormControlInput1" value={pgroom.acNonac} placeholder="Ac/Non-Ac" required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Wifi (Yes/No)</b></label>
            <input type="text" class="form-control" name="wifi" id="exampleFormControlInput1" value={pgroom.wifi } placeholder="Yes/No" required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Seater (Single/Double/Triple)</b></label>
            <input type="text" class="form-control" name="seater" id="exampleFormControlInput1" value={pgroom.seater} placeholder="Single/Double/Triple" required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Kitchen (Present/Not Present)</b></label>
            <input type="text" class="form-control" name="kitchen" id="exampleFormControlInput1" value={pgroom.kitchen } placeholder="Present/Not Present" required/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Price</b></label>
            <input type="text" class="form-control" name="price" id="exampleFormControlInput1" value={pgroom.price } placeholder="Enter price" required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Price Description</b></label>
            <input type="text" class="form-control" name="price_desc" id="exampleFormControlInput1" value={pgroom.price_des } placeholder="Enter price" required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Diet</b></label>
            <input type="text" class="form-control" name="diet" id="exampleFormControlInput1" value={pgroom.diet } required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Latebath</b></label>
            <input type="text" class="form-control" name="lateBath" id="exampleFormControlInput1"  value={pgroom.lateBath } required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Furnished</b></label>
            <input type="text" class="form-control" name="furnished" id="exampleFormControlInput1" value={pgroom.furnished } required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Electricity</b></label>
            <input type="text" class="form-control" name="electricity" id="exampleFormControlInput1" value={pgroom.electricity } required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Address</b></label>
            <input type="text" class="form-control" name="address" id="exampleFormControlInput1" value={pgroom.address } placeholder="Enter Address" required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><b>Images</b></label>
            <input type="file" class="form-control" name="img" id="exampleFormControlInput1" value={pgroom.img } required />
          </div>
          <div class="mb-3" id="submitted">
            <input type="submit" value="Submit" onClick={handleClick} />
          </div>
          
    </form>
</section>
    </>
)


}

export default Forms;