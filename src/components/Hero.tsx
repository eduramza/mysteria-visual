import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-spacing">
      <div className="container-mystic text-center">
        <h1 className="text-mystic-title text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          Sua Conexão Cósmica Tem um Rosto.<br />
          <span className="block mt-2">Nós Vamos Desenhá-lo para Você.</span>
        </h1>
        
        <p className="text-mystic-secondary text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-fade-in">
          Nossos artistas sensitivos utilizam dados astrais do seu perfil para canalizar e esboçar a aparência real do seu verdadeiro amor.
        </p>

        <div id="vsl_player" className="video-container max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="relative w-full h-full bg-gradient-to-br from-dark-background/80 to-card/40 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                  <Play className="w-8 h-8 text-dark-background fill-current ml-1" />
                </div>
                <p className="text-text-primary font-montserrat">
                  Assista como revelamos sua alma gêmea
                </p>
              </div>
            </div>
            {/* Placeholder for future video implementation */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5"></div>
          </div>
        </div>

        <button className="btn-cosmic-large animate-fade-in hover:scale-105 transition-transform">
          SIM, QUERO VER O DESENHO DA MINHA ALMA GÊMEA
        </button>
      </div>
    </section>
  );
};

export default Hero;