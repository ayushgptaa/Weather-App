import React from "react";
import "./pollutant.css";

import PM2 from "../../images/pm2.svg";
import Sun from "../../images/sunIcon.svg";
import Droplet from "../../images/droplets.svg";
// import Exclamation from "../../images/exclamation.svg";

const arr1 = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
]

const arr2 = [
    { id: 1, day: "Monday" },
    { id: 2, day: "Tuesday" },
    { id: 3, day: "Wednesday" },
    { id: 4, day: "Thursday" },
    { id: 5, day: "Friday" },
    { id: 6, day: "Saturday" }
]

export default function Pollutant() {
    return (
        <>
            <div className="body">
                <span>Major Pollutants <span>in New Delhi</span> </span>
                <div className="container">
                    {arr1.map((value) => (
                        <div className="tiles" key={value.id}>
                            <img src={PM2} alt="pm2"></img>
                            <span>PM2.5</span>
                            <span>344 μg/m3</span>
                            <span className="rectangle"></span>
                        </div>
                    ))}
                </div>

                <div className="forecast">
                    <span>Weather forecast in New Delhi</span>
                    <div className="week-section">
                        {
                            arr2.map((value) => (
                                <div key={value.id}>
                                    <span>{value.day}</span>
                                    <div className="week">
                                        <div><img src={Sun} alt="Sun"></img>35c/5c</div>
                                        <span>Mostly sunny</span>
                                        <span><img src={Droplet} alt="droplets"></img>70%</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    )

}