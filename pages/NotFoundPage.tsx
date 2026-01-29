import React from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const NotFoundPage = () => {
    return (
        <div className="bg-lore-main min-h-screen flex items-center justify-center relative overflow-hidden text-center px-6">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>

            <div className="relative z-10 max-w-2xl">
                <h1 className="text-[8rem] md:text-[12rem] font-serif font-bold text-lore-gold/10 leading-none select-none">404</h1>
                <div className="-mt-12 md:-mt-20">
                    <SectionTitle title="Signal Perdu" subtitle="Cette fréquence n'existe pas dans notre univers." />
                </div>

                <p className="text-lore-muted mt-8 mb-12 max-w-md mx-auto">
                    La page que vous cherchez a peut-être été décryptée ou déplacée vers une autre dimension.
                </p>

                <a href="/" className="inline-block px-8 py-4 bg-lore-surface border border-lore-gold/30 hover:border-lore-gold hover:bg-lore-gold/10 transition-all duration-300 text-lore-gold uppercase tracking-widest text-xs font-bold rounded-sm">
                    Retour Initialisation
                </a>
            </div>
        </div>
    );
};
