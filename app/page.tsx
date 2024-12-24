import Header from '@/components/layout/Header';
import ThemeGrid from '@/components/layout/ThemeGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ThemeGrid />
    </main>
  );
}