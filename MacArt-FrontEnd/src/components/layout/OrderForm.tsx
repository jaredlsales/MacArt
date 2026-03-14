import { useState } from 'react';
import { products } from '../../lib/Products';
import '../../styles/OrderForm.css';

/*
  O que é um formulário controlado?

  Em React, temos duas formas de lidar com formulários:

  1. Não controlado: O DOM gerencia o estado (como HTML normal)
  2. Controlado: O React gerencia o estado (recomendado)

  Em um formulário controlado:
  - Cada campo tem um estado associado
  - O valor do campo vem do estado
  - Mudanças no campo atualizam o estado
*/

function OrderForm() {
  // Estado do formulário - um objeto com todos os campos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,        // Copia todos os campos atuais
      [name]: value,  // Atualiza apenas o campo que mudou
    }));
  };

  // Dados de contato
  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      text: '(14) 99730-1489',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      text: 'ester.las7@gmail.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      text: 'Macatuba, SP',
    },
  ];

  return (
    <section id="contato" className="order-form-section section-padding">
      <div className="container order-form-container">
        {/* Lado esquerdo - Informações */}
        <div className="order-form-info animate-fade-up">
          <span className="order-form-subtitle">Contato</span>

          <h2 className="heading-section order-form-title">
            Vamos Criar Juntos?
          </h2>

          <p className="text-body order-form-description">
            Conte-nos sobre o que você está buscando. Teremos prazer
            em ajudar a criar a peça perfeita para você ou para presentear
            alguém especial.
          </p>

          {/* Lista de contatos */}
          <ul className="order-form-contact-list">
            {contactInfo.map((item, index) => (
              <li key={index} className="order-form-contact-item">
                <div className="order-form-contact-icon">
                  {item.icon}
                </div>
                <span className="order-form-contact-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lado direito - Formulário */}
        <div className="order-form-card animate-fade-up delay-200">
          {/* O formulário usa FormSubmit para enviar o email diretamente sem backend */}
          <form className="order-form" action="https://formsubmit.co/ester.las7@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo contato do site MacArt!" />
            {/* Nome */}
            <div className="form-group">
              <label className="label" htmlFor="name">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email e Telefone lado a lado */}
            <div className="order-form-row">
              <div className="form-group">
                <label className="label" htmlFor="email">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="label" htmlFor="phone">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Produto */}
            <div className="form-group">
              <label className="label" htmlFor="product">
                Produto de Interesse
              </label>
              <select
                id="product"
                name="product"
                className="input"
                value={formData.product}
                onChange={handleChange}
              >
                <option value="">Selecione uma opção</option>
                {products.map((product) => (
                  <option key={product.id} value={product.title}>
                    {product.title}
                  </option>
                ))}
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <div className="form-group">
              <label className="label" htmlFor="message">
                Sua Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                className="input textarea"
                placeholder="Descreva o que você está buscando..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              className="btn btn-primary"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default OrderForm;