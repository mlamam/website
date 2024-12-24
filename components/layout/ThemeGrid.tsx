// @components/layout/ThemeGrid
import ThemeItem from './ThemeItem';

const themes = [
  { title: 'REAL PIECES OF WORK', slug: 'real-pieces-of-work' },
  { title: 'TIMES', slug: 'times' },
  { title: 'INFINITY', slug: 'infinity' },
  { title: 'WEATHER', slug: 'weather' },
  { title: 'DID YOU KNOW?', slug: 'did-you-know-1' },
  { title: 'TIGER & GOAT', slug: 'tiger-and-goat' },
  { title: 'MOON', slug: 'moon' },
  { title: 'SUN', slug: 'sun' },
  { title: 'SPACE', slug: 'space' },
  { title: 'DID YOU KNOW?', slug: 'did-you-know-2' },
];

// This component creates the initial grid of themes
export default function ThemeGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 px-12 mt-12">
      {themes.map((theme) => (
        <ThemeItem
          key={theme.slug}
          title={theme.title}
          slug={theme.slug}
          imageUrl={`/themes/${theme.slug}/thumbnail.jpg`}
        />
      ))}
    </div>
  );
}