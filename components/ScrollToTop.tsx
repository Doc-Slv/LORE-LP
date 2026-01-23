import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 500);
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 bg-lore-gold/10 backdrop-blur-md border border-lore-gold/40 text-lore-gold p-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-lore-gold hover:text-lore-main transition-colors duration-300 group"
                >
                    <ArrowUp size={20} className="group-hover:text-lore-main" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
