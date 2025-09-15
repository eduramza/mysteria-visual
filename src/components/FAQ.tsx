import { Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O desenho é feito por computador (IA)?",
      answer: "Não! Nossos artistas são pessoas reais com habilidades sensitivas desenvolvidas. Eles usam técnicas de canalização energética para captar a essência visual da sua alma gêmea e desenham à mão cada detalhe."
    },
    {
      question: "Como vocês conseguem 'ver' minha alma gêmea?",
      answer: "Utilizamos seu mapa astral (nome completo + data de nascimento) como ponte energética. Nossos artistas sensitivos entram em estado meditativo e recebem imagens mentais da pessoa que está destinada a você no plano cósmico."
    },
    {
      question: "E se eu não reconhecer a pessoa do desenho?",
      answer: "Lembre-se: sua alma gêmea pode ainda não ter cruzado seu caminho. O desenho mostra como ela será quando vocês se encontrarem. Algumas pessoas relatam reconhecer características depois de meses."
    },
    {
      question: "Quanto tempo demora para receber?",
      answer: "O desenho é entregue em até 24 horas por email. Em casos raros de alta demanda, pode levar até 48 horas. Você receberá uma confirmação assim que seu pedido entrar na fila de produção."
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-mystic">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Garantia */}
          <div className="text-center lg:text-left">
            <div className="card-mystic">
              <div className="flex justify-center lg:justify-start mb-6">
                <Shield className="icon-mystic w-20 h-20 animate-float" />
              </div>
              <h3 className="text-mystic-title text-2xl md:text-3xl mb-6">
                Garantia de Satisfação Cósmica
              </h3>
              <p className="text-mystic-body text-lg">
                Sua jornada é risco zero. Se por qualquer motivo o desenho não ressoar com sua intuição, 
                você tem <strong className="text-accent-gold">7 dias</strong> para solicitar o reembolso 
                total do seu investimento.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-mystic-title text-2xl md:text-3xl mb-8 text-center lg:text-left">
              Dúvidas Comuns
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="faq-summary w-full text-left flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;