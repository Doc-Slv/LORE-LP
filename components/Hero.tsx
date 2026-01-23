import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GoldButton } from './GoldButton';

export const Hero: React.FC = () => {
    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the spotlight
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax for text (opposing movement)
    const textX = useTransform(springX, [0, window.innerWidth], [20, -20]);
    const textY = useTransform(springY, [0, window.innerHeight], [20, -20]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        // Center spotlight initially
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        },
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">

            {/* 1. Base Dark Layer (The Mystery) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero_secret.png"
                    alt="Bureau Secret LORE - Dark"
                    className="w-full h-full object-cover object-center filter grayscale brightness-[0.25] contrast-125 scale-105"
                />
            </div>

            {/* 2. Spotlight Layer (The Potential) */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    maskImage: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(circle 350px at ${x}px ${y}px, black 10%, transparent 90%)`
                    ),
                    WebkitMaskImage: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(circle 350px at ${x}px ${y}px, black 10%, transparent 90%)`
                    ),
                }}
            >
                <img
                    src="/assets/hero_secret.png"
                    alt="Bureau Secret LORE - Light"
                    className="w-full h-full object-cover object-center filter brightness-110 saturate-125 scale-105"
                />
                <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay"></div>
            </motion.div>

            {/* 3. Text & Content Content (Floating above) */}
            <motion.div
                className="container mx-auto px-4 sm:px-6 z-20 flex flex-col items-center justify-center relative mt-0 pointer-events-auto"
                style={{ x: textX, y: textY }}
            >

                {/* Subtle top decoration */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 96, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="w-[1px] bg-gradient-to-b from-transparent via-lore-gold/60 to-transparent mb-8 md:mb-10 drop-shadow-[0_0_10px_rgba(229,193,93,0.8)]"
                ></motion.div>

                {/* Main Text Content */}
                <motion.div
                    className="text-center max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="font-serif text-white mb-8 tracking-tight">
                        <span className="block text-4xl sm:text-5xl md:text-7xl font-normal leading-tight drop-shadow-2xl">
                            RÉVÉLEZ<br /> LE POTENTIEL
                        </span>
                    </motion.h1>

                    {/* Elegant Separator with Text */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 md:gap-6 mb-10 w-full">
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-lore-gold/80 shadow-[0_0_10px_rgba(229,193,93,0.5)]"></div>
                        <span className="font-sans text-[0.6rem] sm:text-xs md:text-sm text-lore-gold uppercase tracking-[0.3em] font-medium whitespace-nowrap px-2 drop-shadow-md">
                            Architecture du Secret
                        </span>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-lore-gold/80 shadow-[0_0_10px_rgba(229,193,93,0.5)]"></div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="font-sans text-lore-light/90 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 px-4 drop-shadow-lg">
                        Ne louez plus seulement des murs. <span className="text-white font-medium border-b border-lore-gold/30 pb-0.5">Vendez une aventure.</span><br className="hidden sm:block" />
                        LORE transforme vos appartements en destinations immersives.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/univers" className="w-full sm:w-auto">
                            <GoldButton size="large" className="w-full sm:min-w-[220px] shadow-[0_10px_30px_-5px_rgba(229,193,93,0.3)]">Explorer les Univers</GoldButton>
                        </Link>
                        <GoldButton
                            variant="outline"
                            size="large"
                            className="w-full sm:w-auto sm:min-w-[220px] backdrop-blur-sm bg-black/20 border-lore-gold/50"
                            onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            L'Impact Financier
                        </GoldButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-30"
                onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[0.5rem] uppercase tracking-[0.3em] text-lore-muted/70 group-hover:text-lore-gold transition-colors duration-300">Découvrir</span>
                <ChevronDown size={20} className="text-lore-muted/70 group-hover:text-lore-gold animate-bounce transition-colors duration-300" />
            </motion.div>
        </section>
    );
};
