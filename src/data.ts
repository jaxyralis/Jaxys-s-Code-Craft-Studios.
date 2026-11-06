import heroImg from './assets/image.png';
import exampleImg from './assets/examples/image.png';

export const IMAGES = {
  hero: heroImg,
  example: exampleImg,
};


export const WHATSAPP_NUMBER = '27638680612';
export const WHATSAPP_MESSAGE = encodeURIComponent("Hi Jaxy†Ralis, I'm interested in getting a website built for my business. Can we chat?");
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT = {
  phone: '063 868 0612',
  phoneRaw: '0638680612',
  email: 'ralisjaxy@gmail.com',
  bank: {
    holder: 'MR GB RALINALA',
    account: '2362766612',
    bank: 'CAPITEC',
  },
};

export type PageId = 'home' | 'services' | 'pricing' | 'portfolio' | 'contact';

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  images: string[];
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ninkies-bakes',
    title: "Ninkie's Bakes",
    description: 'A bright, mobile-first website for an artisan bakery specialising in celebration cakes and cupcakes.',
    longDescription: "A warm, inviting website for Ninkie's Bakes, an artisan bakery creating custom celebration cakes and sweet treats. The site showcases the bakery's gallery of birthday and milestone cakes, a finished-designs menu, and a clear path for customers to order for their moment.",
    url: '',
    images: [
      '/images/image%20copy%2011.png',
      '/images/image%20copy%2012.png',
      '/images/image%20copy%2013.png',
    ],
    tags: ['Bakery', 'Website', 'Mobile-Friendly'],
  },
];

export const PRICING_PLANS = [
  {
    name: 'Basic',
    price: 'R450',
    maintenance: 'No Maintenance Included',
    popular: false,
    features: [
      'Business Website',
      'Professional Online Presence',
      'Services & Contact Info',
      'Custom Logo Design',
      'Secure & Reliable (SSL)',
      'Mobile-Friendly Design',
      'Branding & About Info',
    ],
    excluded: ['Online Payments', 'Booking System', 'SEO Foundations'],
  },
  {
    name: 'Premium',
    price: 'R900',
    maintenance: '+ 1 Month Maintenance Included',
    popular: true,
    features: [
      'Everything in Basic',
      'E-Commerce Store',
      'Online Payments (Card, EFT)',
      'Custom Logo Design',
      'SEO Foundations',
      'Secure & Reliable (SSL)',
      'Mobile-Friendly Design',
      'Fast Performance',
    ],
    excluded: ['Booking System'],
  },
  {
    name: 'Professional',
    price: 'R1 800',
    maintenance: '+ 3 Months Maintenance Included',
    popular: false,
    features: [
      'Everything in Premium',
      'Full E-Commerce Store',
      'Booking System',
      'Automated Confirmations',
      'Advanced Online Payments',
      'Custom Logo Design',
      'SEO Foundations',
      'Mobile-Friendly Design',
      'Fast Performance',
      'Secure & Reliable (SSL)',
    ],
    excluded: [],
  },
];

export const MAINTENANCE_PLANS = [
  { period: 'Basic — 1 Month', price: 'R150', desc: 'Small text & image updates, bug fixes, performance checks, security updates, and email support' },
  { period: 'Premium — 1 Month', price: 'R250', desc: 'Everything in Basic, regular content updates, bug fixes, SEO maintenance, booking support, and priority support', highlight: true },
  { period: 'Professional — 1 Month', price: 'R400', desc: 'Everything in Premium, advanced SEO, e-commerce and booking support, technical improvements, optimisation, and priority response' },
];

export const SERVICES = [
  { icon: 'Globe', title: 'Business Websites', desc: 'A professional online presence with your services, about info, contact details, and branding — everything customers need to choose you.' },
  { icon: 'Palette', title: 'Custom Logos', desc: 'A unique logo designed to represent your business and make your brand instantly recognisable.' },
  { icon: 'ShoppingCart', title: 'E-Commerce Stores', desc: 'Sell products online with a catalog, shopping cart, secure checkout, and order management.' },
  { icon: 'Calendar', title: 'Booking Systems', desc: 'Let customers book appointments or services directly through your website, with automated availability and confirmations.' },
  { icon: 'CreditCard', title: 'Online Payments', desc: 'Accept card payments, EFT, or other payment methods securely integrated into your site.' },
  { icon: 'Search', title: 'SEO Foundations', desc: 'Search-engine-friendly structure, meta tags, and content guidance so customers can find you on Google.' },
  { icon: 'Smartphone', title: 'Mobile-Friendly Design', desc: 'Every site is built to look and work beautifully on phones, tablets, and desktops.' },
  { icon: 'Zap', title: 'Fast Performance', desc: 'Optimized code, images, and hosting setup so your pages load quickly and rank better.' },
  { icon: 'Shield', title: 'Secure & Reliable', desc: 'SSL certificates, secure forms, and reliable hosting so your site stays safe and available.' },
];

export const ABOUT_FEATURES = [
  { icon: 'Globe', title: 'Custom Websites', desc: 'Built specifically for your brand and goals' },
  { icon: 'Smartphone', title: 'Mobile-Friendly', desc: 'Looks perfect on all devices' },
  { icon: 'Palette', title: 'Custom Logos', desc: 'Unique logos designed for your brand identity' },
  { icon: 'Zap', title: 'Fast & Reliable', desc: 'Optimized performance and secure hosting' },
];
