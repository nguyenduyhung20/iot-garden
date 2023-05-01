import React from "react";
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const slideInTransition = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
}

export default function AnimatedTabPanel({ children, keyName }) {
    return (
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
};

