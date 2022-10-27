import React from "react"
import { Link } from "react-router-dom";


// create navbar with all links to different pages using Link
const NavBar = () =>{
    return(
        <nav>
            <a id="myName">Ian's Website</a>
            <Link to="">Home</Link>
            <Link to="rubix">Rubix</Link>
        </nav>
    )
}
export default NavBar;