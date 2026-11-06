import { Check, X, Star, Wrench, MessageCircle } from 'lucide-react';
import { PRICING_PLANS, MAINTENANCE_PLANS, WHATSAPP_LINK, type PageId } from '../data';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
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
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">No hidden fees. No surprises. Just honest pricing for quality work.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col animate-float ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-950/60 to-black border-2 border-blue-500 shadow-2xl shadow-blue-900/30 animate-pulse-glow'
                    : 'bg-black border border-blue-900/40'
                }`}
                style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${7 + i}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
                    <span className="px-4 py-1.5 bg-blue-600 rounded-full text-white text-xs font-bold tracking-wide flex items-center gap-1">
                      <Star className="w-3 h-3" /> POPULAR
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p className={`font-semibold text-sm uppercase tracking-widest mb-2 ${plan.popular ? 'text-blue-300' : 'text-blue-400'}`}>{plan.name}</p>
                  <div className="text-4xl font-black text-white">{plan.price}</div>
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-blue-400 font-medium' : 'text-gray-500'}`}>{plan.maintenance}</p>
                </div>
                <div className="space-y-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-blue-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map(f => (
                    <div key={f} className="flex items-start gap-3 opacity-30">
                      <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105'
                      : 'border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              After Launch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Website Maintenance & Editing</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Keep your website up-to-date, secure, and running smoothly with ongoing maintenance plans.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {MAINTENANCE_PLANS.map(({ period, price, desc, highlight }) => (
              <div
                key={period}
                className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${highlight ? 'bg-blue-950/40 border-blue-500/60 shadow-lg shadow-blue-900/20' : 'bg-black border-blue-900/30'}`}
              >
                <Wrench className={`w-8 h-8 mx-auto mb-4 animate-spin-slow ${highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                <div className="text-3xl font-black text-white mb-1">{price}</div>
                <div className={`font-bold mb-2 ${highlight ? 'text-blue-300' : 'text-gray-400'}`}>{period}</div>
                <div className="text-gray-500 text-sm">{desc}</div>
                {highlight && (
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-600/20 border border-blue-600/40 rounded-full text-blue-400 text-xs font-medium animate-pulse-glow">
                    Best Value
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Plan You Need?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Send me a message and I'll help you pick the right option for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/30 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo(0, 0); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105 justify-center"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
