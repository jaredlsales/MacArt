import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import Categories from '../components/layout/Categorias';
import About from '../components/layout/About';
import Gallery from '../components/layout/Gallery';
import OrderForm from '../components/layout/OrderForm';
import Footer from '../components/layout/Footer';

// Import Produtos
import { products } from '../lib/Products';

// Importando imagens
import heroImage from '../assets/hero-macart.jpeg';
import aboutImage from '../assets/Ester_foto_perfil.jpeg';
import categoryTowels from '../assets/Avental_de_cozinha_01.jpeg';
import gallery1 from '../assets/Avental_de_cozinha_02.jpeg';
import galleryNew1 from '../assets/Fraldinhas_de_boca_02.jpeg';
import galleryNew2 from '../assets/Guardanapos_bordados_02.jpeg';
import galleryNew3 from '../assets/Manta_maternidade_02.jpeg';

import aventalMasc from '../assets/Avental_de_cozinha_masculino_ 01.jpeg';
import mantaMaternidade from '../assets/Manta_maternidade_01.jpeg';
import saiCaipira from '../assets/Saias_e _vestido_de_festa_junina_01.jpeg';
import ninhoBerco from '../assets/Ninho_de_berço_01.jpeg';
import portaLembrancas from '../assets/Porta_minhas_lembranças_01.jpeg';

import gal1 from '../assets/Capa_de_caderneta_de_vacinação_01.jpeg';
import gal2 from '../assets/Fraldinhas_de_boca_01.jpeg';
import gal3 from '../assets/Guardanapos_bordados_01.jpeg';
import gal4 from '../assets/Jogo_de_fraldas_01.jpeg';
import gal5 from '../assets/kit_jogo_01.jpeg';
import gal6 from '../assets/Porta_saquinho_maternidade_01.jpeg';
import gal7 from '../assets/Toalha_de_rosto_e_banho_bordada_01.jpeg';
import gal8 from '../assets/Touca_de_cozinha_01.jpeg';
import toalhinhaPersonalizada from '../assets/Toalhinha_personalizada_de_lavabo_01.jpeg';

// Mapeamento de imagens para as categorias (slug -> image import)
const categoryImageMap: Record<string, string> = {
  'avental-cozinha-feminino': categoryTowels,
  'avental-cozinha-masculino': aventalMasc,
  'capa-caderneta-vacinacao': gal1,
  'fraldinhas-de-boca': gal2,
  'guardanapos-bordados': gal3,
  'jogo-de-fraldas': gal4,
  'kit-jogo-americano-puxa-saco': gal5,
  'manta-maternidade': mantaMaternidade,
  'ninho-de-berco': ninhoBerco,
  'porta-lembrancinhas': portaLembrancas,
  'porta-saquinhos-maternidade': gal6,
  'saias-e-vestidos-festa-junina': saiCaipira,
  'toalha-rosto-banho-bordada': gal7,
  'toalhinha-personalizada-lavabo': toalhinhaPersonalizada,
  'touca-cozinha': gal8
};

// Gerar as categorias dinamicamente a partir dos produtos
const categories = products.map(product => ({
  title: product.title,
  description: product.description,
  image: categoryImageMap[product.slug] || categoryTowels, // Imagem fallback
  slug: product.slug,
}));

// Imagens da galeria
const galleryImages = [
  gallery1, gal1, gal2, gal3,
  gal4, gal5, gal6, gal7, gal8,
  galleryNew1, galleryNew2, galleryNew3
];

function Index() {
  return (
    <div>
      <Header />
      <Hero heroImage={heroImage} />
      <Categories categories={categories} />
      <About aboutImage={aboutImage} />
      <Gallery images={galleryImages} />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default Index;