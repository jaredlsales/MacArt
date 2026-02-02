import '../../styles/Hero.css';

// Definindo o tipo das props
// Isso ajuda o TypeScript a entender o que o componente espera receber
interface HeroProps {
  heroImage: string;
}

function Hero({ heroImage }: HeroProps) {
  return (
    <section id="inicio" className="hero">
      {/* Imagem de fundo */}
      <div className="hero-background">
        <img src={heroImage} alt="Artesanato MacArt" />
        <div className="hero-overlay"></div>
      </div>

      {/* Conteúdo */}
      <div className="container">
        <div className="hero-content animate-fade-up">
          <span className="hero-subtitle">Artesanato Exclusivo & Personalizado</span>

          <h1 className="hero-title">
            Arte Feita à Mão, Feita para
            <br />
            Você
          </h1>

          <p className="hero-description">
            Peças feitas à mão que transformam seus sonhos em arte. Toalhas bordadas, enxovais e lembranças únicas criadas especialmente para você.
          </p>

          <div className="hero-buttons">
            <a href="#produtos" className="btn btn-primary">
              Ver Produtos
            </a>
            <a href="#contato" className="btn hero-btn-outline">
              Fazer Encomenda
            </a>
          </div>

          <button >

          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero-scroll-indicator">
        <span>Role para ver mais</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;