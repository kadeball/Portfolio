import React from "react";
import "../App.css";
import JS from "../images/js-removebg-preview.png";
import C from "../images/C.png";
import Material from "../images/material ui.png";
import Github from "../images/github_cool-removebg-preview.png";
import Bootstrap from "../images/bootstrap.png";
import HTML from "../images/html.png";
import CSS from "../images/css1.png";
import react from "../images/react.png";
import vscode from "../images/vs code.png";



const skillList =[
    {
        name:"Javascript",
        img: JS,
    },
    {
        name:"C#",
        img: C,
    },
    {
        name:"Material UI",
        img: Material,
    },
    {
        name:"Github",
        img: Github,
    },
    {
        name: "Boostrap",
        img: Bootstrap

    },
    {
        name: "HTML5",
        img: HTML
    },
    {
        name: "CSS3",
        img: CSS
    },
    {
        name: "React",
        img: react
    }

];



function Skills(){

    function renderSkills() {
        let skillDivs = skillList.map((projects, id) => {

            let styles = {
                margin: "10px",
                height: "425px",
                width: "400px",
                borderRadius: "25px",
                boxShadow: "2px 5px lightgray",
                display: "inline-block",
                backgroundColor: "#dcedc2",
                marginBottom: "215px"

            };

            return<div className="background" style={styles}>

                <div>
                    <img className="img4" src={projects.img} alt="image"/>
                    <button className="button"> <p>{projects.name}</p></button>

                </div>
            </div>


        });
        return skillDivs;
    }


    return(
        <div className="background2">
            <h1>Skills</h1>
            <div className="backgroundofBoxes">
                {renderSkills()}
            </div>
        </div>
    )
}


export default Skills;