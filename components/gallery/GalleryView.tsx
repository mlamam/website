// @components/gallery/GalleryView.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

interface GalleryViewProps {
  images: string[];
  title: string;
}

export default function GalleryView({ images, title }: GalleryViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, images.length]);

  return (
    <div className="fixed inset-0 bg-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      <div className="absolute bottom-8 left-8">
        <h2 className={`text-2xl text-white`}>{title}</h2>
      </div>

      <button
        onClick={() => router.back()}
        className="absolute top-8 right-8 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <X size={24} />
      </button>

      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => setCurrentIndex(prev => prev + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}