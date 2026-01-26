import React from 'react';
import { motion } from 'framer-motion';
import { UNIVERSES_DATA } from '../../data';
import { Check } from 'lucide-react';

interface StepModuleProps {
    selectedModule: string;
    onSelect: (moduleId: string) => void;
    onBack: () => void;
    onNext: () => void;
}

export const StepModule: React.FC<StepModuleProps> = ({ selectedModule, onSelect, onBack, onNext }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="text-center space-y-2 mb-8">
                <h1 className="font-serif text-3xl md:text-4xl text-lore-gold">Sélection du Module</h1>
                <p className="text-lore-muted font-light">Quelle réalité souhaitez-vous installer ?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {UNIVERSES_DATA.map((universe) => {
                    const isSelected = selectedModule === universe.title;
                    return (
                        <div
                            key={universe.id}
                            onClick={() => onSelect(universe.title)}
                            className={`cursor-pointer group relative overflow-hidden rounded-lg border transition-all duration-300 ${isSelected
                                    ? 'border-lore-gold shadow-[0_0_15px_rgba(229,193,93,0.3)]'
                                    : 'border-lore-muted/20 hover:border-lore-gold/50'
                                }`}
                        >
                            {/* Background Image / Overlay */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-40 mix-blend-overlay"
                                style={{ backgroundImage: `url(${universe.image})` }}
                            />
                            <div className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? 'bg-lore-gold/10' : 'bg-lore-main/80 group-hover:bg-lore-main/60'}`} />

                            <div className="relative p-4 h-full flex flex-col justify-end">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`font-serif text-lg ${isSelected ? 'text-lore-gold' : 'text-lore-light'}`}>{universe.title}</h3>
                                    {isSelected && <Check size={18} className="text-lore-gold" />}
                                </div>
                                <p className="text-xs text-lore-muted line-clamp-2">{universe.desc}</p>
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {universe.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-lore-gold/10 text-lore-gold/80 border border-lore-gold/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between items-center pt-4">
                <button
                    onClick={onBack}
                    className="text-lore-muted hover:text-lore-gold transition-colors font-serif text-sm tracking-wider"
                >
                    &larr; RETOUR
                </button>
                <button
                    onClick={onNext}
                    disabled={!selectedModule}
                    className={`px-8 py-3 font-serif tracking-widest transition-all duration-300 ${selectedModule
                            ? 'bg-lore-gold text-lore-main hover:bg-lore-gold-light shadow-[0_0_20px_rgba(229,193,93,0.3)]'
                            : 'bg-lore-surface text-lore-muted cursor-not-allowed opacity-50'
                        }`}
                >
                    INITIALISER TRANSFERT &rarr;
                </button>
            </div>
        </motion.div>
    );
};
