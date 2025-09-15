import { ScrollText, Eye, Mail } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: ScrollText,
      title: "Responda o Questionário",
      description: "Conte-nos sobre você. Seu nome e data de nascimento são as chaves que abrem seu mapa astral."
    },
    {
      icon: Eye,
      title: "Canalização Sensitiva",
      description: "Nossos artistas entram em sintonia com sua energia cósmica para visualizar sua conexão alma gêmea."
    },
    {
      icon: Mail,
      title: "Receba Seu Desenho",
      description: "Em até 24 horas, você receberá o desenho exclusivo da aparência física do seu verdadeiro amor."
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-mystic">
        <h2 className="text-mystic-title text-3xl md:text-5xl text-center mb-16">
          Sua Revelação em 3 Passos Simples
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="card-mystic text-center">
              <div className="flex justify-center mb-6">
                <step.icon className="icon-mystic animate-float" />
              </div>
              <h3 className="text-mystic-title text-xl md:text-2xl mb-4">
                Passo {index + 1}: {step.title}
              </h3>
              <p className="text-mystic-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;