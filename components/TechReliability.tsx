import React from 'react';
import { Cpu, RefreshCw, ShieldCheck } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const TechReliability: React.FC = () => {
    return (
        <section id="reliability" className="py-16 md:py-24 bg-lore-secondary relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Ingénierie Invisible & Robuste"
                    subtitle="Conçu pour l'usage intensif hôtelier. Zéro maintenance quotidienne."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 max-w-6xl mx-auto">
                    {/* Block 1 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <Cpu className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Électronique Industrielle</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Pas de "bricolage". Nous utilisons des automates PLC industriels et des serrures magnétiques testées pour 100 000 cycles. Câblage normé et sécurisé.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal delay-200">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <RefreshCw className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Gestion 100% Automatisée</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Entre deux réservations, un simple clic sur l'app administrateur réinitialise tous les mécanismes (trappes, lumières, sons). Aucun personnel qualifié requis sur place.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal delay-400">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <ShieldCheck className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Matériaux Nobles & Garantie</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Bois massif, métal, verre trempé. Nos modules sont conçus pour résister aux clients. Garantie hardware 2 ans avec échange standard J+1.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
