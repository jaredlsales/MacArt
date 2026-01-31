import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductTabs from '../components/layout/ProductTabs';
import { getProductBySlug, formatPrice, getAverageRating } from '../lib/Products';
import '../styles/product-detail.css';

// Importando imagens
import categoryTowels from '../assets/category-towels.jpg';
import categoryBaby from '../assets/category-baby.jpg';
import categoryTable from '../assets/category-table.jpg';
import categoryBedding from '../assets/category-bedding.jpg';
import categoryKitchen from '../assets/category-kitchen.jpg';
import categoryRobes from '../assets/category-robes.jpg';

// Mapa de imagens
const imageMap: Record<string, string> = {
    "category-towels": categoryTowels,
    "category-baby": categoryBaby,
    "category-table": categoryTable,
    "category-bedding": categoryBedding,
    "category-kitchen": categoryKitchen,
    "category-robes": categoryRobes,
};

function ProductDetail() {
    /*
      useParams é um Hook do React Router que retorna
      os parâmetros dinâmicos da URL.
  
      Se a rota é "/produto/:slug" e a URL é "/produto/toalhas-bordadas",
      então slug será "toalhas-bordadas".
    */
    const { slug } = useParams<{ slug: string }>();

    // Estados
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');

    // Busca o produto pelo slug
    const product = slug ? getProductBySlug(slug) : undefined;

    // Se não encontrou o produto, mostra mensagem de erro
    if (!product) {
        return (
            <div>
                <Header />
                <main className="product-detail container">
                    <div className="product-not-found">
                        <h1 className="heading-section">Produto não encontrado</h1>
                        <p className="text-muted">O produto que você está procurando não existe.</p>
                        <Link to="/" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                            Voltar ao Início
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Pega a imagem do produto
    const productImage = imageMap[product.image] || categoryTowels;
    const averageRating = getAverageRating(product.reviews);

    // Funções para controlar a quantidade
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    // Gera o link do WhatsApp
    const generateWhatsAppLink = () => {
        const phoneNumber = '5511999999999'; // Substituir pelo número real
        const message = encodeURIComponent(
            `Olá! Gostaria de comprar:\n\n` +
            `*${product.title}*\n` +
            `Quantidade: ${quantity}\n` +
            `${selectedSize ? `Tamanho: ${selectedSize}\n` : ''}` +
            `Valor unitário: ${formatPrice(product.price)}\n` +
            `Total estimado: ${formatPrice(product.price * quantity)}\n\n` +
            `Aguardo mais informações!`
        );
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div>
            <Header />

            <main className="product-detail container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/#produtos">Produtos</Link>
                    <span>/</span>
                    <span className="breadcrumb-current">{product.title}</span>
                </nav>

                {/* Grid do produto */}
                <div className="product-grid">
                    {/* Imagem */}
                    <div className="product-image-wrapper">
                        <img src={productImage} alt={product.title} />
                    </div>

                    {/* Informações */}
                    <div className="product-info">
                        {/* Preço e avaliação */}
                        <div className="product-header">
                            <span className="product-price">{formatPrice(product.price)}</span>
                            <div className="product-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`star ${star <= Math.round(averageRating) ? 'filled' : 'empty'}`}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Título */}
                        <h1 className="heading-section product-title">{product.title}</h1>

                        {/* Descrição */}
                        <p className="product-description-text">{product.description}</p>

                        {/* Tamanhos */}
                        {product.sizes.length > 0 && (
                            <div className="product-sizes">
                                <span className="product-sizes-label">Tamanho:</span>
                                <div className="product-sizes-options">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantidade */}
                        <div className="quantity-selector">
                            <span className="quantity-label">Qtd.:</span>
                            <div className="quantity-controls">
                                <button className="quantity-button" onClick={decreaseQuantity}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14" />
                                    </svg>
                                </button>
                                <span className="quantity-value">{quantity}</span>
                                <button className="quantity-button" onClick={increaseQuantity}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Botões de ação */}
                        <div className="product-actions">
                            <button className="btn btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                                Comprar Agora
                            </button>

                            <a
                                href={generateWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                                Comprar via WhatsApp
                            </a>
                        </div>

                        {/* Metadados */}
                        <div className="product-meta">
                            <p><strong>SKU:</strong> {product.sku}</p>
                            <p><strong>Categoria:</strong> {product.category}</p>
                            <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
                        </div>
                    </div>
                </div>

                {/* Abas do produto */}
                <ProductTabs product={product} />
            </main>

            <Footer />
        </div>
    );
}

export default ProductDetail;