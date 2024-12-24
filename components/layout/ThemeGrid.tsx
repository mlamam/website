// @components/layout/ThemeGrid
import { themes } from '@/config/themes';
import ThemeItem from './ThemeItem';
import { getThemeThumbnail } from '@/app/themes/[theme]/themeUtils';

// This component creates the initial grid of themes
export default function ThemeGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 px-12 mt-12">
      {themes.map((theme) => (
        <ThemeItem
          key={theme.slug}
          title={theme.title}
          slug={theme.slug}
          imageUrl={getThemeThumbnail(theme.slug)}
        />
      ))}
    </div>
  );
}