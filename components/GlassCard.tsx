
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, backdropFilter: 'blur(0px)' }}
            whileInView={{ opacity: 1, y: 0, backdropFilter: 'blur(12px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`
                bg-black/20 
                border border-white/5 
                rounded-sm 
                p-6 
                relative 
                overflow-hidden 
                group
                ${hoverEffect ? 'hover:bg-black/30 hover:border-lore-gold/30 transition-colors duration-500' : ''}
                ${className}
            `}
        >
            {/* Inner Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-lore-gold/50 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-lore-gold/50 transition-colors duration-500"></div>
        </motion.div>
    );
};
