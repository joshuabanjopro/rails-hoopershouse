import React from "react";
import HooperCard from "./HooperCard";

const HooperList = ({hoopers}) => {
    
    const hooperElements = hoopers.map((hooper) => {
        return (
            <HooperCard key={hooper.id} player={hooper} />
        )
    })
    
    return (
        <div>
            {hooperElements}
        </div>
    );

};

export default HooperList;