import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const DustParticles: React.FC = () => {
    const particleCount = 25;
    const [particles, setParticles] = useState<number[]>([]);

    useEffect(() => {
        setParticles(Array.from({ length: particleCount }, (_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 mix-blend-screen">
            {particles.map((i) => (
                <Particle key={i} index={i} />
            ))}
        </div>
    );
};

const Particle: React.FC<{ index: number }> = ({ index }) => {
    // Random initial positions and animation properties
    const randomX = Math.random() * 100; // %
    const randomDelay = Math.random() * 5; // s
    const randomDuration = 3 + Math.random() * 4; // s
    const size = 1 + Math.random() * 3; // px

    return (
        <motion.div
            className="absolute bg-white/40 rounded-full blur-[1px]"
            style={{
                width: size,
                height: size,
                left: `${randomX}%`,
                top: '100%',
            }}
            animate={{
                y: [0, -window.innerHeight * 0.4], // Move up
                x: [0, (Math.random() - 0.5) * 50], // Drift left/right
                opacity: [0, 0.8, 0], // Fade in/out
                scale: [1, 1.5, 0.5], // Pulse size
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeOut",
            }}
        />
    );
};
