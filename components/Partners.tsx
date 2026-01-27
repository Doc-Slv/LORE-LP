import React from 'react';

export const Partners: React.FC = () => {
    return (
        <section id="partners" className="bg-lore-surface border-y border-white/5 py-12 relative overflow-hidden">
            <div className="container mx-auto px-0 md:px-6 relative">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16 opacity-80 text-center reveal">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-lore-muted mb-4 xl:mb-0 shrink-0 px-4">Compatible & Intégré :</p>

                    <div className="relative flex overflow-hidden w-full mask-linear-fade">
                        <div className="flex items-center gap-16 md:gap-24 animate-marquee whitespace-nowrap min-w-full px-4">
                            {/* Original Set */}
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tighter hover:text-lore-gold transition-colors cursor-default">airbnb</span>
                            <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide hover:text-lore-gold transition-colors cursor-default">Booking.com</span>
                            <span className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-widest hover:text-lore-gold transition-colors cursor-default">SONOS</span>
                            <span className="font-sans font-medium text-xl md:text-2xl text-white hover:text-lore-gold transition-colors cursor-default">PHILIPS <strong className="font-bold">HUE</strong></span>
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight hover:text-lore-gold transition-colors cursor-default">Nuki</span>

                            {/* Duplicated Set for Smooth Loop */}
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tighter hover:text-lore-gold transition-colors cursor-default">airbnb</span>
                            <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide hover:text-lore-gold transition-colors cursor-default">Booking.com</span>
                            <span className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-widest hover:text-lore-gold transition-colors cursor-default">SONOS</span>
                            <span className="font-sans font-medium text-xl md:text-2xl text-white hover:text-lore-gold transition-colors cursor-default">PHILIPS <strong className="font-bold">HUE</strong></span>
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight hover:text-lore-gold transition-colors cursor-default">Nuki</span>

                            {/* Triplicated Set for Wide Screens */}
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tighter hover:text-lore-gold transition-colors cursor-default hidden xl:inline">airbnb</span>
                            <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide hover:text-lore-gold transition-colors cursor-default hidden xl:inline">Booking.com</span>
                            <span className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-widest hover:text-lore-gold transition-colors cursor-default hidden xl:inline">SONOS</span>
                            <span className="font-sans font-medium text-xl md:text-2xl text-white hover:text-lore-gold transition-colors cursor-default hidden xl:inline">PHILIPS <strong className="font-bold">HUE</strong></span>
                            <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight hover:text-lore-gold transition-colors cursor-default hidden xl:inline">Nuki</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
