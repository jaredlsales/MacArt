import { Heart, Award, Users, Scissors } from "lucide-react";
import '../../styles/About.css';

interface AboutProps {
  aboutImage: string;
}

function About({ aboutImage }: AboutProps) {
  // Lista de diferenciais
  const features = [
    'Bordados 100% feitos à mão',
    'Materiais de alta qualidade',
    'Personalização sob medida',
    'Entrega para todo o Brasil',
  ];

  return (
    <section id="sobre" className="about section-padding">
      <div className="container about-container">
        {/* Lado da Imagem */}
        <div className="about-image-wrapper animate-fade-up">
          <div className="about-decoration"></div>
          <div className="about-image">
            <img src={aboutImage} alt="Artesã bordando" />
          </div>
        </div>

        {/* Lado do Texto */}
        <div className="about-content animate-fade-up delay-200">
          <span className="about-subtitle">Nossa História</span>

          <h2 className="heading-section about-title">
            Tradição e Carinho em Cada Ponto
          </h2>

          <p className="text-body about-text">
            Há mais de 15 anos, a MacArt transforma tecidos em obras de arte.
            Cada peça que sai das nossas mãos carrega não apenas pontos
            e linhas, mas também amor, dedicação e a tradição do artesanato
            brasileiro.
          </p>

          <p className="text-body about-text">
            Nosso trabalho é feito sob encomenda, garantindo que cada cliente
            receba uma peça única, pensada especialmente para ele.
          </p>

          {/* Lista de diferenciais */}
          <ul className="about-features">
            {features.map((feature, index) => (
              <li key={index} className="about-feature-item">
                {/* Ícone de check */}
                <svg
                  className="about-feature-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="about-feature-text">{feature}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

export default About;