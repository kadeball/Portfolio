import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

function Navbar(){

    return(
        <nav>
            <li className="hvr-underline-from-left"><Link to="/">Home</Link></li>
            <li className="hvr-underline-from-left"><Link to="/Projects">Projects</Link></li>
            <li className="hvr-underline-from-left"><Link to="/Contact">Contact</Link></li>
        </nav>

    )
}

export default Navbar;