import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import "./Header.css"

const Header = () => {

    const location = useLocation();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Array com itens do menu
    const navItems = [
        { name: "Início", path: "/" },
        { name: "Produtos", path: "/produtos" },
        { name: "Sobre", path: "/sobre" },
        { name: "Galeria", path: "/galeria" },
        { name: "Contato", path: "/contato" },
    ];

    return (
        <header className='header'>
            <div className='header-container'>
                {/* LOGO */}
                <Link to="/" className='logo'>
                    <span className='logo-text'>Mac<span className='logo-highlight'>Art</span></span>
                </Link>

                {/* MENU DESKTOP */}
                <nav className='nav-desktop'>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* BOTÃO LADO DIREITO */}
                <div className='header-right'>
                    <Link to="/pedido" className='order-button'>
                        Fazer Pedido
                    </Link>
                </div>

                {/* BOTÃO MENU MOBILE */}
                <button
                    type="button"
                    className='mobile-menu-button'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Abrir menu"
                >
                    <Menu className='h-5 w-5' />
                </button>
            </div>

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <div className='mobile-menu'>
                    <div className='mobile-nav'>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

        </header>
    )
}


export default Header


