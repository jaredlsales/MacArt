import '../../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  const products = [
    { href: '/produto/fraldas-bordadas', label: 'Fraldas' },
    { href: '/produto/livro-recordações', label: 'Decoração' },
    { href: '/produto/guardanapos-de-cozinha', label: 'Cozinha' },
    { href: '/produto/roupoes-personalizados', label: 'Roupões' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Coluna 1 - Marca */}
          <div className="footer-brand">
            <div className="footer-logo">MacArt</div>
            <p className="footer-description">
              Artesanato com amor, bordados que contam histórias.
              Cada peça é única, feita especialmente para você.
            </p>

            {/* Redes Sociais */}
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="footer-column">
            <h4>Navegação</h4>
            <nav className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 - Produtos */}
          <div className="footer-column">
            <h4>Produtos</h4>
            <nav className="footer-links">
              {products.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="footer-column">
            <h4>Contato</h4>
            <nav className="footer-links">
              <span className="footer-link">(14) 99730-1489</span>
              <span className="footer-link">ester.las7@gmail.com</span>
              <span className="footer-link">Macatuba, SP</span>
            </nav>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} MacArt. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;