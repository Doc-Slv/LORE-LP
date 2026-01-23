import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export const Impact: React.FC = () => {
    return (
        <section id="impact" className="py-16 md:py-32 bg-lore-main relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-lore-gold/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    <div className="lg:w-1/2 reveal">
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-tight text-center lg:text-left">
                            L'Économie de <br />
                            <span className="text-lore-gold italic">l'Expérience.</span>
                        </h2>
                        <p className="text-white text-base md:text-lg font-light leading-relaxed mb-8 text-center lg:text-left">
                            Dans un marché saturé d'appartements standardisés, l'émotion est la seule valeur refuge.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-lore-gold">
                            <span className="flex items-center gap-2"><ArrowRight size={14} /> Viralité Instagram</span>
                            <span className="flex items-center gap-2"><ArrowRight size={14} /> Avis 5 Étoiles</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0 reveal delay-200">
                        <div className="glass-panel p-6 md:p-8 border-l-2 border-lore-gold transition-transform duration-500 hover:scale-[1.02]">
                            <p className="font-serif text-lg md:text-xl text-white italic mb-4 text-center lg:text-left">"J'ai réservé cet appartement uniquement pour l'énigme du secrétaire. C'était magique."</p>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                                <span className="text-lore-muted text-xs uppercase tracking-wider">Julien M. - Airbnb Superguest</span>
                                <div className="flex text-lore-gold gap-1"><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
