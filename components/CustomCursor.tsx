
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Smooth mouse movement
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovering ? 1.2 : 1,
                rotate: isHovering ? 45 : 0,
            }}
            transition={{ duration: 0.2 }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-lore-gold drop-shadow-[0_0_8px_rgba(229,193,93,0.5)]"
            >
                <path
                    d="M14.5 10.5L19.5 15.5M19.5 15.5L22 13L21 12M19.5 15.5L20 18M9.5 15.5C11.7091 15.5 13.5 13.7091 13.5 11.5C13.5 9.29086 11.7091 7.5 9.5 7.5C7.29086 7.5 5.5 9.29086 5.5 11.5C5.5 13.7091 7.29086 15.5 9.5 15.5ZM9.5 15.5L2 23"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9.5" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        </motion.div>
    );
};
