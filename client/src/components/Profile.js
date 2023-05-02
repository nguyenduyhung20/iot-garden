import React, { useState, useEffect, useRef } from 'react';
import { Tab } from '@headlessui/react';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';
import ProfileOverview from './ProfileOverview';
import ProfileSiteSetting from './ProfileSiteSetting'
import AnimatedTabPanel from './AnimatedTabPanel';
import CustomTabHeader from './CustomTabHeader';

console.log('====================================');
console.log('Loaded once');
console.log('====================================');



const Profile = React.memo(function () {
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

    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            // Fetch user when component mount
            console.log('This is condition to fetch: ', !isNaN(userId), user === null);
            if (!isNaN(userId) && user === null) {
                axios.get(`/api/v1/users/${userId}`)
                    .then(response => {
                        console.log('====================================');
                        console.log('This is user response data: ', response.data);
                        console.log('====================================');
                        setUser(response.data);
                    })
                    .catch(console.log);
            }
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