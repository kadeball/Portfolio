import React from "react";
import "../App.css";
import computer from "../images/computer.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'


function Home(){

    return(
            <div className="background">
                {/*  <img className="frame" src={computer} alt="computerpic"/> */}
                <div className="box">
            <h1 className="fontStyle"> Kalista Ballard</h1>
            <p className="fontStyle2"> Front End Web Developer with a specialization in UI/UX Design</p>
                    <Link to="/Resume2022.pdf" target="_blank" download><button className="button hvr-sweep-to-bottom">Download Resume <FontAwesomeIcon icon={faFileDownload} /></button></Link>
        </div>
            </div>

    )
};


export default Home;