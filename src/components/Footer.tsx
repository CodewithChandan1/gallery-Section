import { Camera, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 bg-[#FDF6F3] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Camera className="mx-auto mb-4 text-[#4A4243]" size={48} />
          <h2 className="text-3xl font-light text-[#4A4243] mb-2">Diganta Photography</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-gray-600">
          <a href="tel:+919879413545" className="flex items-center gap-2 hover:text-[#4A4243]">
            <Phone size={18} />
            +91 98794 13545
          </a>
          <a href="mailto:hello@diganta.com" className="flex items-center gap-2 hover:text-[#4A4243]">
            <Mail size={18} />
            hello@diganta.com
          </a>
          <a href="https://www.diganta.com" className="flex items-center gap-2 hover:text-[#4A4243]">
            <Globe size={18} />
            www.diganta.com
          </a>
        </div>
      </div>
    </footer>
  );
}