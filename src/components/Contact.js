import React from "react";
import "../App.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github_cool-removebg-preview.png";
import resume from "../images/resume icon.png";
import {Link} from "react-router-dom";

const contactList =[
    {
        name:"LinkedIn",
        img: linkedin,
        link: "https://www.linkedin.com/in/kalista-ballard-3527491ab/"
    },
    {
        name:"Github",
        img: github,
        link: "https://github.com/kadeball"
    },
    {
        name:"View Resume",
        img:resume,
        link: "/Resume"
    },
];


function Contact(){

    function renderContacts() {
        let contactDivs = contactList.map((contact, id) => {

            let styles = {
                margin: "25px",
                height: "450px",
                width: "380px",
                padding: "10px",
                borderRadius: "25px",
                display: "inline-block",
                backgroundColor: "#C3BCE7",
                marginBottom: "147px"

            };

            return<div style={styles}>

                <div>
                    <img className="img3" src={contact.img} alt="image"/>
                    <button className="button3"><a href={contact.link}> <h3>{contact.name}</h3></a></button>
                </div>
            </div>


        });
        return contactDivs;
    }

    return(
            <div className="backgroundofBoxes2">
                <div>
            <h1 className="contactBox">Email: kalista8@outlook.com</h1>
                <h1 className="contactBox">Phone Number: (317)-554-7057</h1>
                    <a href="https://www.behance.net/kalistaballard"><h1 className="contactBox">Link to Behance Presentations</h1></a>
                </div>
                {renderContacts()}
            </div>
    )
}


export default Contact;