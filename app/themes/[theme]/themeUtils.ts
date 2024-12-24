export const getThemeTitle = (slug: string) => {
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

export const generateStaticParams = (): { theme: string }[] => {
  const themes = [
    'real-pieces-of-work',
    'times',
    'infinity',
    'weather',
    'did-you-know-1',
    'tiger-and-goat',
    'moon',
    'sun',
    'space',
    'did-you-know-2'
  ];

  return themes.map((theme) => ({
    theme: theme,
  }));
};

export const getThemeImages = (theme: string): string[] => {
  const imageMap: { [key: string]: number } = {
    'real-pieces-of-work': 12,
    'times': 8,
    'infinity': 6,
    'weather': 10,
    'did-you-know-1': 8,
    'tiger-and-goat': 15,
    'moon': 10,
    'sun': 8,
    'space': 12,
    'did-you-know-2': 8,
  };

  const count = imageMap[theme] || 0;
  return Array.from({ length: count }, (_, i) => `/themes/${theme}/${i + 1}.jpg`);
};

