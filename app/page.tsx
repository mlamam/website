// @app/page.tsx

import Header from '@/components/layout/Header';
import ThemeGrid from '@/components/layout/ThemeGrid';
import { playfair } from '@/app/fonts';

export default function Home() {
  return (
    <main className="min-h-screen bg-mainBg">
      <div className="px-12">
        <Header />
        <div className="mt-12">
          <ThemeGrid />
        </div>
      </div>
    </main>
  );
}