import React from "react";
import "./body.css";
//Images
import Wind from "../../images/wind.svg";
import Sun from "../../images/sunIcon.svg";
import Locate from "../../images/locateIcon.svg";
import Heart from "../../images/blueHeart.svg";
import Share from "../../images/shareIcon.svg";
import Temp from "../../images/liveTemp.svg";
import Boy from "../../images/goodBoy.svg";

export default function Body() {
    return (
        <div className="body">
            <div className="top">
                <span className="weatherButton">
                    <img src={Wind} alt="wind"></img>AQI</span>
                <span className="weather"><img src={Sun} alt="sun"></img> Weather</span>
                <span className="locate"><img src={Locate} alt="location"></img> Locate me</span>
            </div>
            <div className="second">
                <div className="city">
                    <span>Air Quality in</span>
                    <span>New Delhi, India</span>
                    <span>Nearest monitor is 0.8 km </span>
                </div>
                <div>
                    <span><img src={Heart} alt="heart"></img>20.6k</span>
                    <span><img src={Share} alt="shareIcon"></img></span>

                </div>
            </div>

            <div className="third-section">
                <div className="third-section-1">
                    <img src={Temp} alt="liveTemp"></img>
                    <div className="live">
                        <span>Live AQI</span>
                        <span>Good</span>
                        <span>Last Update: 2 hr ago</span>
                    </div>
                    <div>You can go outside without
                        fear and enjoy the day</div>
                    <img src={Boy} alt="boy"></img>
                </div>

                <div>
                    <div>
                        <img src={Sun} alt="Sun"></img>
                        <div>35 C
                            <span>Most sunny</span>
                        </div>
                        <div>Min<span>10oC</span></div>
                        <div>Max<span>40oC</span></div>
                    </div>

                    <span>
                        <span>11 km/hr</span>
                        <span>70%</span>
                        <span>70%</span>
                    </span>
                </div>
            </div>



        </div>
    )
}