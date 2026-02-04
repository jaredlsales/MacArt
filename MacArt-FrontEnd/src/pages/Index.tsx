import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import Categories from '../components/layout/Categorias';
import About from '../components/layout/About';
import Gallery from '../components/layout/Gallery';
import OrderForm from '../components/layout/OrderForm';
import Footer from '../components/layout/Footer';

// Importando imagens
import heroImage from '../assets/hero-macart.jpeg';
import aboutImage from '../assets/about-artisan.jpg';
import categoryTowels from '../assets/category-towels.jpg';
import categoryBaby from '../assets/category-baby.jpg';
import categoryTable from '../assets/category-table.jpg';
import categoryBedding from '../assets/category-bedding.jpg';
import categoryKitchen from '../assets/category-kitchen.jpg';
import categoryRobes from '../assets/category-robes.jpg';
import gallery1 from '../assets/gallery-1.jpg.jpg';
import gallery2 from '../assets/gallery-2.jpg.jpg';
import gallery3 from '../assets/gallery-3.jpg.jpg';
import gallery4 from '../assets/gallery-4.jpg.jpg';
import gallery5 from '../assets/gallery-5.jpg.jpg';
import gallery6 from '../assets/gallery-6.jpg.jpg';
import gallery7 from '../assets/gallery-7.jpg.jpg';
import gallery8 from '../assets/gallery-8.jpg.jpg';

// Dados das categorias
const categories = [
  {
    title: 'Fraldas Bordadas',
    description: 'Fraldas bordadas com personalização exclusiva do nome da criança.',
    image: categoryTowels,
    slug: 'fraldas-bordadas',
  },
  {
    title: 'Livro Minhas recordações',
    description: 'Livro personalizado para guardar todas as recordações.',
    image: categoryBaby,
    slug: 'livro-recordações',
  },
  {
    title: 'Toalhas de Boca',
    description: 'Toalhinhas de boca para bebê.',
    image: categoryTable,
    slug: 'toalhas-de-boca',
  },
  {
    title: 'Guardanapos de Cozinha Bordados',
    description: 'Guardanapos de cozinha bordados, elegantes e personalizados para suas refeições.',
    image: categoryBedding,
    slug: 'guardanapos-de-cozinha',
  },
  {
    title: 'Panos de Prato',
    description: 'Decorativos para sua cozinha.',
    image: categoryKitchen,
    slug: 'panos-de-prato',
  },
  {
    title: 'Roupões',
    description: 'Conforto com monogramas bordados.',
    image: categoryRobes,
    slug: 'roupoes-personalizados',
  },
];

// Imagens da galeria
const galleryImages = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
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