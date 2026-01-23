
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface UniverseGalleryProps {
    images: string[];
}

export const UniverseGallery: React.FC<UniverseGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) return null;

    return (
        <div className="mb-24 reveal">
            <h3 className="font-serif text-2xl text-white mb-8 border-l-4 border-lore-gold pl-4">Galerie d'Immersion</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <GlassCard key={index} className="p-0 overflow-hidden group cursor-pointer h-64" hoverEffect>
                        <div
                            className="w-full h-full relative"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Galerie ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-lore-gold w-8 h-8" />
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.div
                            layoutId={selectedImage}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-sm overflow-hidden border border-lore-gold/20 shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area (optional, but good UX to allow close on background only)
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:text-lore-gold hover:bg-black/80 transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Vue détaillée"
                                className="w-full h-full object-contain max-h-[90vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
