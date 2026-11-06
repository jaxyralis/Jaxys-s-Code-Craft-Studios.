import { MessageCircle } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK, type PageId } from '../data';
import { useState } from 'react';

interface NavbarProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button className="flex items-center gap-3" onClick={() => handleNav('home')}>
          <span className="text-2xl font-black text-blue-400 select-none animate-wiggle" style={{ fontFamily: 'Georgia, serif' }}>†</span>
          <div>
            <span className="font-bold text-white text-lg tracking-tight">Jaxy's CodeCraft</span>
            <span className="font-bold text-blue-400 text-lg"> Studios</span>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`hover:text-blue-400 transition-colors ${current === item.id ? 'text-blue-400' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all hover:scale-105 text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Get a Quote
        </a>
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-blue-900/30 px-4 py-4 space-y-3">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`block py-2 text-gray-300 hover:text-blue-400 capitalize transition-colors ${current === item.id ? 'text-blue-400' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 px-5 py-3 bg-blue-600 rounded-lg text-white font-semibold justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="w-4 h-4" />
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
