import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { TiltCard } from './TiltCard';
import { TrendingUp, Users, Target, BarChart3, CheckCircle2, Share2, Heart, Award } from 'lucide-react';

export const MetricsSection: React.FC = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-lore-main relative overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] border border-lore-gold/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-[10%] left-[5%] w-[280px] h-[280px] border border-lore-gold/10 rounded-full border-dashed animate-reverse-spin"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Analyse de la Valeur"
                    subtitle="Des données réelles pour valider le modèle économique avant lancement."
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-7xl mx-auto"
                >
                    {/* 1. SMOKE TEST */}
                    <motion.div variants={item} className="h-full">
                        <TiltCard className="h-full">
                            <div className="h-full bg-lore-surface/50 border border-white/5 p-8 rounded-sm relative overflow-hidden group hover:border-lore-gold/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Target size={100} />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-lore-gold/10 flex items-center justify-center text-lore-gold">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white">Traction & Demande</h3>
                                        <p className="text-xs text-lore-muted uppercase tracking-widest">Performance 'Smoke Test'</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                        <div className="text-3xl font-bold text-white mb-1">11.2%</div>
                                        <div className="text-xs text-lore-muted uppercase">Taux de Conversion (Lead)</div>
                                        <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full bg-lore-gold w-[80%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                        <div className="text-3xl font-bold text-white mb-1">2.6%</div>
                                        <div className="text-xs text-lore-muted uppercase">CTR Moyen (Ads)</div>
                                        <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full bg-lore-gold w-[60%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between items-center bg-lore-main/50 p-4 rounded-sm border border-white/5">
                                    <span className="text-lore-muted text-sm">Coût par Lead (CPL)</span>
                                    <span className="text-lore-gold font-bold font-mono text-xl">3.03 €</span>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* 2. ACQUISITION */}
                    <motion.div variants={item} className="h-full">
                        <TiltCard className="h-full">
                            <div className="h-full bg-lore-surface/50 border border-white/5 p-8 rounded-sm relative overflow-hidden group hover:border-lore-gold/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <BarChart3 size={100} />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-lore-gold/10 flex items-center justify-center text-lore-gold">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white">Efficacité Marketing</h3>
                                        <p className="text-xs text-lore-muted uppercase tracking-widest">CAC & LTV</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 border-b border-white/5">
                                        <span className="text-lore-muted">Coût d'Acquisition (CAC)</span>
                                        <span className="text-white font-mono">42.80 €</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 border-b border-white/5">
                                        <span className="text-lore-muted">Lifetime Value (LTV)</span>
                                        <span className="text-white font-mono">{'>'} 5 000 €</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-lore-gold/10 border border-lore-gold/20 rounded-sm mt-4">
                                        <span className="text-lore-gold text-sm font-bold uppercase tracking-wider">Ratio LTV/CAC</span>
                                        <span className="text-lore-gold font-bold text-2xl">{'>'} 3.0</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* 3. SOCIAL PROOF */}
                    <motion.div variants={item} className="h-full">
                        <TiltCard className="h-full">
                            <div className="h-full bg-lore-surface/50 border border-white/5 p-8 rounded-sm relative overflow-hidden group hover:border-lore-gold/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Heart size={100} />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-lore-gold/10 flex items-center justify-center text-lore-gold">
                                        <Share2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white">Viralité & Désirabilité</h3>
                                        <p className="text-xs text-lore-muted uppercase tracking-widest">Impact Émotionnel</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1 text-center p-4 bg-white/5 rounded-sm">
                                        <div className="text-3xl font-bold text-white">{'>'} 50</div>
                                        <div className="text-[10px] text-lore-muted uppercase mt-1">NPS Ciblé</div>
                                    </div>
                                    <div className="flex-1 text-center p-4 bg-white/5 rounded-sm">
                                        <div className="text-3xl font-bold text-white">1/3</div>
                                        <div className="text-[10px] text-lore-muted uppercase mt-1">Partage Social (UGC)</div>
                                    </div>
                                </div>
                                <p className="text-sm text-lore-muted italic border-l-2 border-lore-gold pl-4">
                                    "L'effet 'Wow' visuel des caissons réduit mécaniquement les futurs coûts marketing."
                                </p>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* 4. HOST ROI */}
                    <motion.div variants={item} className="h-full">
                        <TiltCard className="h-full">
                            <div className="h-full bg-lore-surface/50 border border-white/5 p-8 rounded-sm relative overflow-hidden group hover:border-lore-gold/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Award size={100} />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-lore-gold/10 flex items-center justify-center text-lore-gold">
                                        <BarChart3 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-white">Business Case Hôte</h3>
                                        <p className="text-xs text-lore-muted uppercase tracking-widest">Rentabilité Projetée</p>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-lore-gold mt-1 shrink-0" />
                                        <span><span className="text-white font-bold">+20% à +30%</span> <span className="text-lore-muted text-sm">sur le prix nuitée (~40-60€ gain)</span></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-lore-gold mt-1 shrink-0" />
                                        <span><span className="text-white font-bold">+15 Points</span> <span className="text-lore-muted text-sm">de taux d'occupation</span></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-lore-gold mt-1 shrink-0" />
                                        <span><span className="text-white font-bold">12-18 Mois</span> <span className="text-lore-muted text-sm">Retour sur Investissement (Payback)</span></span>
                                    </li>
                                </ul>
                            </div>
                        </TiltCard>
                    </motion.div>

                </motion.div>

                {/* Footer / Sources */}
                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <p className="text-xs text-lore-muted/50 uppercase tracking-widest mb-4">Sources & Méthodologie</p>
                    <p className="text-sm text-lore-muted font-light leading-relaxed">
                        Données issues de campagnes réelles (Meta/TikTok - Budget 600€), Landing Page de test, 9 interviews qualitatives (Hôtes & Voyageurs) et benchmarks sectoriels (AirDNA, Booking.com).
                    </p>
                </div>
            </div>
        </section>
    );
};
