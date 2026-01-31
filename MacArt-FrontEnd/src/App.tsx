import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Index />} />

        {/* Página de produto */}
        <Route path="/produto/:slug" element={<ProductDetail />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;