import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';
import ProfileOverview from './ProfileOverview';
import ProfileSiteSetting from './ProfileSiteSetting'
import AnimatedTabPanel from './AnimatedTabPanel';
import CustomTabHeader from './CustomTabHeader';


const Profile = React.memo(function () {

    // This is for testing
    // const [user, setUser] = useState({
    //     user_Username: 'user',
    //     user_Name: 'John Doe',
    //     user_Email: 'john.doe@example.com',
    //     user_Phone: '123-456-7890',
    //     user_Address: '123 Main St, Anytown, USA',
    //     user_Role: 'user',
    //     notifications: true,
    //     siteTheme: 'light',
    // });

    const [user, setUser] = useState(null);

    const userId = parseInt(localStorage.getItem('userId'));

    const userDetails = [
        { label: 'Name', value: 'user_Name' },
        { label: 'Username', value: 'user_Username' },
        { label: 'Role', value: 'user_Role' },
        { label: 'Address', value: 'user_Address' },
        { label: 'Email', value: 'user_Email' },
        { label: 'Phone', value: 'user_Phone' },
    ];

    useEffect(() => {
        // Fetch user when component mount
        if (!isNaN(userId) && user === null) {
            axios.get(`/api/v1/users/${userId}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(console.log);
        }
    }, [userId, user]);


    return (
        <div className="w-full m-5 max-w-4xl mx-auto">
            <Tab.Group>
                <Tab.List className="flex p-1 my-5 space-x-1 bg-blue-200 bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-md">
                    <CustomTabHeader>Overview</CustomTabHeader>
                    <CustomTabHeader>Details</CustomTabHeader>
                    <CustomTabHeader>Site Settings</CustomTabHeader>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <AnimatedTabPanel keyName="overview">
                        <ProfileOverview userDetails={userDetails} user={user} />
                    </AnimatedTabPanel>

                    <AnimatedTabPanel keyName="details">
                        <ProfileDetails userDetails={userDetails} user={user} setUser={setUser} />
                    </AnimatedTabPanel>

                    <AnimatedTabPanel keyName="settings">
                        <ProfileSiteSetting user={user} />
                    </AnimatedTabPanel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
});

export default Profile;