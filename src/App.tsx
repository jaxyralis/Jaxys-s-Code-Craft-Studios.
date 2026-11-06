import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import type { PageId } from './data';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const [fadeKey, setFadeKey] = useState(0);

  const navigate = (next: PageId) => {
    if (next !== page) {
      setPage(next);
      setFadeKey(k => k + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fadeKey]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'services': return <ServicesPage onNavigate={navigate} />;
      case 'pricing': return <PricingPage onNavigate={navigate} />;
      case 'portfolio': return <PortfolioPage onNavigate={navigate} />;
      case 'contact': return <ContactPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar current={page} onNavigate={navigate} />
      <main key={fadeKey} className="animate-[fadeIn_0.4s_ease-out]">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
