import { Link } from 'react-router-dom';
import '../../styles/Categorias.css';
import { Sparkles } from 'lucide-react';

// Tipo para uma categoria
interface Category {
  title: string;
  description: string;
  image: string;
  slug: string; // Identificador único para a URL
}

// Props do componente
interface CategoriesProps {
  categories: Category[];
}

function Categories({ categories }: CategoriesProps) {
  return (
    <section id="produtos" className="categories section-padding">
      <div className="container">
        {/* Cabeçalho da seção */}
        <header className="categories-header">
          <h3 className='heading-section categories-first'>
            <Sparkles size={12} />
            Nossas Especialidades
          </h3>
          <h2 className="heading-section categories-title">
            Categorias de Produtos
          </h2>
          <div className="decorative-line"></div>
          <p className="text-body categories-description">
            Cada peça é cuidadosamente criada com materiais de alta qualidade e muito carinho. 
            Escolha a categoria e personalize como desejar.
          </p>
        </header>

        {/* Grid de cards */}
        <div className="categories-grid">
          {/*
            .map() percorre o array e cria um card para cada item

            Sempre que usamos .map() no React, precisamos
            passar uma prop "key" única para cada item.
            Isso ajuda o React a identificar qual item mudou.
          */}
          {categories.map((category, index) => (
            <article
              key={category.slug}
              className="category-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem */}
              <div className="category-card-image">
                <img src={category.image} alt={category.title} />
              </div>

              {/* Overlay */}
              <div className="category-card-overlay"></div>

              {/* Conteúdo */}
              <div className="category-card-content">
                <h3 className="category-card-title">{category.title}</h3>
                <p className="category-card-description">
                  {category.description}
                </p>

                {/* Link para a página do produto */}
                <Link
                  to={`/produto/${category.slug}`}
                  className="category-card-button"
                >
                  Personalizar
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;