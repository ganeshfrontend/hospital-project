import React from "react";
import { Link,Outlet } from "react-router-dom";
function AdminDashBoard(){
return(
<div>
    <h1>AdminDashBoard</h1>
    <Link to="addhospital"><button class="btn btn-primary">+AddHospital</button></Link>&nbsp;&nbsp;
    <Link to="addbed"><button class="btn btn-primary">+Add Bed</button></Link>
<Outlet></Outlet>
</div>
)
}
export default AdminDashBoard;