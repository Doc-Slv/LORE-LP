
import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing (approx. easeOutQuart)
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: 'blur(10px)',
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="width-full"
        >
            {children}
        </motion.div>
    );
};
