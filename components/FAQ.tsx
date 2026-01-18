import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O pagamento é mensal ou único?",
      answer: "Pagamento ÚNICO! Você paga apenas uma vez o valor de R$ 35,00 (no plano Premium) e tem acesso vitalício à biblioteca. Sem cobranças surpresas no seu cartão."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login, senha e o link para acessar a plataforma exclusiva."
    },
    {
      question: "Funciona no iPhone e Android?",
      answer: "Sim! Nossa plataforma é compatível com qualquer dispositivo: Celulares (iOS e Android), Tablets, iPad, Computadores e Notebooks. Você não precisa instalar nada se não quiser, pois funciona direto no navegador."
    },
    {
      question: "Consigo ler sem internet?",
      answer: "Sim, no plano Premium você tem a opção de fazer download ilimitado das edições para ler onde e quando quiser, mesmo totalmente offline."
    },
    {
      question: "E se eu não gostar?",
      answer: "Nós oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que não valeu a pena, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. O risco é todo nosso."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-slate-400 mb-4">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
                Ainda com <span className="text-yellow-500">dúvida?</span>
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                    ? 'bg-slate-900 border-yellow-500/50 shadow-lg shadow-yellow-500/5' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`px-6 text-slate-400 leading-relaxed transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;