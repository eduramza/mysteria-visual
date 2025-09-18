import depoimento1 from "@/assets/depoimento-1.svg";
import depoimento2 from "@/assets/depoimento-2.svg";
import depoimento3 from "@/assets/depoimento-3.svg";

const Testimonials = () => {
  const testimonials = [
    {
      image: depoimento1,
      quote: "Quando vi o desenho, foi como se meu coração reconhecesse imediatamente. Três semanas depois, conheci exatamente essa pessoa no trabalho. Estamos juntos há 8 meses.",
      author: "Mariana L., São Paulo - SP"
    },
    {
      image: depoimento2,
      quote: "Eu estava cética, mas o desenho mostrou detalhes tão específicos... Foi realmente surreal. Nos conhecemos 2 meses depois de eu ter recebido o desenho, foi tudo muito natural, estamos muito felizes juntos agora.",
      author: "Sandra R., Duque de Caixias - RS"
    },
    {
      image: depoimento3,
      quote: "O mais incrível foi que, além da aparência física, o desenho capturou a essência da pessoa. Quando nos conhecemos, senti que já o conhecia há anos.",
      author: "Camila S., Juazeiro do Norte - CE"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-mystic">
        <h2 className="text-mystic-title text-3xl md:text-5xl text-center mb-16">
          Elas Sentiram a Conexão.<br />
          <span className="text-accent-silver">Veja o Que Descobriram.</span>
        </h2>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="w-full md:w-80 flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={`Desenho da alma gêmea - Depoimento ${index + 1}`}
                  className="testimonial-image w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-text-primary text-lg md:text-xl mb-6 font-cormorant italic">
                  <span className="text-accent-gold text-4xl">"</span>
                  {testimonial.quote}
                  <span className="text-accent-gold text-4xl">"</span>
                </blockquote>
                <cite className="text-accent-silver font-montserrat">
                  — {testimonial.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;