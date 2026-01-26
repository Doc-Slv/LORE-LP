import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface TunnelLayoutProps {
    children: React.ReactNode;
    currentStep: number;
    totalSteps: number;
}

export const TunnelLayout: React.FC<TunnelLayoutProps> = ({ children, currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="min-h-screen bg-lore-main text-lore-light relative overflow-hidden flex flex-col">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lore-gold to-transparent opacity-20" />
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            </div>

            {/* Header / HUD */}
            <header className="relative z-10 p-6 flex justify-between items-center border-b border-lore-gold/10 backdrop-blur-sm">
                <Link to="/" className="flex items-center gap-2 text-lore-gold/80 hover:text-lore-gold transition-colors font-serif tracking-widest text-sm">
                    <ChevronLeft size={16} />
                    ANNULER PROTOCOLE
                </Link>
                <div className="font-mono text-xs text-lore-muted tracking-[0.2em]">
                    CONNEXION SÉCURISÉE // CHIFFRÉE
                </div>
            </header>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-lore-surface relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-lore-gold shadow-[0_0_10px_rgba(229,193,93,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                />
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
                <div className="w-full max-w-2xl">
                    {children}
                </div>
            </main>

            {/* Footer Status */}
            <footer className="p-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lore-gold/5 border border-lore-gold/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-lore-gold/60 font-mono">
                        Système Actif • Noeud {currentStep}/{totalSteps}
                    </span>
                </div>
            </footer>
        </div>
    );
};
