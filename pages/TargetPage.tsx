import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GoldButton } from '../components/GoldButton';
import { Link } from 'react-router-dom';
import { Briefcase, Key, Building2, Check, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const TargetPage: React.FC = () => {
    const [activeProfile, setActiveProfile] = useState<'investor' | 'concierge' | 'hotel'>('investor');

    const profiles = {
        investor: {
            title: "L'Investisseur",
            subtitle: "Rendement & Patrimoine",
            description: "Vous cherchez à maximiser le cash-flow de votre bien immobilier sans vous créer un second emploi. Vous voulez un actif liquide, performant et qui prend de la valeur.",
            stats: [
                { label: "Surperformance / Nuitée", value: "+30%", icon: <TrendingUp size={16} /> },
                { label: "Taux d'occupation", value: "92%", icon: <Users size={16} /> },
                { label: "Temps de gestion", value: "0h", icon: <Clock size={16} /> },
            ],
            benefits: [
                "Positionnement Ultra-Premium immédiat",
                "Viralité organique (Instagram/TikTok)",
                "Fidélisation (les clients reviennent pour la suite de l'histoire)"
            ]
        },
        concierge: {
            title: "La Conciergerie",
            subtitle: "Opérations & Image",
            description: "Vous gérez des dizaines de lots. Votre défi est la standardisation de la qualité et la réduction des frictions opérationnelles. LORE est votre atout différenciant.",
            stats: [
                { label: "Ticket d'entrée", value: "x2", icon: <TrendingUp size={16} /> },
                { label: "Satisfaction Client", value: "4.9/5", icon: <Users size={16} /> },
                { label: "Maintenance", value: "-40%", icon: <Clock size={16} /> },
            ],
            benefits: [
                "Reset automatique de l'appartement en 1 clic",
                "Maintenance prédictive des équipements",
                "Justification d'honoraires plus élevés"
            ]
        },
        hotel: {
            title: "L'Hôtelier",
            subtitle: "Marque & Expérience",
            description: "Vous voulez transformer une chambre standard en Suite Signature. Créer une offre 'Nuit Insolite' au sein de votre établissement pour attirer une nouvelle clientèle locale.",
            stats: [
                { label: "RevPAR", value: "+45%", icon: <TrendingUp size={16} /> },
                { label: "Direct Booking", value: "+20%", icon: <Users size={16} /> },
                { label: "Presse / Média", value: "Oui", icon: <Clock size={16} /> },
            ],
            benefits: [
                "Intégration au PMS existant",
                "Scénarios personnalisés à l'histoire de l'hôtel",
                "Vente additionnelle (Champagne, indices payants...)"
            ]
        }
    };

    return (
        <div className="bg-lore-main min-h-screen text-white pt-32 pb-24 selection:bg-lore-gold selection:text-lore-main relative overflow-hidden">
            {/* Radar Background Effect */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lore-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="fixed inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block border border-white/10 px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] text-lore-muted uppercase mb-6"
                    >
                        Profilage & Analyse
                    </motion.div>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Quel est votre <span className="text-lore-gold">Objectif</span> ?</h1>
                    <p className="font-sans text-lore-muted text-lg font-light max-w-2xl mx-auto">
                        LORE s'adapte à votre stratégie. Sélectionnez votre profil pour voir l'impact projeté.
                    </p>
                </div>

                {/* PROFILE SELECTOR TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveProfile('investor')}
                        className={`px-8 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'investor' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <Briefcase size={16} /> Investisseur
                    </button>
                    <button
                        onClick={() => setActiveProfile('concierge')}
                        className={`px-8 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'concierge' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <Key size={16} /> Conciergerie
                    </button>
                    <button
                        onClick={() => setActiveProfile('hotel')}
                        className={`px-8 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'hotel' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <Building2 size={16} /> Hôtelier
                    </button>
                </div>

                {/* DYNAMIC CONTENT AREA */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProfile}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                        >
                            {/* Left: Text & Benefits */}
                            <div>
                                <h2 className="font-serif text-3xl md:text-5xl text-white mb-2">{profiles[activeProfile].title}</h2>
                                <h3 className="font-sans text-lore-gold uppercase tracking-widest text-sm font-bold mb-8">{profiles[activeProfile].subtitle}</h3>
                                <p className="text-lore-muted text-lg font-light leading-relaxed mb-10 border-l-2 border-lore-gold/30 pl-6">
                                    {profiles[activeProfile].description}
                                </p>

                                <div className="space-y-4">
                                    {profiles[activeProfile].benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-lore-gold/30 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-lore-gold/10 flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-lore-gold" />
                                            </div>
                                            <span className="text-white/90 font-light">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <Link to="/deploy">
                                        <GoldButton variant="outline" className="w-full md:w-auto">
                                            Simulation pour {profiles[activeProfile].title} <ArrowRight size={18} className="ml-2 inline" />
                                        </GoldButton>
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Data Visualization Card */}
                            <TiltCard className="h-full">
                                <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-sm h-full">
                                    <div className="bg-lore-secondary h-full p-8 md:p-12 flex flex-col justify-between rounded-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            {activeProfile === 'investor' && <Briefcase size={120} />}
                                            {activeProfile === 'concierge' && <Key size={120} />}
                                            {activeProfile === 'hotel' && <Building2 size={120} />}
                                        </div>

                                        <div className="space-y-8 relative z-10">
                                            {profiles[activeProfile].stats.map((stat, i) => (
                                                <div key={i} className="group">
                                                    <div className="flex justify-between items-end mb-2 text-lore-muted text-sm uppercase tracking-wider">
                                                        <span className="flex items-center gap-2">{stat.icon} {stat.label}</span>
                                                    </div>
                                                    <div className="flex items-end gap-4 p-4 bg-lore-main/50 border border-white/5 rounded-sm group-hover:border-lore-gold/50 transition-colors">
                                                        <span className="text-4xl md:text-5xl font-serif text-white font-bold">{stat.value}</span>
                                                        <div className="h-1 flex-1 bg-white/10 rounded-full mb-3 overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: "circOut" }}
                                                                className="h-full bg-lore-gold"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                            <p className="text-xs text-lore-muted uppercase tracking-widest mb-2">ROI Moyen constaté</p>
                                            <p className="text-lore-gold font-serif italic text-xl">"Un investissement rentabilisé en moins de 18 mois."</p>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
