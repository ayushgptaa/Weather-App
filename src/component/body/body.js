import React from "react";
import "./body.css";
//Images
import Wind from "../../images/wind.svg";
import Wind2 from "../../images/wind2.svg";
import Sun from "../../images/sunIcon.svg";
import Locate from "../../images/locateIcon.svg";
import Heart from "../../images/blueHeart.svg";
import Share from "../../images/shareIcon.svg";
import Temp from "../../images/liveTemp.svg";
import Boy from "../../images/goodBoy.svg";

const arr1 = [
    { id: 1, status: "Good" },
    { id: 2, status: "Moderate" },
    { id: 3, status: "Poor" },
    { id: 4, status: "Unhealthy" },
    { id: 5, status: "Severe" },
    { id: 6, status: "Hazardous" },
]
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
                    <span style={{ fontWeight: "600", fontSize: "16.0994px", lineHeight: "23px" }}><img src={Wind2} alt="wind" style={{ color: "#667580", marginRight: "5px" }}></img>Air Quality in</span>
                    <span style={{ fontWeight: "700", fontSize: "19.677px", lineHeight: "27px" }}>New Delhi, India</span>
                    <span style={{ fontWeight: "600", fontSize: "12px", lineHeight: "20px", color: "#677580" }}>Nearest monitor is 0.8 km </span>
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
            {arr1.map((value) => (
                <div className="indicator" key={value.id}></div>
            ))}
        </div>
    )
}