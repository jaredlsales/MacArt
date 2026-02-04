import { useEffect, useState } from 'react';
import '../../styles/Gallery.css';

interface GalleryProps {
  images: string[];
}

function Gallery({ images }: GalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section id="galeria" className="gallery section-padding">
      <div className="container">
        {/* Cabeçalho */}
        <header className="gallery-header">
          <h2 className="heading-section gallery-title">
            Nossos Trabalhos
          </h2>
          <div className="decorative-line"></div>
          <p className="text-body gallery-description">
            Confira alguns dos nossos trabalhos e inspire-se para
            criar sua própria peça personalizada.
          </p>
        </header>

        {/* Grid de imagens */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className="gallery-item animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setActiveImage(image)}
              aria-label={`Abrir imagem ${index + 1}`}
            >
              <img src={image} alt={`Trabalho ${index + 1}`} />

              {/* Overlay com ícone de lupa */}
              <div className="gallery-item-overlay">
                <svg
                  className="gallery-item-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Fechar imagem"
          >
            ×
          </button>
          <img
            className="gallery-lightbox-image"
            src={activeImage}
            alt="Imagem ampliada"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;