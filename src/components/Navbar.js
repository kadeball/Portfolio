import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

function Navbar(){

    return(
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li> <Link to="/Skills">Skills</Link></li>
            <li> <Link to="/Resume">Resume</Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
        </nav>

    )
}

export default Navbar;