import React, { useState, useEffect } from "react";
import { Tab } from '@headlessui/react';
import AnimatedTabPanel from "./AnimatedTabPanel";
import CustomTabHeader from "./CustomTabHeader";

const Garden = function () {
    const [garden, setGarden] = useState(null);

    const userId = parseInt(localStorage.getItem('userId'));

    const gardenDetails = [
        { label: 'Location', value: 'garden_Location' },
        { label: 'Status', value: 'garden_Status' },
        { label: 'Name', value: 'garden_Name' },
        { label: 'Description', value: 'garden_Description' },
        { label: 'Area', value: 'garden_Area' },
        { label: 'Image', value: 'garden_Image' },
    ]

    return (
        <>
            <div className="w-full m-5 max-w-4xl mx-auto">
                <Tab.Group>
                    <Tab.List className="flex bg-blue-200 bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-md">
                        <CustomTabHeader> Overview </CustomTabHeader>
                        <CustomTabHeader> Edit Garden</CustomTabHeader>
                    </Tab.List>
                    <Tab.Panels className={"mt-2"}>
                        <AnimatedTabPanel> OI </AnimatedTabPanel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
}

export default Garden;