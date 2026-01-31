import { useState } from 'react';
import type { Product } from '../../lib/Products';
import { getAverageRating } from '../../lib/Products';
import '../../styles/Product-tabs.css';

interface ProductTabsProps {
  product: Product;
}

// Componente de estrela (reutilizável)
function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`star ${filled ? 'filled' : 'empty'}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ProductTabs({ product }: ProductTabsProps) {
  // Estado para controlar qual aba está ativa
  const [activeTab, setActiveTab] = useState<'description' | 'info' | 'reviews'>('description');

  // Estado para o formulário de avaliação
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const averageRating = getAverageRating(product.reviews);

  // Lista de abas
  const tabs = [
    { id: 'description', label: 'Descrição' },
    { id: 'info', label: 'Informações Adicionais' },
    { id: 'reviews', label: `Avaliações (${product.reviews.length})` },
  ];

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="product-tabs">
      {/* Lista de abas */}
      <div className="product-tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`product-tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo das abas */}
      <div className="product-tab-content">
        {/* Aba: Descrição */}
        {activeTab === 'description' && (
          <div className="product-description">
            {product.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* Aba: Informações Adicionais */}
        {activeTab === 'info' && (
          <table className="product-info-table">
            <tbody>
              <tr>
                <th>SKU</th>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <th>Categoria</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>Tamanhos</th>
                <td>{product.sizes.join(', ')}</td>
              </tr>
              <tr>
                <th>Tags</th>
                <td>{product.tags.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Aba: Avaliações */}
        {activeTab === 'reviews' && (
          <div className="reviews-section">
            {/* Resumo das avaliações */}
            <div className="reviews-header">
              <div className="reviews-summary">
                <span className="reviews-average">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="reviews-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} filled={star <= Math.round(averageRating)} />
                    ))}
                  </div>
                  <span className="reviews-count">
                    {product.reviews.length} avaliação(ões)
                  </span>
                </div>
              </div>
            </div>

            {/* Lista de avaliações */}
            <div className="reviews-list">
              {product.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <span className="review-author">{review.author}</span>
                    <span className="review-date">{formatDate(review.date)}</span>
                  </div>
                  <div className="review-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} filled={star <= review.rating} />
                    ))}
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Formulário para nova avaliação */}
            <div className="review-form">
              <h4 className="review-form-title">Deixe sua avaliação</h4>
              <form className="review-form-fields">
                <div className="form-group">
                  <label className="label" htmlFor="review-name">Seu nome</label>
                  <input
                    type="text"
                    id="review-name"
                    className="input"
                    placeholder="Como devemos te chamar?"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="rating-input">
                  <span className="rating-input-label">Sua nota:</span>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="rating-star-button"
                        onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill={star <= reviewForm.rating ? 'var(--color-gold)' : 'none'}
                          stroke={star <= reviewForm.rating ? 'var(--color-gold)' : 'var(--color-border)'}
                          strokeWidth="2"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label" htmlFor="review-comment">Seu comentário</label>
                  <textarea
                    id="review-comment"
                    className="input textarea"
                    placeholder="Conte sua experiência com o produto..."
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar Avaliação
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;