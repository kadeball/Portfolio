import React from "react";
import "../App.css";
import havens from "../images/havens.PNG";
import hplace from "../images/hplace.PNG";
import gem from "../images/stonestore.PNG";
import webapp from "../images/webapp.PNG";
import dw from "../images/dw.PNG";
import abc from "../images/abc.PNG";
import timbchamber from "../images/timbchamber.PNG";





const projectList =[
    {
        name:"Discount Warehouse",
        img: dw,
        descrip: "WordPress website created for a small local business looking to create expand their online presence in addition to their social media",
        link: "https://discountwarehouseofwarsaw.com/"
    },
    {
        name:"ABC Industries",
        img: abc,
        descrip: "Landing page created for a company to advertise their new heating products while their website is under construction",
        link: "https://discountwarehouseofwarsaw.com/"
    },
    {
        name:"Treasue Island and Madeira Beach Chamber of Commerce",
        img: timbchamber,
        descrip: "WordPress website created for to advertise events and their sponsors for a chamber of commerce is Florida",
        link: "https://timbchamber.org/"
    },
    {
        name:"Heritage Place",
        img: hplace,
        descrip: "WordPress website for a center dedicated to helping senior citizens with technologies",
        link: "https://heritageplaceindy.org/"
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
                backgroundColor: "white",
                marginBottom: "115px"
            };

            return<div style={styles}>
                <div>
                    <img className="img2" src={projects.img} alt="image"/>
                    <p className="descripBox">{projects.descrip}</p>
                    <button className="button3"><p><a href={projects.glink}>Source |</a><a href={projects.link}> Live</a></p></button>
                </div>
            </div>


        });
        return projectDivs;
    }


    return(
        <div>
            <div className="background">
            {renderProjects()}
            </div>
        </div>
    )
}


export default Projects;