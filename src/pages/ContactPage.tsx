import {
  MessageCircle, Mail, Phone, CreditCard,
} from 'lucide-react';
import { WHATSAPP_LINK, CONTACT, type PageId } from '../data';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
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
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Ready to Get Your Website?</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Contact me today for a free, no-obligation quote. Let's build something great together.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/30 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 rounded-xl text-blue-300 font-bold text-lg transition-all hover:scale-105 justify-center"
            >
              <Mail className="w-5 h-5" />
              {CONTACT.email}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="p-6 rounded-xl bg-black border border-blue-900/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Phone / WhatsApp</div>
                <div className="text-white font-semibold text-lg">{CONTACT.phone}</div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-black border border-blue-900/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Email</div>
                <div className="text-white font-semibold text-sm">{CONTACT.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="py-24 px-4 bg-blue-950/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 border border-blue-700/40 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Payment Details
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Banking Information</h2>
            <p className="text-gray-400 max-w-lg mx-auto">Make your payment via EFT and send proof of payment via WhatsApp to confirm your order.</p>
          </div>

          <div className="rounded-2xl bg-black border border-blue-800/40 overflow-hidden">
            <div className="p-2 bg-gradient-to-r from-blue-900/40 to-blue-950/40">
              <div className="flex items-center gap-3 px-4 py-3">
                <CreditCard className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-white">Capitec Bank — EFT Transfer</span>
              </div>
            </div>
            <div className="p-8 space-y-5">
              {[
                { label: 'Card Holder', value: CONTACT.bank.holder },
                { label: 'Account Number', value: CONTACT.bank.account },
                { label: 'Bank', value: CONTACT.bank.bank },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-4 border-b border-blue-900/20 last:border-0">
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-white font-bold tracking-wide">{value}</span>
                </div>
              ))}
            </div>
            <div className="mx-8 mb-8 p-4 rounded-xl bg-green-900/20 border border-green-700/30 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-300 font-semibold text-sm">Send Proof of Payment via WhatsApp</p>
                <p className="text-gray-500 text-sm mt-1">
                  After making your payment, please send your proof of payment screenshot to{' '}
                  <span className="text-white font-medium">{CONTACT.phoneRaw}</span> on WhatsApp to confirm your order.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECORATIVE CROSS */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-black to-blue-950/30 pointer-events-none" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-5xl font-black text-blue-400 mb-4 animate-float" style={{ fontFamily: 'Georgia, serif' }}>†</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Great</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Every great business starts with being found online. Let's make that happen for yours.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/30"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Me Now
          </a>
        </div>
      </section>
    </div>
  );
}
