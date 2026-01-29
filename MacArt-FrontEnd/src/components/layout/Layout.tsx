import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout">
            <Header/> {/* Cabeçalho em todas as páginas */}
            <main className="main-content">
                {/* Conteúdo específico de cada página */}
                {children}
            </main>
            <Footer/> {/* Rodapé em todas as páginas */}
        </div>

    );
} 

export default Layout