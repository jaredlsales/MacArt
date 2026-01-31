import '../../styles/Gallery.css';

interface GalleryProps {
  images: string[];
}

function Gallery({ images }: GalleryProps) {
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
            <div
              key={index}
              className="gallery-item animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;