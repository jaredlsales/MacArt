import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductTabs from '../components/layout/ProductTabs';
import { getProductBySlug, formatPrice, getAverageRating } from '../lib/Products';
import '../styles/product-detail.css';

// Importando imagens
import categoryTowels from '../assets/Avental_de_cozinha_01.jpeg';
import categoryBaby from '../assets/category-baby.jpg';
import categoryTable from '../assets/category-table.jpg';
import categoryBedding from '../assets/category-bedding.jpg';
import categoryKitchen from '../assets/category-kitchen.jpg';
import categoryRobes from '../assets/category-robes.jpg';
import gallery1 from '../assets/gallery-1.jpg.jpg';
import gallery2 from '../assets/gallery-2.jpg.jpg';
import gallery3 from '../assets/gallery-3.jpg.jpg';
import gallery4 from '../assets/gallery-4.jpg.jpg';
import gallery5 from '../assets/gallery-5.jpg.jpg';
import gallery6 from '../assets/gallery-6.jpg.jpg';
import gallery7 from '../assets/gallery-7.jpg.jpg';
import gallery8 from '../assets/gallery-8.jpg.jpg';
import aventalCozinha01 from '../assets/Avental_de_cozinha_01.jpeg';
import aventalCozinha02 from '../assets/Avental_de_cozinha_02.jpeg';
import aventalCozinha03 from '../assets/Avental_de_cozinha_03.jpeg';
import aventalCozinha04 from '../assets/Avental_de_cozinha_04.jpeg';
import aventalCozinha05 from '../assets/Avental_de_cozinha_05.jpeg';
import aventalCozinha06 from '../assets/Avental_de_cozinha_06.jpeg';
import aventalCozinha07 from '../assets/Avental_de_cozinha_07.jpeg';
import aventalCozinha08 from '../assets/Avental_de_cozinha_08.jpeg';
import aventalCozinha09 from '../assets/Avental_de_cozinha_09.jpeg';
import aventalCozinha10 from '../assets/Avental_de_cozinha_10.jpeg';

import aventalMasc from '../assets/Avental_de_cozinha_masculino_ 01.jpeg';
import aventalMasc01 from '../assets/Avental_de_cozinha_masculino_ 01.jpeg';
import aventalMasc02 from '../assets/Avental_de_cozinha_masculino_ 02.jpeg';
import aventalMasc03 from '../assets/Avental_de_cozinha_masculino_ 03.jpeg';
import aventalMasc04 from '../assets/Avental_de_cozinha_masculino_ 04.jpeg';
import aventalMasc05 from '../assets/Avental_de_cozinha_masculino_ 05.jpeg';

import capaVacina from '../assets/Capa_de_caderneta_de_vacinação_01.jpeg';
import capaVacina01 from '../assets/Capa_de_caderneta_de_vacinação_01.jpeg';
import capaVacina02 from '../assets/Capa_de_caderneta_de_vacinação_02.jpeg';
import capaVacina03 from '../assets/Capa_de_caderneta_de_vacinação_03.jpeg';
import capaVacina04 from '../assets/Capa_de_caderneta_de_vacinação_04.jpeg';
import capaVacina05 from '../assets/Capa_de_caderneta_de_vacinação_05.jpeg';

import fraldinhaBoca from '../assets/Fraldinhas_de_boca_01.jpeg';
import fraldinhaBoca01 from '../assets/Fraldinhas_de_boca_01.jpeg';
import fraldinhaBoca02 from '../assets/Fraldinhas_de_boca_02.jpeg';
import fraldinhaBoca03 from '../assets/Fraldinhas_de_boca_03.jpeg';

import guardanapoBordado from '../assets/Guardanapos_bordados_01.jpeg';
import guardanapoBordado01 from '../assets/Guardanapos_bordados_01.jpeg';
import guardanapoBordado02 from '../assets/Guardanapos_bordados_02.jpeg';
import guardanapoBordado03 from '../assets/Guardanapos_bordados_03.jpeg';
import guardanapoBordado04 from '../assets/Guardanapos_bordados_04.jpeg';
import guardanapoBordado05 from '../assets/Guardanapos_bordados_05.jpeg';

import jogoFraldas from '../assets/Jogo_de_fraldas_01.jpeg';
import jogoFraldas01 from '../assets/Jogo_de_fraldas_01.jpeg';
import jogoFraldas02 from '../assets/Jogo_de_fraldas_02.jpeg';

import kitCozinha from '../assets/kit_jogo_01.jpeg';
import kitJogo01 from '../assets/kit_jogo_01.jpeg';
import kitJogo02 from '../assets/kit_jogo_02.jpeg';

