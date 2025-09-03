import React from "react";
import GenericHooper from "../assets/transparent_generic_hooper.png"

const HooperCard = ({player}) => {

    return (
        <div className="hooper-card">
            <div className="main-image-container">
                <img className="main-image" src={GenericHooper} alt="" />
            </div>
            <div className="main-info-container">
                <h2 className="hooper-title">{player.name}</h2>
                <p>{player.position}</p>
                <p>{player.team}</p>
                <p>{player.career_ppg}</p>
            </div>
        </div>
    );

};

export default HooperCard;