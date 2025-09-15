import { Shield, Lock, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-spacing border-t border-accent-silver/20">
      <div className="container-mystic text-center space-y-8">
        {/* Security Icons */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="flex items-center gap-2 text-accent-silver">
            <Shield className="w-6 h-6" />
            <span className="font-montserrat text-sm">Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 text-accent-silver">
            <Lock className="w-6 h-6" />
            <span className="font-montserrat text-sm">SSL Certificado</span>
          </div>
          <div className="flex items-center gap-2 text-accent-silver">
            <CreditCard className="w-6 h-6" />
            <span className="font-montserrat text-sm">Pagamento Seguro</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-text-secondary font-montserrat">
          Copyright © 2025 - Alma Gêmea Cósmica - Todos os direitos reservados.
        </p>

        {/* Links */}
        <nav className="flex justify-center gap-8 text-sm">
          <a 
            href="#" 
            className="text-accent-silver hover:text-accent-gold transition-colors font-montserrat"
          >
            Termos de Uso
          </a>
          <a 
            href="#" 
            className="text-accent-silver hover:text-accent-gold transition-colors font-montserrat"
          >
            Política de Privacidade
          </a>
          <a 
            href="#" 
            className="text-accent-silver hover:text-accent-gold transition-colors font-montserrat"
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;