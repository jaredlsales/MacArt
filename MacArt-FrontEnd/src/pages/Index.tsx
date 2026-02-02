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
    title: 'Toalhas Bordadas',
    description: 'Toalhas de banho e rosto com bordados personalizados.',
    image: categoryTowels,
    slug: 'toalhas-bordadas',
  },
  {
    title: 'Enxoval de Bebê',
    description: 'Conjuntos delicados para os pequenos.',
    image: categoryBaby,
    slug: 'enxoval-de-bebe',
  },
  {
    title: 'Toalhas de Mesa',
    description: 'Elegância para suas refeições.',
    image: categoryTable,
    slug: 'toalhas-de-mesa',
  },
  {
    title: 'Jogo de Cama',
    description: 'Lençóis e fronhas sofisticados.',
    image: categoryBedding,
    slug: 'jogo-de-cama',
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