// @config/themes
import { Theme } from '@/types/theme';

export const themes: Theme[] = [
  { title: 'REAL PIECES OF WORK', slug: 'real-pieces-of-work', imageCount: 12 },
  { title: 'TIMES', slug: 'times', imageCount: 8 },
  { title: 'INFINITY', slug: 'infinity', imageCount: 6 },
  { title: 'WEATHER', slug: 'weather', imageCount: 10 },
  { title: 'DID YOU KNOW?', slug: 'did-you-know-1', imageCount: 8 },
  { title: 'TIGER & GOAT', slug: 'tiger-and-goat', imageCount: 15 },
  { title: 'MOON', slug: 'moon', imageCount: 10 },
  { title: 'SUN', slug: 'sun', imageCount: 8 },
  { title: 'SPACE', slug: 'space', imageCount: 12 },
  { title: 'DID YOU KNOW?', slug: 'did-you-know-2', imageCount: 8 }
];

export const getTheme = (slug: string): Theme | undefined => {
  return themes.find(theme => theme.slug === slug);
};