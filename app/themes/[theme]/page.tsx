'use client';

import { useParams } from 'next/navigation';
import GalleryView from '@/components/gallery/GalleryView';

const getThemeTitle = (slug: string) => {
  const titles: { [key: string]: string } = {
    'real-pieces-of-work': 'REAL PIECES OF WORK',
    'times': 'TIMES',
    'infinity': 'INFINITY',
    'weather': 'WEATHER',
    'did-you-know-1': 'DID YOU KNOW?',
    'tiger-and-goat': 'TIGER & GOAT',
    'moon': 'MOON',
    'sun': 'SUN',
    'space': 'SPACE',
    'did-you-know-2': 'DID YOU KNOW?',
  };
  return titles[slug] || '';
};

export default function ThemePage() {
  const params = useParams();
  const theme = params.theme as string;
  
  // In a real application, these would be loaded dynamically
  const images = [`/themes/${theme}/1.jpg`];
  const title = getThemeTitle(theme);

  return <GalleryView images={images} title={title} />;
}