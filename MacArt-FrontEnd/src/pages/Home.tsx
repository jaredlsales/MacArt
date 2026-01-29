import { ArrowDown, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Componente Shadcn
import "./Home.css";

const Home = () => {
  return (
    <main className="home-hero">
      {/* O fundo e o gradiente são controlados pelo CSS */}
      <div className="hero-overlay">
        <section className="hero-container">
          
          <div className="hero-text-content">
            <span className="hero-subtitle">
              Artesanato Exclusivo & Personalizado
            </span>

            <h1 className="hero-title">
              Arte Feita à Mão, <br />
              <span className="hero-title-italic">Feita para Você</span>
            </h1>

            <p className="hero-description">
              Transformamos seus sonhos em peças únicas. Toalhas bordadas, 
              enxovais personalizados e muito mais — cada item conta uma história especial.
            </p>

            <div className="hero-actions">
              {/* Usando Button do Shadcn com classes CSS próprias */}
              <Button className="btn-main">
                Explorar Produtos
              </Button>
              
              <Button variant="outline" className="btn-outline">
                Solicitar Orçamento <MoveRight size={18} />
              </Button>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>ROLAR</span>
            <ArrowDown className="scroll-icon" />
          </div>

        </section>
      </div>
    </main>
  );
};

export default Home;