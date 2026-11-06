import {
  Globe, Palette, ShoppingCart, Calendar, CreditCard, Search,
  Smartphone, Zap, Shield, MessageCircle, Check,
} from 'lucide-react';
import { SERVICES, WHATSAPP_LINK, type PageId } from '../data';

const ICON_MAP: Record<string, typeof Globe> = {
  Globe, Palette, ShoppingCart, Calendar, CreditCard, Search, Smartphone, Zap, Shield,
};

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
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
            What I Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Services & Features</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Everything your business needs to succeed online, built with precision and care.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-4 bg-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon, title, desc }, idx) => {
              const Icon = ICON_MAP[icon] ?? Globe;
              return (
                <div key={title} className="p-6 rounded-2xl bg-black border border-blue-900/30 hover:border-blue-600/50 transition-all hover:-translate-y-1 group animate-float" style={{ animationDelay: `${idx * 0.3}s`, animationDuration: `${8 + idx}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-700/30 flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors group-hover:animate-wiggle">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Idea to Launch</h2>
            <p className="text-gray-400 max-w-xl mx-auto">A simple, transparent process to get your business online quickly.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'We Chat', desc: 'Tell me what you need and I provide a free quote via WhatsApp.' },
              { step: '02', title: 'I Build', desc: 'I design and build your website with your branding and content.' },
              { step: '03', title: 'You Review', desc: 'Review the site and request any changes or adjustments.' },
              { step: '04', title: 'Go Live', desc: 'Your website goes live and customers can find you online.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-6 rounded-2xl bg-black border border-blue-900/30">
                <div className="text-3xl font-black text-blue-600/40 mb-3 animate-tilt">{step}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Me</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Affordable pricing starting at R450',
              'Mobile-friendly designs that look great everywhere',
              'Fast turnaround — get online quickly',
              'Ongoing maintenance and support available',
              'Custom logos and branding included',
              'Secure, reliable hosting with SSL',
            ].map((item, idx) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-black border border-blue-900/30">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 animate-bounce-slow" style={{ animationDelay: `${idx * 0.2}s` }} />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Contact me today for a free, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/30 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me Now
            </a>
            <button
              onClick={() => { onNavigate('pricing'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105 justify-center"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
