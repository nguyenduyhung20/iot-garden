import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const slideInTransition = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

const Profile = React.memo(function () {
    const [user, setUser] = useState({
        user_Username: 'user',
        user_Name: 'John Doe',
        user_Email: 'john.doe@example.com',
        user_Phone: '123-456-7890',
        user_Address: '123 Main St, Anytown, USA',
        user_Role: 'user',
        notifications: true,
        siteTheme: 'light',
    });

    const userDetails = [
        // { label: 'User ID', value: 'user_ID' },
        { label: 'Name', value: 'user_Name' },
        { label: 'Username', value: 'user_Username' },
        { label: 'Role', value: 'user_Role' },
        { label: 'Address', value: 'user_Address' },
        { label: 'Email', value: 'user_Email' },
        { label: 'Phone', value: 'user_Phone' },
    ];

    const updateUserInfo = (key, value) => {
        setUser({ ...user, [key]: value });
    };

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
                        <div className="backdrop-filter  bg-opacity-30 bg-blue-200 text-gray-800 p-3 font-semibold flex justify-between items-center rounded-lg shadow-lg border border-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-white">
                            <span className="text-2xl tracking-tight font-extrabold">Overview</span>
                            <span className="text-xs text-blue-700 bg-blue-100 p-1 rounded-full">Last updated: {new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="p-5 space-y-4 text-gray-700">
                            {userDetails.map((detail) => (
                                <p key={detail.value} className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-900 text-lg">{detail.label}:</span>
                                    <span className="text-base">{user[detail.value]}</span>
                                </p>
                            ))}
                        </div>
                    </AnimatedTabPanel>

                    <AnimatedTabPanel keyName="details">
                        <div className="space-y-4">
                            {userDetails.map((detail) => (
                                <div key={detail.value}>
                                    <label htmlFor={detail.value} className="block font-semibold text-gray-900 text-lg mb-1">
                                        {detail.label}
                                    </label>
                                    <input
                                        type="text"
                                        id={detail.value}
                                        placeholder={detail.label}
                                        value={user[detail.value]}
                                        onChange={(e) => updateUserInfo(detail.value, e.target.value)}
                                        className="w-full p-2 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                    />
                                </div>
                            ))}
                        </div>
                    </AnimatedTabPanel>

                    <AnimatedTabPanel keyName="settings">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <label htmlFor="notifications" className="font-semibold text-gray-900 text-lg">
                                    Notifications:
                                </label>
                                <input
                                    type="checkbox"
                                    id="notifications"
                                    checked={user.notifications}
                                    onChange={(e) => updateUserInfo('notifications', e.target.checked)}
                                    className="rounded focus:ring-blue-500 focus:outline-none transition-colors duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="siteTheme" className="block font-semibold text-gray-900 text-lg mb-1">
                                    Site Theme:
                                </label>
                                <select
                                    id="siteTheme"
                                    value={user.siteTheme}
                                    onChange={(e) => updateUserInfo('siteTheme', e.target.value)}
                                    className="p-2 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full md:w-auto"
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                        </div>
                    </AnimatedTabPanel>


                </Tab.Panels>
            </Tab.Group>
        </div>
    );
});

export default Profile;