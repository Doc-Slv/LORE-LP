import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';
import { Analytics } from '../services/Analytics';

interface ExitIntentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-lore-surface border border-lore-gold/20 p-8 rounded-lg max-w-lg w-full shadow-[0_0_50px_rgba(229,193,93,0.15)] overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-lore-muted hover:text-lore-gold transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-16 h-16 bg-lore-gold/10 rounded-full flex items-center justify-center border border-lore-gold/30">
                                <FileText size={32} className="text-lore-gold" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif text-white mb-2">Attendez, Voyageur !</h3>
                                <p className="text-lore-muted">
                                    Vous hésitez encore ? Téléchargez notre **Dossier de Faisabilité Technique** (PDF) pour comprendre comment installer une anomalie LORE chez vous sans travaux lourds.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    Analytics.trackEvent('exit_intent_conversion');
                                    onClose();
                                    alert("Le téléchargement débutera bientôt (Simulation)");
                                }}
                                className="flex items-center gap-2 px-8 py-3 bg-lore-gold text-lore-main font-serif font-bold tracking-widest hover:bg-white transition-colors w-full justify-center"
                            >
                                <Download size={18} />
                                TÉLÉCHARGER LE GUIDE
                            </button>

                            <a href="/" className="text-xs text-lore-muted hover:text-white underline underline-offset-4">
                                Non merci, je retourne à la réalité
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
