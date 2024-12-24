'use client';
import { useParams } from 'next/navigation';
import GalleryView from '@/components/gallery/GalleryView';
import { getThemeTitle, getThemeImages } from './themeUtils';

export default function ThemePage() {
  const params = useParams();
  const theme = params.theme as string;
  const images = getThemeImages(theme);
  const title = getThemeTitle(theme);

  return <GalleryView images={images} title={title} />;
}