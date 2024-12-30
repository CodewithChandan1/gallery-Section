import { Camera } from 'lucide-react';

export function Header({ title, date }: { title: string; date: string }) {
  return (
    <header className="text-center py-16 bg-[#4A4243] text-white">
      <h1 className="text-5xl font-light tracking-wider mb-4">
        <span className="font-normal">{title.split(' ')[0]}</span> &amp; {title.split(' ')[1]}
      </h1>
      <p className="italic text-lg text-gray-300">{date}</p>
    </header>
  );
}