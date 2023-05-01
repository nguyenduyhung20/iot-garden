import React, { useState, useEffect } from "react";
import { Tab } from '@headlessui/react';
import AnimatedTabPanel from "./AnimatedTabPanel";
import CustomTabHeader from "./CustomTabHeader";
import axios from "axios";
import GardenOverview from "./GardenOverview";

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

    useEffect(() => {
        if (!isNaN(userId) && garden === null) {
            axios.get(`/api/v1/gardens/${userId}`)
                .then(response => {
                    console.log('====================================');
                    console.log('This is garden response data: ', response.data);
                    console.log('====================================');
                    setGarden(response.data);
                })
                .catch(console.log);
        }
    }, [userId, garden]);

    return (
        <>
            <div className="w-full m-5 max-w-4xl mx-auto">
                <Tab.Group>
                    <Tab.List className="flex bg-blue-200 bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-md">
                        <CustomTabHeader> Overview </CustomTabHeader>
                        <CustomTabHeader> Edit Garden</CustomTabHeader>
                    </Tab.List>
                    <Tab.Panels className={"mt-2"}>
                        <AnimatedTabPanel>
                            <GardenOverview gardenDetails={gardenDetails} garden={garden}/>
                        </AnimatedTabPanel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
}

export default Garden;