import mantaMaternidade from '../assets/Manta_maternidade_01.jpeg';
import mantaMaternidade01 from '../assets/Manta_maternidade_01.jpeg';
import mantaMaternidade02 from '../assets/Manta_maternidade_02.jpeg';
import mantaMaternidade03 from '../assets/Manta_maternidade_03.jpeg';
import mantaMaternidade04 from '../assets/Manta_maternidade_04.jpeg';
import mantaMaternidade05 from '../assets/Manta_maternidade_05.jpeg';
import mantaMaternidade06 from '../assets/Manta_maternidade_06.jpeg';
import mantaMaternidade07 from '../assets/Manta_maternidade_07.jpeg';

import ninhoBerco from '../assets/Ninho_de_berço_01.jpeg';
import ninhoBerco01 from '../assets/Ninho_de_berço_01.jpeg';
import ninhoBerco02 from '../assets/Ninho_de_berço_02.jpeg';
import ninhoBerco03 from '../assets/Ninho_de_berço_03.jpeg';
import ninhoBerco04 from '../assets/Ninho_de_berço_04.jpeg';
import ninhoBerco05 from '../assets/Ninho_de_berço_05.jpeg';

import portaLembrancas from '../assets/Porta_minhas_lembranças_01.jpeg';
import portaLembrancas01 from '../assets/Porta_minhas_lembranças_01.jpeg';
import portaLembrancas02 from '../assets/Porta_minhas_lembranças_02.jpeg';
import portaLembrancas03 from '../assets/Porta_minhas_lembranças_03.jpeg';
import portaLembrancas04 from '../assets/Porta_minhas_lembranças_04.jpeg';
import portaLembrancas05 from '../assets/Porta_minhas_lembranças_05.jpeg';

import portaSaquinhos from '../assets/Porta_saquinho_maternidade_01.jpeg';
import portaSaquinhos01 from '../assets/Porta_saquinho_maternidade_01.jpeg';
import portaSaquinhos02 from '../assets/Porta_saquinho_maternidade_02.jpeg';
import portaSaquinhos03 from '../assets/Porta_saquinho_maternidade_03.jpeg';

import festaJunina from '../assets/Saias_e _vestido_de_festa_junina_01.jpeg';
import festaJunina01 from '../assets/Saias_e _vestido_de_festa_junina_01.jpeg';
import festaJunina02 from '../assets/Saias_e _vestido_de_festa_junina_02.jpeg';
import festaJunina03 from '../assets/Saias_e _vestido_de_festa_junina_03.jpeg';
import festaJunina04 from '../assets/Saias_e _vestido_de_festa_junina_04.jpeg';
import festaJunina05 from '../assets/Saias_e _vestido_de_festa_junina_05.jpeg';
import festaJunina06 from '../assets/Saias_e _vestido_de_festa_junina_06.jpeg';
import festaJunina07 from '../assets/Saias_e _vestido_de_festa_junina_07.jpeg';
import festaJunina08 from '../assets/Saias_e _vestido_de_festa_junina_08.jpeg';
import festaJunina09 from '../assets/Saias_e _vestido_de_festa_junina_09.jpeg';
import festaJunina10 from '../assets/Saias_e _vestido_de_festa_junina_10.jpeg';
import festaJunina11 from '../assets/Saias_e _vestido_de_festa_junina_11.jpeg';
import festaJunina12 from '../assets/Saias_e _vestido_de_festa_junina_12.jpeg';
import festaJunina13 from '../assets/Saias_e _vestido_de_festa_junina_13.jpeg';
import festaJunina14 from '../assets/Saias_e _vestido_de_festa_junina_14.jpeg';

import toalhaBordada from '../assets/Toalha_de_rosto_e_banho_bordada_01.jpeg';
import toalhaBordada01 from '../assets/Toalha_de_rosto_e_banho_bordada_01.jpeg';
import toalhaBordada02 from '../assets/Toalha_de_rosto_e_banho_bordada_02.jpeg';
import toalhaBordada03 from '../assets/Toalha_de_rosto_e_banho_bordada_03.jpeg';
import toalhaBordada04 from '../assets/Toalha_de_rosto_e_banho_bordada_04.jpeg';

import toalhaLavabo from '../assets/Toalhinha_personalizada_de_lavabo_01.jpeg';
import toalhaLavabo01 from '../assets/Toalhinha_personalizada_de_lavabo_01.jpeg';
import toalhaLavabo02 from '../assets/Toalhinha_personalizada_de_lavabo_02.jpeg';
import toalhaLavabo03 from '../assets/Toalhinha_personalizada_de_lavabo_03.jpeg';

