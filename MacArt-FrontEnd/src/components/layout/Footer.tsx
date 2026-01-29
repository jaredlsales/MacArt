import { Link } from "react-router-dom"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import "./Footer.css"

const Footer = () => {

    const quickLinks = [
        { name: 'Início', path: '/' },
        { name: 'Produtos', path: '/produtos' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Galeria', path: '/galeria' },
        { name: 'Contato', path: '/contato' },
    ];

    const products = [
        { name: 'Toalhas Bordadas', path: '/produtos/toalhas-bordadas' },
        { name: 'Enxoval de Bebê', path: '/produtos/enxoval-bebe' },
        { name: 'Jogo de Cama', path: '/produtos/jogo-de-cama' },
        { name: 'Toalhas de Mesa', path: '/produtos/toalhas-de-mesa' },
        { name: 'Panos de Prato', path: '/produtos/panos-de-prato' },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* GRID COM 4 COLUNAS (no desktop) */}
                <div className="footer-grid">
                    {/* COLUNA 1: Marca */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <div className="footer-logo-circle"></div>
                            <span className="footer-logo-text">MacArt</span>
                        </div>
                        <p className="footer-description">
                            Artesanato feito à mão com amor e dedicação.
                            Cada peça é única e criada especialmente para você.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-icon">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-icon">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* COLUNA 2: Links rápidos */}
                    <div className="footer-colums">
                        <h3 className="footer-title">Links Rápidos</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 3: Produtos */}
                    <div className="footer-column">
                        <h3 className="footer-title">Nossos Produtos</h3>
                        <ul className="footer-links">
                            {products.map((product) => (
                                <li key={product.path}>
                                    <Link to={product.path} className="footer-link">
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 4: Contato */}
                    <div className="footer-column">
                        <h3 className="footer-title">Contato</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <span>(00) 00000-0000</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <span>contato@macart.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <span>Macatuba,São Paulo, Brasil</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer