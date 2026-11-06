import { useState } from 'react';
import {
  Globe, Image, ChevronLeft, MessageCircle,
} from 'lucide-react';
import { portfolioItems, IMAGES, WHATSAPP_LINK, type PageId, type PortfolioItem } from '../data';
import Lightbox from '../components/Lightbox';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

export default function PortfolioPage({ onNavigate: _onNavigate }: PortfolioPageProps) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openDetail = (item: PortfolioItem) => {
    setActiveItem(item);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setActiveItem(null);
    window.scrollTo(0, 0);
  };

  if (activeItem) {
    return (
      <div className="pt-20">
        <div className="sticky top-16 z-40 bg-black/90 backdrop-blur border-b border-blue-900/40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300 text-sm">{activeItem.title}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {activeItem.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-900/40 border border-blue-700/50 rounded-full text-blue-300 text-xs font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{activeItem.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{activeItem.longDescription}</p>
            {activeItem.url && (
              <a
                href={activeItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                Visit Live Site
              </a>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-300 border-b border-blue-900/40 pb-3">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.images.map((img, i) => (
                <div
                  key={i}
                  className="relative group rounded-xl overflow-hidden border border-blue-900/30 cursor-zoom-in"
                  onClick={() => setLightboxImg(img)}
                >
                  <img
                    src={img}
                    alt={`${activeItem.title} screenshot ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-full p-3">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-black border border-blue-800/40 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Want something like this?</h3>
            <p className="text-gray-400 mb-6">Let's discuss your project and build something tailored to your business.</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pan" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
            My Work
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Previous Projects</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Real websites I've built for real businesses. Click to explore each project.</p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map(item => (
              <div
                key={item.id}
                className="group rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/60 overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 animate-float"
                style={{ animationDelay: `${0}s`, animationDuration: '8s' }}
                onClick={() => openDetail(item)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
                      <Image className="w-4 h-4" />
                      View Project
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-blue-900/30 border border-blue-800/40 rounded-full text-blue-400 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Visit Live Site
                      </a>
                    ) : <span />}
                    <span className="text-gray-600 text-sm group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      View Details <ChevronLeft className="w-4 h-4 rotate-180" />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Technical work card */}
            <div
              className="group rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/60 overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              onClick={() => setLightboxImg(IMAGES.example)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={IMAGES.example}
                  alt="Development work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    View Full Image
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Python', 'Backend', 'Development'].map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-900/30 border border-blue-800/40 rounded-full text-blue-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Technical Development Work</h3>
                <p className="text-gray-500 text-sm">Advanced coding capabilities spanning web development, Python scripting, and modern web technologies.</p>
              </div>
            </div>
          </div>

          {portfolioItems.length === 0 && (
            <div className="text-center mt-12 p-8 rounded-2xl bg-blue-950/20 border border-blue-900/30">
              <p className="text-gray-400 text-lg mb-2">More projects coming soon</p>
              <p className="text-gray-500 text-sm">I'm currently working on new client websites. Check back soon or contact me to see live demos.</p>
            </div>
          )}
        </div>
      </section>

      <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
    </div>
  );
}
