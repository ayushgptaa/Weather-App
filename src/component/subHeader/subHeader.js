import React from "react";
import "./subHeader.css"

let array1 = [
    { id: 1, city: "New Delhi", temp: 55 },
    { id: 2, city: "Chennai", temp: 68 },
    { id: 3, city: "Kolkata", temp: 43 },
    { id: 4, city: "Mumbai", temp: 102 },

]

export default function SubHeader() {
    return (
        <div className="subHeader">
            {array1.map((value) => (
                <span className="city" key={value.id}> {value.city} : {value.temp} <span style={{ fontSize: "7px" }}>AQI</span></span>
            ))}
        </div>
    )
}