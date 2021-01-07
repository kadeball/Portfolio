import React from "react";
import "../App.css";
import havens from "../images/havens.PNG";
import kaffa from "../images/kaffa.PNG";
import gem from "../images/stonestore.PNG";
import webapp from "../images/webapp.PNG";


const projectList =[
    {
        name:"Haven's Cleaning",
        img: havens,
        descrip: "WordPress website created for a small local business looking to create an online presence and attract more customers",
        link: "https://havenscleaning999439214.wordpress.com/"
    },
    {
        name:"Kaffa Coffee",
        img: kaffa,
        descrip: "WordPress website based on a coffee shop concept, looking to increase their online presence and attract customers",
        link: "https://kaffacafecoffee.wordpress.com/"
    },
    {
        name:"Gemstone Store",
        img:gem,
        descrip: "E-commerce gemstone store created with React, Javascript, and jQuery. This website includes a fully functional cart and the ability to add items",
        glink: "https://github.com/kadeball/313Final",
        link: "https://eloquent-clarke-b4f5f4.netlify.app/"
    },
    {
        name:"Scribe Web App",
        img: webapp,
        descrip: "Chatbot web app created with React and Javascript. This web app was created with usability and accessibility in mind for older adults with chronic illnesses",
        glink: "https://github.com/kadeball/chatbot",
        link: "https://tender-swirles-f424c2.netlify.app/"
    }
];



function Projects(){

    function renderProjects() {
        let projectDivs = projectList.map((projects, id) => {

            let styles = {
                margin: "25px",
                height: "610px",
                width: "405px",
                padding: "10px",
                borderRadius: "25px",
                boxShadow: "2px 5px lightgray",
                display: "inline-block",
                backgroundColor: "#dcedc2",
                marginBottom: "115px"

            };

            return<div className="background" style={styles}>

                <div>
                    <img className="img2" src={projects.img} alt="image"/>
                    <button className="button2"> <a href={projects.glink}> <p>Github Link</p></a></button>
                    <p className="descripBox">{projects.descrip}</p>
                    <button className="button"> <a href={projects.link}> <h3>{projects.name}</h3></a></button>

                </div>
            </div>


        });
        return projectDivs;
    }


    return(
        <div className="background2">
            <h1>Projects</h1>
            <div className="backgroundofBoxes">
            {renderProjects()}
            </div>
        </div>
    )
}


export default Projects;