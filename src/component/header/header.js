import React from "react";
import "./header.css";
import SubHeader from "../subHeader/subHeader";

//IMAGES
import logo from "../../images/logo.svg";
import arrow1 from "../../images/arrow1.svg";
import globe from "../../images/globe.svg";


export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="nav-elements">
                    <span>Home</span>
                    <span>Ranking</span>
                    <span>Monitors</span>
                    <span>
                        Resources
                        <img src={arrow1} alt="downArrow"></img>
                    </span>


                </div>
                <span className="language">
                    <img src={globe} alt="globeImage"></img>
                    Eng
                    <img src={arrow1} alt="downArrow"></img>
                </span>
                <span className="seperate"></span>
                <span className="loginButton">Login</span>
            </div>
            <SubHeader />
        </>


    )
}