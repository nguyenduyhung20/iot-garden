import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';
import ProfileOverview from './ProfileOverview';
import ProfileSiteSetting from './ProfileSiteSetting'

const slideInTransition = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

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
        // { label: 'User ID', value: 'user_ID' },
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
                    console.log('====================================');
                    console.log('This is response data: ', response.data);
                    console.log('====================================');
                    setUser(response.data);
                })
                .catch(console.log);
        }

    }, [userId, user])

    const CustomTab = ({ children }) => (
        <Tab className="w-full py-2.5 text-center text-white rounded-lg focus:outline-none transition-colors duration-200">
            {({ selected }) => (
                <div className={`px-4 py-2 rounded ${selected ? 'bg-blue-500 text-white shadow' : 'text-gray-700 hover:bg-blue-300 hover:text-white'}`}>
                    {children}
                </div>
            )}
        </Tab>
    );

    const AnimatedTabPanel = ({ children, keyName }) => (
        <Tab.Panel className="p-5 border-2 border-blue-200 rounded-lg shadow-lg bg-white overflow-hidden ">
            <AnimatePresence mode="wait">
                <motion.div
                    key={keyName}
                    variants={slideInTransition}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </Tab.Panel>
    );

    return (
        <div className="w-full m-5 max-w-4xl mx-auto">
            <Tab.Group>
                <Tab.List className="flex p-1 my-5 space-x-1 bg-blue-200 bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-md">
                    <CustomTab>Overview</CustomTab>
                    <CustomTab>Details</CustomTab>
                    <CustomTab>Site Settings</CustomTab>
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