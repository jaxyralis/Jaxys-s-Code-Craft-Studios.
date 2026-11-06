import { MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_LINK, NAV_ITEMS, type PageId } from '../data';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-blue-900/30 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <button className="flex items-center gap-3" onClick={() => onNavigate('home')}>
          <span className="text-2xl font-black text-blue-400 animate-wiggle" style={{ fontFamily: 'Georgia, serif' }}>†</span>
          <span className="text-gray-400 text-sm">Jaxys's CodeCraft Studios</span>
        </button>
        <div className="flex items-center gap-4 text-sm">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); window.scrollTo(0, 0); }}
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="mailto:ralisjaxy@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-6">
        &copy; {new Date().getFullYear()} Jaxy†Ralis — Jaxys's CodeCraft Studios. All rights reserved.
      </div>
    </footer>
  );
}
