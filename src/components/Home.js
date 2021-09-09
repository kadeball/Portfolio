import React from "react";
import "../App.css";
import vase from "../images/greek-vase.png";
import {Link} from "react-router-dom";

const linkList =[
    {
        name:"Projects",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        id: "1",
        link: "/Projects"
    },
    {
        name:"Skills",
        img: "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        id: "2",
        link: "/Skills"
    },
    {
        name:"Contact",
        img: "https://images.unsplash.com/photo-1559030623-0226b1241edd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRhY3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        id: "4",
        link: "/Contact"
    }
];


function Home(){

    function renderLinks() {
        let linkDivs = linkList.map((links, id) => {

            let styles = {
                margin: "25px",
                height: "325px",
                width: "280px",
                padding: "10px",
                borderRadius: "25px",
                boxShadow: "2px 5px lightgray",
                display: "inline-block",
                backgroundColor: "#6c5b7b",

            };

            return<div style={styles}>

                    <img className="img" src={links.img} alt="image"/>
                <Link to={links.link}>  <button>{links.name}</button></Link>

                </div>


        });
        return linkDivs;
    }







    return(
        <div className="background">
            <div className="box">
            <h1 className="fontStyle">Kalista Ballard</h1>
            </div>
            <div className="box2">
            <h2>Front-End Web Developer with a specialization in UI/UX Design</h2>
            </div>
            <div className="backgroundofBoxes">
            {renderLinks()}
            </div>

        </div>

    )
}


export default Home;