import toucaCozinha from '../assets/Touca_de_cozinha_01.jpeg';
import toucaCozinha01 from '../assets/Touca_de_cozinha_01.jpeg';
import toucaCozinha02 from '../assets/Touca_de_cozinha_02.jpeg';

// Mapa de imagens
const imageMap: Record<string, string> = {
    "avental-fem": categoryTowels,
    "Avental_de_cozinha_01": aventalCozinha01,
    "Avental_de_cozinha_02": aventalCozinha02,
    "Avental_de_cozinha_03": aventalCozinha03,
    "Avental_de_cozinha_04": aventalCozinha04,
    "Avental_de_cozinha_05": aventalCozinha05,
    "Avental_de_cozinha_06": aventalCozinha06,
    "Avental_de_cozinha_07": aventalCozinha07,
    "Avental_de_cozinha_08": aventalCozinha08,
    "Avental_de_cozinha_09": aventalCozinha09,
    "Avental_de_cozinha_10": aventalCozinha10,
    
    "avental-masc": aventalMasc,
    "Avental_de_cozinha_masculino_ 01": aventalMasc01,
    "Avental_de_cozinha_masculino_ 02": aventalMasc02,
    "Avental_de_cozinha_masculino_ 03": aventalMasc03,
    "Avental_de_cozinha_masculino_ 04": aventalMasc04,
    "Avental_de_cozinha_masculino_ 05": aventalMasc05,

    "capa-vacina": capaVacina,
    "Capa_de_caderneta_de_vacinação_01": capaVacina01,
    "Capa_de_caderneta_de_vacinação_02": capaVacina02,
    "Capa_de_caderneta_de_vacinação_03": capaVacina03,
    "Capa_de_caderneta_de_vacinação_04": capaVacina04,
    "Capa_de_caderneta_de_vacinação_05": capaVacina05,

    "fraldinha-boca": fraldinhaBoca,
    "Fraldinhas_de_boca_01": fraldinhaBoca01,
    "Fraldinhas_de_boca_02": fraldinhaBoca02,
    "Fraldinhas_de_boca_03": fraldinhaBoca03,

    "guardanapo-bordado": guardanapoBordado,
    "Guardanapos_bordados_01": guardanapoBordado01,
    "Guardanapos_bordados_02": guardanapoBordado02,
    "Guardanapos_bordados_03": guardanapoBordado03,
    "Guardanapos_bordados_04": guardanapoBordado04,
    "Guardanapos_bordados_05": guardanapoBordado05,

    "jogo-fraldas": jogoFraldas,
    "Jogo_de_fraldas_01": jogoFraldas01,
    "Jogo_de_fraldas_02": jogoFraldas02,

    "kit-cozinha": kitCozinha,
    "kit_jogo_01": kitJogo01,
    "kit_jogo_02": kitJogo02,

    "manta-maternidade": mantaMaternidade,
    "Manta_maternidade_01": mantaMaternidade01,
    "Manta_maternidade_02": mantaMaternidade02,
    "Manta_maternidade_03": mantaMaternidade03,
    "Manta_maternidade_04": mantaMaternidade04,
    "Manta_maternidade_05": mantaMaternidade05,
    "Manta_maternidade_06": mantaMaternidade06,
    "Manta_maternidade_07": mantaMaternidade07,

    "ninho-berco": ninhoBerco,
    "Ninho_de_berço_01": ninhoBerco01,
    "Ninho_de_berço_02": ninhoBerco02,
    "Ninho_de_berço_03": ninhoBerco03,
    "Ninho_de_berço_04": ninhoBerco04,
    "Ninho_de_berço_05": ninhoBerco05,

    "porta-lembrancas": portaLembrancas,
    "Porta_minhas_lembranças_01": portaLembrancas01,
    "Porta_minhas_lembranças_02": portaLembrancas02,
    "Porta_minhas_lembranças_03": portaLembrancas03,
    "Porta_minhas_lembranças_04": portaLembrancas04,
    "Porta_minhas_lembranças_05": portaLembrancas05,

    "porta-saquinhos": portaSaquinhos,
    "Porta_saquinho_maternidade_01": portaSaquinhos01,
    "Porta_saquinho_maternidade_02": portaSaquinhos02,
    "Porta_saquinho_maternidade_03": portaSaquinhos03,

    "festa-junina": festaJunina,
    "Saias_e _vestido_de_festa_junina_01": festaJunina01,
    "Saias_e _vestido_de_festa_junina_02": festaJunina02,
    "Saias_e _vestido_de_festa_junina_03": festaJunina03,
    "Saias_e _vestido_de_festa_junina_04": festaJunina04,
    "Saias_e _vestido_de_festa_junina_05": festaJunina05,
    "Saias_e _vestido_de_festa_junina_06": festaJunina06,
    "Saias_e _vestido_de_festa_junina_07": festaJunina07,
    "Saias_e _vestido_de_festa_junina_08": festaJunina08,
    "Saias_e _vestido_de_festa_junina_09": festaJunina09,
    "Saias_e _vestido_de_festa_junina_10": festaJunina10,
    "Saias_e _vestido_de_festa_junina_11": festaJunina11,
    "Saias_e _vestido_de_festa_junina_12": festaJunina12,
    "Saias_e _vestido_de_festa_junina_13": festaJunina13,
    "Saias_e _vestido_de_festa_junina_14": festaJunina14,

    "toalha-bordada": toalhaBordada,
    "Toalha_de_rosto_e_banho_bordada_01": toalhaBordada01,
    "Toalha_de_rosto_e_banho_bordada_02": toalhaBordada02,
    "Toalha_de_rosto_e_banho_bordada_03": toalhaBordada03,
    "Toalha_de_rosto_e_banho_bordada_04": toalhaBordada04,

    "toalha-lavabo": toalhaLavabo,
    "Toalhinha_personalizada_de_lavabo_01": toalhaLavabo01,
    "Toalhinha_personalizada_de_lavabo_02": toalhaLavabo02,
    "Toalhinha_personalizada_de_lavabo_03": toalhaLavabo03,

    "touca-cozinha": toucaCozinha,
    "Touca_de_cozinha_01": toucaCozinha01,
    "Touca_de_cozinha_02": toucaCozinha02,
    "category-baby": categoryBaby,
    "category-table": categoryTable,
    "category-bedding": categoryBedding,
    "category-kitchen": categoryKitchen,
    "category-robes": categoryRobes,
    "gallery-1": gallery1,
    "gallery-2": gallery2,
    "gallery-3": gallery3,
    "gallery-4": gallery4,
    "gallery-5": gallery5,
    "gallery-6": gallery6,
    "gallery-7": gallery7,
    "gallery-8": gallery8,
};

