import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github_cool-removebg-preview.png";
import resume from "../images/resume icon.png";

function Footer(){

    return(
        <nav>

            <li><a href="https://github.com/kadeball"><img className="imgFooter" src={github} alt="github"/></a></li>
            <li><a href="https://www.linkedin.com/in/kalista-ballard-3527491ab/"><img className="imgFooter" src={linkedin} alt="linkedin"/></a></li>
            <li> <Link to="/Resume"><img className="imgFooter" src={resume} alt="resume"/></Link></li>

        </nav>


    )
}

export default Footer;