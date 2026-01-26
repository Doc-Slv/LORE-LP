import React from 'react';
import { motion } from 'framer-motion';
import { Home, Castle, Building, Tent, Box, Grid } from 'lucide-react';

interface StepReceptacleProps {
    data: { type: string; surface: string; rooms: string; link: string };
    onUpdate: (data: { type: string; surface: string; rooms: string; link: string }) => void;
    onBack: () => void;
    onNext: () => void;
}

export const StepReceptacle: React.FC<StepReceptacleProps> = ({ data, onUpdate, onBack, onNext }) => {
    const isValid = data.type && data.surface && data.rooms;

    const propertyTypes = [
        { id: 'apartment', label: 'Appartement', icon: Building },
        { id: 'house', label: 'Maison', icon: Home },
        { id: 'unique', label: 'Insolite', icon: Tent },
        { id: 'mansion', label: 'Manoir / Château', icon: Castle },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="text-center space-y-2">
                <h1 className="font-serif text-3xl md:text-4xl text-lore-gold">Analyse du Réceptacle</h1>
                <p className="text-lore-muted font-light">Où l'anomalie sera-t-elle déployée ?</p>
            </div>

            <div className="space-y-6 bg-lore-surface/30 p-8 rounded-lg border border-lore-gold/10 backdrop-blur-md">

                {/* Property Type Selection */}
                <div className="space-y-3">
                    <label className="block text-xs font-mono text-lore-gold/70 uppercase tracking-wider">Classification</label>
                    <div className="grid grid-cols-2 gap-4">
                        {propertyTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => onUpdate({ ...data, type: type.id })}
                                className={`flex flex-col items-center gap-2 p-4 rounded border transition-all duration-300 ${data.type === type.id
                                        ? 'bg-lore-gold/20 border-lore-gold text-lore-gold'
                                        : 'bg-lore-main/50 border-lore-muted/20 text-lore-muted hover:border-lore-gold/50'
                                    }`}
                            >
                                <type.icon size={24} />
                                <span className="text-sm font-light">{type.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                        <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">
                            <Box size={12} className="inline mr-1 mb-0.5" />
                            Surface (m²)
                        </label>
                        <input
                            type="number"
                            value={data.surface}
                            onChange={(e) => onUpdate({ ...data, surface: e.target.value })}
                            className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                            placeholder="ex: 45"
                        />
                    </div>

                    <div className="group">
                        <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">
                            <Grid size={12} className="inline mr-1 mb-0.5" />
                            Structure (Pièces)
                        </label>
                        <input
                            type="number"
                            value={data.rooms}
                            onChange={(e) => onUpdate({ ...data, rooms: e.target.value })}
                            className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                            placeholder="ex: 3"
                        />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">Coordonnées (Lien annonce) - Optionnel</label>
                    <input
                        type="url"
                        value={data.link}
                        onChange={(e) => onUpdate({ ...data, link: e.target.value })}
                        className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                        placeholder="https://airbnb.com/h/..."
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="text-lore-muted hover:text-lore-gold transition-colors font-serif text-sm tracking-wider"
                >
                    &larr; RETOUR
                </button>
                <button
                    onClick={onNext}
                    disabled={!isValid}
                    className={`px-8 py-3 font-serif tracking-widest transition-all duration-300 ${isValid
                            ? 'bg-lore-gold text-lore-main hover:bg-lore-gold-light shadow-[0_0_20px_rgba(229,193,93,0.3)]'
                            : 'bg-lore-surface text-lore-muted cursor-not-allowed opacity-50'
                        }`}
                >
                    CONFIRMER SECTEUR &rarr;
                </button>
            </div>
        </motion.div>
    );
};
