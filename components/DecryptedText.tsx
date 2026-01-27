import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptedTextProps {
    text: string;
    className?: string;
    revealDelay?: number;
    speed?: number;
    maxIterations?: number;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
    text,
    className = "",
    revealDelay = 0,
    speed = 50,
    maxIterations = 10
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    useEffect(() => {
        if (isInView) {
            // Start scrambling after delay
            const timeout = setTimeout(() => {
                setIsScrambling(true);
            }, revealDelay);
            return () => clearTimeout(timeout);
        }
    }, [isInView, revealDelay]);

    useEffect(() => {
        if (!isScrambling) return;

        let iteration = 0;

        const interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / (maxIterations / text.length);
        }, speed);

        return () => clearInterval(interval);
    }, [isScrambling, text, maxIterations, speed]);

    return (
        <span ref={ref} className={className}>
            {isInView ? displayText : text} {/* Show full text initially for SEO/SSR, then glitch it */}
        </span>
    );
};
