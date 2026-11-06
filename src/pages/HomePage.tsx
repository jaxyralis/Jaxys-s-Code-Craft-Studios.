import {
  Code2, Globe, Smartphone, Palette, Zap, MessageCircle, ArrowRight,
} from 'lucide-react';
import { IMAGES, WHATSAPP_LINK, ABOUT_FEATURES, type PageId } from '../data';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>
        <div className="absolute inset-0 opacity-10 grid-pan" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/40 mb-8 backdrop-blur-sm animate-float">
            <span className="text-5xl font-black text-blue-400" style={{ fontFamily: 'Georgia, serif' }}>†</span>
            <span className="absolute inset-0 rounded-2xl border-2 border-blue-500/40 animate-pulse-ring" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-300 text-sm font-medium mb-6 animate-pulse-glow">
            <Code2 className="w-3.5 h-3.5 animate-wiggle" />
            Web Developer & Digital Builder
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Jaxy<span className="animate-gradient-text">†</span>Ralis
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">Jaxy's CodeCraft Studios</p>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I build modern, mobile-friendly websites that are fast, professional, and tailored to your business — helping customers find you, trust you, and choose you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/40"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me Now
            </a>
            <button
              onClick={() => { onNavigate('pricing'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105"
            >
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: 'R450', label: 'Starting Price' },
              { value: '100%', label: 'Mobile-Friendly' },
              { value: '†', label: 'Custom Logos' },
            ].map((s, i) => (
              <div key={i} className="text-center animate-float" style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${6 + i}s` }}>
                <div className="text-2xl md:text-3xl font-black text-blue-400">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Your Business Deserves to Be Online
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Hi, I'm <span className="text-white font-semibold">Jaxy Ralis</span> from <span className="text-blue-400 font-semibold">Jaxy's CodeCraft Studios</span>. I noticed that many businesses still don't have a website — and they're missing out on customers every single day.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                These days, customers search online before deciding where to shop or who to contact. A professional website helps people find your business, see your services, view your contact details, and build trust before they even call.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you need a simple page with your services and contact information, or something more advanced with bookings or online payments — I can help. I'd be happy to discuss what you're looking for and provide a <span className="text-blue-400 font-semibold">no-obligation quote</span>.
              </p>
            </div>
            <div className="space-y-4">
              {ABOUT_FEATURES.map(({ icon, title, desc }, idx) => {
                const Icon = { Globe, Smartphone, Palette, Zap }[icon] ?? Globe;
                return (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 hover:border-blue-700/50 transition-colors hover:translate-x-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 animate-spin-slow" style={{ animationDuration: `${10 + idx * 2}s` }}>
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{title}</div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See What I Can Build For You</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Explore my services, pricing, and past work — then let's get your business online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { onNavigate('services'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105"
            >
              View Services <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => { onNavigate('portfolio'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105"
            >
              View Portfolio <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
