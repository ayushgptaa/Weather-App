import React from 'react';
import './subHeader.css';

let array1 = [
    { id: 1, city: 'New Delhi', temp: 55, color: '#3DBE34' },
    { id: 2, city: 'Chennai', temp: 68, color: '#E9DD33' },
    { id: 3, city: 'Kolkata', temp: 43, color: '#3DBE34' },
    { id: 4, city: 'Mumbai', temp: 102, color: '#E75835' },
];

export default function SubHeader() {
    return (
        <div className="subHeader">
            {array1.map(value => (
                <div className="city" key={value.id}>
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: ' 12px',
                            lineHeight: '18px',
                        }}>
                        {value.city} :
                    </span>
                    <span
                        style={{
                            color: value.color,
                            fontWeight: 800,
                            fontSize: ' 16px',
                            lineHeight: '29px',
                        }}>
                        {value.temp}
                    </span>
                    <span style={{ fontSize: '7px', fontWeight: 700 }}>AQI</span>
                </div>
            ))}
        </div>
    );
}
