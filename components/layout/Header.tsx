import { playfair } from '@/app/fonts';

export default function Header() {
  return (
    <header className="px-12 pt-12">
      <h1 className={`${playfair.className} text-5xl text-gray-800 tracking-wider`}>
        MAYA LAMA
      </h1>
      <h2 className="mt-8 text-xl tracking-widest text-gray-700">THEMES</h2>
    </header>
  );
}