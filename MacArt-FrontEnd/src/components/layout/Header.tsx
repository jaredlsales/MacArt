import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

// Lista de links de navegação
// Definimos fora do componente porque não muda
const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

function Header() {
  // Estado para controlar se o usuário rolou a página
  const [isScrolled, setIsScrolled] = useState(false);

  // Estado para controlar se o menu mobile está aberto
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /*
    useEffect é um Hook que executa código quando algo acontece.

    Sintaxe:
    useEffect(() => {
      // código a executar
    }, [dependências]);

    - Se dependências for [], executa só uma vez (ao montar)
    - Se tiver variáveis, executa quando elas mudam
  */
  useEffect(() => {
    // Função que verifica a posição do scroll
    const handleScroll = () => {
      // Se rolou mais de 50 pixels, marca como scrolled
      setIsScrolled(window.scrollY > 50);
    };

    // Adiciona o "ouvinte" de evento
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove o ouvinte quando o componente é desmontado
    // Isso evita memory leaks (vazamentos de memória)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array vazio = executa só uma vez

  // Função para alternar o menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          MacArt
        </Link>

        {/* Navegação Desktop */}
        <nav className="header-nav">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className={`header-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`header-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="header-mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header-mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


