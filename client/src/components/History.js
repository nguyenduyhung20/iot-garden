import React from "react";
import DataDisplay from "./DataDisplay";
const History = ({gardenId}) => {
    return (
        <div>
            <DataDisplay gardenId={gardenId}/>
        </div>
    );
};

export default History;
