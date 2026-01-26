import React from 'react';
import { motion } from 'framer-motion';

interface StepInitiatorProps {
    data: { name: string; email: string; phone: string };
    onUpdate: (data: { name: string; email: string; phone: string }) => void;
    onNext: () => void;
}

export const StepInitiator: React.FC<StepInitiatorProps> = ({ data, onUpdate, onNext }) => {
    const isValid = data.name && data.email && data.phone;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
        >
            <div className="text-center space-y-2">
                <h1 className="font-serif text-3xl md:text-4xl text-lore-gold">Identification du Gardien</h1>
                <p className="text-lore-muted font-light">Qui initie le protocole de déploiement ?</p>
            </div>

            <div className="space-y-6 bg-lore-surface/30 p-8 rounded-lg border border-lore-gold/10 backdrop-blur-md">
                <div className="group">
                    <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">Désignation (Nom Complet)</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => onUpdate({ ...data, name: e.target.value })}
                        className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                        placeholder="Jean Dupont"
                    />
                </div>

                <div className="group">
                    <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">Fréquence de Contact (Email)</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => onUpdate({ ...data, email: e.target.value })}
                        className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                        placeholder="contact@exemple.com"
                    />
                </div>

                <div className="group">
                    <label className="block text-xs font-mono text-lore-gold/70 mb-2 uppercase tracking-wider">Ligne de Signal (Téléphone)</label>
                    <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => onUpdate({ ...data, phone: e.target.value })}
                        className="w-full bg-lore-main/50 border-b border-lore-muted/30 focus:border-lore-gold text-lore-light px-0 py-3 transition-colors outline-none placeholder:text-lore-muted/20"
                        placeholder="+33 6 00 00 00 00"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    disabled={!isValid}
                    className={`px-8 py-3 font-serif tracking-widest transition-all duration-300 ${isValid
                            ? 'bg-lore-gold text-lore-main hover:bg-lore-gold-light shadow-[0_0_20px_rgba(229,193,93,0.3)]'
                            : 'bg-lore-surface text-lore-muted cursor-not-allowed opacity-50'
                        }`}
                >
                    INITIALISER SÉQUENCE &rarr;
                </button>
            </div>
        </motion.div>
    );
};
