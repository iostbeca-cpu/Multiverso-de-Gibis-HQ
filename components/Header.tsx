import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'O Multiverso', href: '#video-showcase' },
    { name: 'Benefícios', href: '#features' },
    { name: 'Depoimentos', href: '#trust' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50 hover:opacity-90 transition-opacity cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
            <BookOpen className="text-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tight text-white">
            Multiverso<span className="text-yellow-500">deGibis</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-slate-300 hover:text-white hover:shadow-[0_2px_0_0_#eab308] font-medium transition-all text-sm uppercase tracking-wider pb-1"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing" 
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
            className="bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30 text-sm uppercase tracking-wide"
          >
            Garantir Acesso
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-2xl font-bold text-white hover:text-yellow-500"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
            className="mt-4 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg shadow-xl shadow-yellow-500/20"
          >
            Garantir Acesso
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;