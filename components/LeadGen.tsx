import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const LeadGen: React.FC = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-lore-main relative overflow-hidden">
            {/* Holographic Grid & Scan Background */}
            <div className="absolute inset-0 bg-lore-main z-0"></div>
            <div className="absolute inset-0 bg-grid-pattern z-0 animate-grid-pulse"></div>
            {/* Beam removed as requested, focusing scan only on card */}

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
                <SectionTitle
                    title="Rejoindre le Réseau"
                    subtitle="Votre bien mérite une histoire. Transformez-le en destination."
                />

                <div className="mt-12 md:mt-20 relative group cursor-pointer">
                    <Link to="/deploy" className="block p-1 bg-gradient-to-r from-lore-gold/0 via-lore-gold/30 to-lore-gold/0 hover:via-lore-gold/60 transition-all duration-500 rounded-xl">
                        <div className="bg-lore-surface/80 backdrop-blur-xl border border-lore-gold/10 p-12 md:p-20 rounded-lg relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">

                            {/* Inner Glow & Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lore-gold/5 via-transparent to-lore-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>

                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-lore-gold/30 shadow-[0_0_10px_rgba(229,193,93,0.5)] opacity-0 group-hover:opacity-100 animate-scan"></div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 flex flex-col items-center gap-6"
                            >
                                <div className="w-16 h-16 rounded-full bg-lore-gold/10 flex items-center justify-center text-lore-gold mb-2 border border-lore-gold/20 group-hover:border-lore-gold/50 group-hover:shadow-[0_0_30px_rgba(229,193,93,0.2)] transition-all">
                                    <Sparkles size={32} className="group-hover:animate-spin-slow" />
                                </div>

                                <h3 className="text-3xl md:text-5xl font-serif text-white group-hover:text-lore-gold transition-colors duration-300 relative">
                                    <span className="relative inline-block group-hover:animate-glitch">Initier le Protocole</span>
                                </h3>

                                <p className="text-lore-muted max-w-lg text-lg font-light leading-relaxed group-hover:text-lore-light transition-colors">
                                    Lancez la simulation pour découvrir quel univers LORE s'adapterait le mieux à votre espace.
                                </p>

                                <div className="mt-8 flex items-center gap-3 px-8 py-4 bg-lore-gold text-lore-main font-bold tracking-widest uppercase text-sm md:text-base hover:bg-white transition-all transform group-hover:translate-y-[-2px] shadow-lg relative overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Lancer l'expérience <ArrowRight size={18} />
                                    </span>
                                    {/* Button Shine Effect */}
                                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-shine"></div>
                                </div>
                            </motion.div>
                        </div>
                    </Link>
                </div>

                <p className="mt-8 text-xs text-lore-muted/40 font-mono tracking-widest uppercase">
                    Secure Connection // Encryption Enabled
                </p>
            </div>
        </section>
    );
};
