import { Clock, Star } from "lucide-react";

const Offer = () => {
  return (
    <section id="oferta" className="section-spacing">
      <div className="container-mystic">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-mystic border-2 border-accent-gold/30">
            <div className="flex justify-center mb-8">
              <Star className="icon-mystic w-16 h-16 animate-float" />
            </div>
            
            <p className="text-mystic-secondary text-xl mb-4">
              Uma leitura e desenho astral particular como este custaria normalmente{" "}
              <span className="line-through text-accent-silver">R$ 149,00</span>
            </p>
            
            <p className="text-text-primary text-2xl md:text-3xl mb-6 font-cormorant">
              ...mas hoje você pode ter acesso à sua revelação por um valor simbólico de apenas
            </p>
            
            <div className="price-display mb-8">
              R$ 29,90
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-accent-gold/10 rounded-xl border border-accent-gold/20">
              <Clock className="w-6 h-6 text-accent-gold animate-pulse" />
              <p className="text-accent-gold font-montserrat font-medium">
                Devido à natureza intensa do trabalho de nossos artistas, abrimos apenas{" "}
                <strong>30 vagas por dia</strong> com este valor. Garante a sua antes que encerre.
              </p>
            </div>
            
            <button className="btn-cosmic-large w-full md:w-auto">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">
                  QUERO MEU DESENHO AGORA
                </span>
                <span className="text-sm opacity-90">
                  VAGAS LIMITADAS
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;