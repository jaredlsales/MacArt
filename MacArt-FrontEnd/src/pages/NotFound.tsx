/*
  PÁGINA NOT FOUND (404)

  Exibida quando o usuário acessa uma URL que não existe.
*/

import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function NotFound() {
  return (
    <div>
      <Header />

      <main className="container" style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '120px'
      }}>
        <h1 className="heading-display" style={{ marginBottom: 'var(--spacing-md)' }}>
          404
        </h1>
        <p className="heading-section" style={{ marginBottom: 'var(--spacing-md)' }}>
          Página não encontrada
        </p>
        <p className="text-body text-muted" style={{ marginBottom: 'var(--spacing-xl)' }}>
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar ao Início
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;