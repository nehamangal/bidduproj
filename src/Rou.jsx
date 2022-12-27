import React from "react";
import pgrent from "./Pgrent";
import { Link, Route,Switch } from "react-router-dom";
const Allrouter=()=>{
return(<>
<Switch>
<Route path="/pg" component={pgrent}/>
</Switch>
</>)

}

export default Allrouter;