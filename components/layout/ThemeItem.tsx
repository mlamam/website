'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ThemeItemProps {
  title: string;
  slug: string;
  imageUrl: string;
}

export default function ThemeItem({ title, slug, imageUrl }: ThemeItemProps) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative cursor-pointer group"
      onClick={() => router.push(`/themes/${slug}`)}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/66 backdrop-blur-sm">
        <h3 className="text-center text-sm tracking-wider">{title}</h3>
      </div>
    </motion.div>
  );
}