function ProductDetail() {
    /*
      useParams é um Hook do React Router que retorna
      os parâmetros dinâmicos da URL.
  
      Se a rota é "/produto/:slug" e a URL é "/produto/avental-cozinha-feminino",
      então slug será "avental-cozinha-feminino".
    */
    const { slug } = useParams<{ slug: string }>();

    // Estados
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

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

    const productImages = useMemo(() => {
        const keys = product.images && product.images.length > 0
            ? product.images
            : [product.image];

        return keys.map((key) => imageMap[key] || categoryTowels);
    }, [product.image, product.images]);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [product.slug]);

    // Pega a imagem do produto
    const productImage = productImages[activeImageIndex] || categoryTowels;
    const averageRating = getAverageRating(product.reviews);

    const handlePrevImage = () => {
        setActiveImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setActiveImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
    };

    // Funções para controlar a quantidade
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    // Gera o link do WhatsApp
    const generateWhatsAppLink = () => {
        const phoneNumber = '5514997301489'; // Substituir pelo número real
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
                    <div className="product-media">
                        {/* Imagem */}
                        <div className="product-image-wrapper">
                            <img src={productImage} alt={product.title} />

                            {productImages.length > 1 && (
                                <div className="product-image-controls">
                                    <button
                                        type="button"
                                        className="product-image-control"
                                        onClick={handlePrevImage}
                                        aria-label="Imagem anterior"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        type="button"
                                        className="product-image-control"
                                        onClick={handleNextImage}
                                        aria-label="Próxima imagem"
                                    >
                                        ›
                                    </button>
                                </div>
                            )}
                        </div>

                        {productImages.length > 1 && (
                            <div className="product-image-thumbs">
                                {productImages.map((image, index) => (
                                    <button
                                        key={`${product.slug}-${index}`}
                                        type="button"
                                        className={`product-image-thumb ${index === activeImageIndex ? 'active' : ''}`}
                                        onClick={() => setActiveImageIndex(index)}
                                        aria-label={`Selecionar imagem ${index + 1}`}
                                    >
                                        <img src={image} alt={`Miniatura ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
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

                        {/* Botões de ação - Esta comentado pq nao esta sendo utilizado no momento */}
                        <div className="product-actions">
                            {/*
                            <button className="btn btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                                Comprar Agora
                            </button>
                            */}

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