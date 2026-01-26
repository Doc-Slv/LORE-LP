import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type,
    isVisible,
    onClose,
    duration = 5000
}) => {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const bgColors = {
        success: 'bg-green-500/10 border-green-500/50 text-green-500',
        error: 'bg-red-500/10 border-red-500/50 text-red-500',
        info: 'bg-lore-gold/10 border-lore-gold/50 text-lore-gold',
    };

    const Icon = {
        success: CheckCircle,
        error: AlertCircle,
        info: AlertCircle,
    }[type];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-lg border backdrop-blur-md shadow-2xl ${bgColors[type]}`}
                >
                    <Icon size={20} />
                    <span className="font-serif text-sm tracking-wide">{message}</span>
                    <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity ml-2">
                        <X size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
