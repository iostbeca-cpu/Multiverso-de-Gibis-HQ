import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <BookOpen className="text-yellow-500 w-6 h-6" />
                <span className="font-black text-2xl tracking-tight text-white">
                Multiverso<span className="text-yellow-500">deGibis</span>
                </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              Sua plataforma definitiva para leitura digital. Qualidade 4K, velocidade de carregamento e o maior acervo do Brasil.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4 text-slate-400 text-sm">
            <h4 className="font-bold text-white text-lg mb-2 text-center md:text-left">Contato</h4>
            <div className="flex items-center gap-3 justify-center md:justify-start hover:text-yellow-500 transition-colors cursor-pointer">
              <Mail className="w-5 h-5 text-yellow-500" />
              <span>multiversomangahq@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start hover:text-yellow-500 transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>(24) 9927-0192</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>Brasil</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
             <h4 className="font-bold text-white text-lg mb-2 text-center md:text-left">Redes Sociais</h4>
             <div className="flex gap-4">
                <a href="https://www.instagram.com/multiversodegibis/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-lg text-slate-400 hover:text-white hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/20">
                <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-900 p-3 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20">
                <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-900 p-3 rounded-lg text-slate-400 hover:text-white hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/20">
                <Twitter className="w-5 h-5" />
                </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2025 Multiverso de Gibis — Todos os direitos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Reembolso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;