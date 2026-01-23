import React from 'react';

export const Partners: React.FC = () => {
    return (
        <section id="partners" className="bg-lore-surface border-y border-white/5 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16 opacity-60 text-center reveal">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-lore-muted mb-4 xl:mb-0 shrink-0">Compatible & Intégré :</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tighter hover:text-lore-gold transition-colors cursor-default reveal delay-100">airbnb</span>
                        <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide hover:text-lore-gold transition-colors cursor-default reveal delay-200">Booking.com</span>
                        <span className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-widest hover:text-lore-gold transition-colors cursor-default reveal delay-300">SONOS</span>
                        <span className="font-sans font-medium text-xl md:text-2xl text-white hover:text-lore-gold transition-colors cursor-default whitespace-nowrap reveal delay-400">PHILIPS <strong className="font-bold">HUE</strong></span>
                        <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight hover:text-lore-gold transition-colors cursor-default reveal delay-500">Nuki</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
