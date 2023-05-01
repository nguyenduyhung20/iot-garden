import React from "react";
import { Tab } from '@headlessui/react';

export default function CustomTabHeader({ children }) {
    return (
        <Tab className="w-full m-3 text-center text-white rounded-lg focus:outline-none transition-colors duration-200">
            {({ selected }) => (
                <div className={`px-4 py-2 rounded ${selected ? 'bg-blue-500 text-white shadow' : 'text-gray-700 hover:bg-blue-300 hover:text-white'}`}>
                    {children}
                </div>
            )}
        </Tab>
    );
};