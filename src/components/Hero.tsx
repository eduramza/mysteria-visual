import { useState } from "react";
import { Play } from "lucide-react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

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

        <div id="vsl_player" className="video-container max-w-4xl mx-auto mb-12 animate-fade-in aspect-video">
          {/* Passo 2: Lógica de exibição condicional */}
          {showVideo ? (
            // Se showVideo for true, renderiza o iframe do YouTube
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/hBnd4fVvA6A?rel=0&autoplay=1&controls=0&loop=1" 
              title="VSL Incrível" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          ) : (
            <div 
              className="relative w-full h-full bg-gradient-to-br from-dark-background/80 to-card/40 flex items-center justify-center cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                    <Play className="w-8 h-8 text-dark-background fill-current ml-1" />
                  </div>
                  <p className="text-text-primary font-montserrat">
                    Veja como Você pode finalmente encontrar sua Alma Gêmea
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5"></div>
            </div>
          )}
        </div>

        <p className="text-text-primary text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-fade-in">
          Você pagaria 
          <p className="text-accent-gold font-montserrat font-medium">
              MENOS DE{" "}
              <strong>R$ 1 por dia</strong>
          </p>
          para visualizar a pessoa que o universo selecionou para <strong>estar com você</strong>?
        </p>

        <button 
          onClick={() => window.open("https://go.perfectpay.com.br/PPU38CPGP11", "_blank")}
          className="btn-cosmic-large animate-fade-in hover:scale-105 transition-transform">
          SIM, QUERO VER O DESENHO DA MINHA ALMA GÊMEA
        </button>
      </div>
    </section>
  );
};

export default Hero;