import React from "react";

const GardenOverview = React.memo (function ({ gardenDetails, garden }) {
    return (
        <>
            <div className="backdrop-filter bg-opacity-30 bg-blue-200 text-gray-800 p-3 font-semibold flex justify-between items-center rounded-lg shadow-lg border border-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-white">
                <span className="text-2xl tracking-tight font-extrabold">Overview</span>
                <span className="text-xs text-blue-700 bg-blue-100 p-1 rounded-full">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
            <div className="p-5 space-y-4 text-gray-700">
                {garden !== null && gardenDetails.map((detail) => (
                    <p key={detail.value} className="flex items-center space-x-2">
                        <span className="font-semibold text-grey-900 text-lg">{detail.label}:</span>
                        <span className="text-base">{garden[detail.value]}</span>
                    </p>
                ))}
            </div>
        </>
    );
});

export default GardenOverview;