import { playfair } from '@/app/fonts';

export default function Header() {
  return (
    <header className="pt-12">
      <h1 className={`${playfair.className} text-5xl text-gray-800 tracking-wider`}>
        MAYA LAMA
      </h1>
    </header>
  );
}