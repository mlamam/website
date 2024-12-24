import { themes, getTheme } from '@/config/themes';

export const getThemeTitle = (slug: string): string => {
  return getTheme(slug)?.title || '';
};

export const generateStaticParams = () => {
  return themes.map(theme => ({ theme: theme.slug }));
};

export const getThemeImages = (slug: string): string[] => {
  const theme = getTheme(slug);
  if (!theme) return [];
  return Array.from({ length: theme.imageCount }, (_, i) => `/themes/${slug}/${i + 1}.jpg`);
};

export const getThemeThumbnail = (slug: string): string => {
  return `/themes/${slug}/thumbnail.jpg`;
};

