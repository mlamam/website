// @components/gallery/ThemeGrid.tsx
import Link from 'next/link';
import Image from 'next/image';
import { themes } from '@/config/themes';

export default function ThemeGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {themes.map((theme) => (
        <Link 
          key={theme.slug}
          href={`/themes/${theme.slug}`}
          className="relative aspect-square overflow-hidden"
        >
          <Image
            src={`/themes/${theme.slug}/thumbnail.jpg`}
            alt={theme.title}
            fill
            className="object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-0 w-full bg-black/50 p-2">
            <h3 className="text-white text-center">{theme.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}