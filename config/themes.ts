import { Theme } from '@/types/theme';

export const themes: Theme[] = [
  {
    slug: 'real-pieces-of-work',
    title: 'REAL PIECES OF WORK',
    imageCount: 2,
  },
  {
    slug: 'times',
    title: 'TIMES',
    imageCount: 2,
  },
  // Add other themes...
];

export const getTheme = (slug: string): Theme | undefined => {
  return themes.find(theme => theme.slug === slug);
};