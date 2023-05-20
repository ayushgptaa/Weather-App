import React from 'react';
import './body.css';
//Images
import Wind from '../../images/wind.svg';
import Wind2 from '../../images/wind2.svg';
import Sun from '../../images/sunIcon.svg';
import Locate from '../../images/locateIcon.svg';
import Heart from '../../images/blueHeart.svg';
import Share from '../../images/shareIcon.svg';
import Temp from '../../images/liveTemp.svg';
import Boy from '../../images/goodBoy.svg';

const arr1 = [
    { id: 1, status: 'Good', color: '#3DBE34' },
    { id: 2, status: 'Moderate', color: '#F0E431' },
    { id: 3, status: 'Poor', color: '#E75835' },
    { id: 4, status: 'Unhealthy', color: '#EA519F' },
    { id: 5, status: 'Severe', color: '#BC4FCC' },
    { id: 6, status: 'Hazardous', color: '#C92033' },
];
export default function Body() {
    return (
        <div className="body">
            ,
            <div className="top">
                <span className="weatherButton">
                    <img src={Wind} alt="wind"></img>AQI
                </span>
                <span className="weather">
                    <img src={Sun} alt="sun"></img> Weather
                </span>
                <span className="locate">
                    <img src={Locate} alt="location"></img> Locate me
                </span>
            </div>
            <div className="second">
                <div className="cityInfo">
                    <span style={{ fontWeight: '600', fontSize: '16.0994px', lineHeight: '23px' }}>
                        <img src={Wind2} alt="wind" style={{ color: '#667580', marginRight: '5px' }}></img>Air Quality
                        in
                    </span>
                    <span style={{ fontWeight: '700', fontSize: '19.677px', lineHeight: '27px' }}>
                        New Delhi, India
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '12px', lineHeight: '20px', color: '#677580' }}>
                        Nearest monitor is 0.8 km{' '}
                    </span>
                </div>
                <div className="share">
                    <img src={Heart} alt="heart" />
                    <span>20.6k</span>
                    <img src={Share} alt="shareIcon" />
                </div>
            </div>
            <div className="third-section">
                <div className="third-section-1">
                    <img src={Temp} alt="liveTemp"></img>
                    <div className="live">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <div className="circle1"></div>
                            <span style={{ fontSize: '12px', fontWeight: '700', lineHeight: '16px' }}>Live AQI</span>
                        </div>
                        <span style={{ fontWeight: '800', fontSize: '22px', lineHeight: '30px', color: '#3DBE34' }}>
                            Good
                        </span>
                        <span style={{ fontWeight: '500', fontSize: '16px', lineHeight: '30px' }}>
                            Last Update: 2 hr ago
                        </span>
                    </div>
                    <div
                        style={{
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '20px',
                            color: '#677580',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        You can go outside without fear and enjoy the day
                    </div>
                    <img src={Boy} alt="boy"></img>
                </div>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', gap: '10px', marginRight: '30px' }}>
                            <img style={{ width: '31.97px', height: '31px' }} src={Sun} alt="Sun"></img>
                            <div>
                                <span
                                    style={{
                                        fontWeight: 800,
                                        fontSize: '29.0392px',
                                        lineHeight: '40px',
                                    }}>
                                    35 &#176;
                                </span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        lineHeight: '21px',
                                    }}>
                                    C
                                </span>
                                <p
                                    style={{
                                        margin: 0,
                                        color: '#677580',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        lineHeight: '21px',
                                    }}>
                                    Mostly sunny
                                </p>

                                <img src="/directionIcon.svg" alt="" />

                                <span
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '13px',
                                        lineHeight: '18px',
                                        color: '#31343D',
                                        marginTop: '10px',
                                    }}>
                                    11 km/hr
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                marginLeft: '30px',
                                display: 'flex',
                                gap: '30px',
                            }}>
                            <div style={{ marginTop: '5px' }}>
                                <span
                                    style={{
                                        width: '6px',
                                        height: '6px',
                                        background: ' #3DBE34',
                                        display: 'inline-block',
                                        borderRadius: '50%',
                                    }}></span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        lineHeight: '18px',
                                        color: '#677580',
                                        marginLeft: '5px',
                                    }}>
                                    Min
                                </span>
                                <p
                                    style={{
                                        margin: 0,
                                        fontWeight: 700,
                                        fontSize: '13.7027px',
                                        lineHeight: '19px',
                                        color: '#31343D',
                                        marginLeft: '5px',
                                    }}>
                                    10 &#176;<span>C</span>
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '18px',
                                    }}>
                                    <img src="/dropsIcon.svg" alt="drop-icon" />
                                    <p
                                        style={{
                                            margin: 0,
                                            fontWeight: 700,
                                            fontSize: '13px',
                                            lineHeight: '18px',
                                            color: ' #31343D',
                                            marginLeft: '5px',
                                        }}>
                                        70%
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <span
                                    style={{
                                        width: '6px',
                                        height: '6px',
                                        background: '#E75835',
                                        display: 'inline-block',
                                        borderRadius: '50%',
                                    }}></span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        lineHeight: '18px',
                                        color: '#677580',
                                        marginLeft: '5px',
                                    }}>
                                    Max
                                </span>
                                <p
                                    style={{
                                        margin: 0,
                                        fontWeight: 700,
                                        fontSize: '13.7027px',
                                        lineHeight: '19px',
                                        color: '#31343D',
                                        marginLeft: '5px',
                                    }}>
                                    40 &#176;<span>C</span>
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '18px',
                                    }}>
                                    <img src="/dropsIcon.svg" alt="drop-icon" />
                                    <p
                                        style={{
                                            margin: 0,
                                            fontWeight: 700,
                                            fontSize: '13px',
                                            lineHeight: '18px',
                                            color: ' #31343D',
                                            marginLeft: '5px',
                                        }}>
                                        70%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <span>
                            Min<span>10oC</span>
                        </span>
                        <span>
                            Max<span>40oC</span>
                        </span> */}
                    </div>
                    {/* <div>
                        <span>
                            <span>11 km/hr</span>
                            <span>70%</span>
                            <span>70%</span>
                        </span>
                    </div> */}
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '1px',
                    marginLeft: '45px',
                }}>
                {arr1.map(value => (
                    <div
                        id={value?.id}
                        style={{
                            display: ' flex',
                            flexDirection: 'column',
                        }}>
                        <p
                            style={{
                                margin: 0,
                                textAlign: 'center',
                                fontWeight: 700,
                                fontSize: '10px',
                                lineHeight: '14px',
                                color: '#677580',
                            }}>
                            {value?.status}
                        </p>
                        <div
                            className="indicator"
                            style={{
                                background: value?.color,
                            }}
                            key={value.id}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
