import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Analytics } from '../../services/Analytics';
import { Loader2, AlertCircle, Sparkles, Check } from 'lucide-react';
import { DeploymentData } from '../../pages/DeploymentPage';
import { Toast } from '../Toast';

interface StepActivationProps {
    fullData: DeploymentData;
    onBack: () => void;
    onSuccess?: () => void;
}

export const StepActivation: React.FC<StepActivationProps> = ({ fullData, onBack, onSuccess }) => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'error' | 'info' }>({
        visible: false,
        message: '',
        type: 'info'
    });

    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
        setToast({ visible: true, message, type });
    };

    const handleDeploy = async () => {
        setStatus('sending');

        // Simulation d'envoi pour l'instant
        try {
            await new Promise(resolve => setTimeout(resolve, 3000)); // Plus long pour l'animation
            Analytics.trackEvent('deployment_success', {
                module: fullData.module,
                type: fullData.receptacle.type
            });
            setStatus('success');
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Deployment failed:', error);
            setStatus('error');
            showToast("Échec de la transmission. Le canal est instable.", 'error');
            Analytics.trackEvent('deployment_error', { error: String(error) });
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-[400px] text-center"
            >
                {/* Animation de Succès Complexe */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Ring qui tourne */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-lore-gold/30 rounded-full"
                    />
                    {/* Ring pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-lore-gold/10 rounded-full filter blur-xl"
                    />

                    {/* Checkmark d'apparition */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-lore-gold to-yellow-200 text-lore-main flex items-center justify-center shadow-[0_0_50px_rgba(229,193,93,0.5)]">
                            <Check size={40} strokeWidth={4} />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="font-serif text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-lore-light via-lore-gold to-lore-light mb-4">
                        TRANSMISSION REÇUE
                    </h2>
                    <p className="text-lore-muted max-w-lg mx-auto leading-relaxed">
                        Le protocole a été initié avec succès. Nos agents logistiques sont en train de décrypter vos coordonnées (Secteur {fullData.receptacle.surface}m²).
                    </p>
                </motion.div>

                {/* Growth buttons: Home */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col md:flex-row gap-4 items-center"
                >
                    <a href="/" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-lore-gold/10 hover:bg-lore-gold/20 transition-all border border-lore-gold/30 hover:border-lore-gold/60 text-lore-gold tracking-[0.2em] text-xs font-bold uppercase rounded-sm overflow-hidden">
                        <span className="relative z-10 w-full text-center">RETOUR À LA RÉALITÉ</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lore-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </a>
                </motion.div>
            </motion.div>
        );
    }

    if (status === 'sending') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-8">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-lore-gold/20 border-t-lore-gold rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-lore-gold rounded-full animate-pulse" />
                    </div>
                </div>
                <div className="font-mono text-lore-gold animate-pulse tracking-[0.2em]">
                    ENCRYPTING DATA_PACKET...
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="text-center space-y-2">
                <h1 className="font-serif text-3xl md:text-4xl text-lore-gold">Activation du Protocole</h1>
                <p className="text-lore-muted font-light">Confirmez le déploiement de cette anomalie.</p>
            </div>

            <div className="bg-lore-surface/30 p-8 rounded-lg border border-lore-gold/10 backdrop-blur-md space-y-6 text-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={100} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-lore-light/80 relative z-10">
                    <div>
                        <span className="block text-xs uppercase text-lore-gold/60 font-mono mb-1">Initiateur</span>
                        {fullData.initiator.name}
                    </div>
                    <div>
                        <span className="block text-xs uppercase text-lore-gold/60 font-mono mb-1">Cible</span>
                        {fullData.receptacle.surface}m² • {fullData.receptacle.rooms} Pièces
                    </div>
                    <div className="col-span-2 pt-4 border-t border-white/5">
                        <span className="block text-xs uppercase text-lore-gold/60 font-mono mb-1">Charge Utile</span>
                        <span className="text-lore-gold font-serif text-2xl tracking-wide">{fullData.module}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center pt-8">
                <button
                    onClick={onBack}
                    className="text-lore-muted hover:text-lore-gold transition-colors font-serif text-sm tracking-wider disabled:opacity-50"
                >
                    &larr; ANNULER
                </button>
                <button
                    onClick={handleDeploy}
                    className="flex items-center gap-2 px-8 py-4 bg-lore-gold text-lore-main font-serif tracking-widest hover:bg-lore-gold-light transition-all shadow-[0_0_20px_rgba(229,193,93,0.3)] hover:shadow-[0_0_40px_rgba(229,193,93,0.5)] transform hover:scale-[1.02]"
                >
                    <Sparkles size={18} />
                    LANCER DÉPLOIEMENT
                </button>
            </div>

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.visible}
                onClose={() => setToast({ ...toast, visible: false })}
            />
        </motion.div>
    );
};
