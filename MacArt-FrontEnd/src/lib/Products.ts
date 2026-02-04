// Tipo para uma avaliação
export interface Review {
  id: number;
  author: string;
  rating: number;     // 1 a 5 estrelas
  date: string;
  comment: string;
}

// Tipo para um produto
export interface Product {
  id: number;
  slug: string;       // Identificador para URL
  title: string;
  description: string;
  longDescription: string;
  price: number;      // Em centavos (ex: 8990 = R$ 89,90)
  image: string;      // Nome da imagem
  images?: string[];  // Galeria de imagens do produto
  category: string;
  sizes: string[];
  tags: string[];
  sku: string;        // Código do produto
  reviews: Review[];
}

// Array com todos os produtos
export const products: Product[] = [
  {
    id: 1,
    slug: "fraldas-bordadas",
    title: "Fraldas Bordadas",
    description: "Fraldas bordadas são mantas para bebês, com personalização exclusiva do nome da criança.",
    longDescription: `Nossas fraldas bordadas são confeccionadas com algodão 100% de alta qualidade,
    garantindo maciez, conforto e durabilidade para o dia a dia do bebê. Além de funcionarem como mantas práticas,
    cada peça pode ser personalizada com o nome da criança, tornando-se única e especial.
    O processo de bordado é feito com cuidado artesanal, resultando em produtos exclusivos que unem delicadeza e utilidade.`,
    price: 12000,
    image: "category-towels",
    images: ["category-towels", "gallery-1", "gallery-2"],
    category: "Bebê",
    sizes: ["Pequena (70x70cm)", "Média (80x80cm)", "Grande (100x100cm)"],
    tags: ["bordado", "personalizado", "bebê", "fralda", "presente"],
    sku: "TOA-001",
    reviews: [
      {
        id: 1,
        author: "Maria Silva",
        rating: 5,
        date: "2024-01-15",
        comment: "Amei as fraldas! O bordado ficou perfeito e a qualidade é excelente. Super recomendo!",
      },
      {
        id: 2,
        author: "Ana Paula",
        rating: 5,
        date: "2024-01-10",
        comment: "Presente de chá de bebê foi um sucesso! Todos adoraram.",
      },
      {
        id: 3,
        author: "Carla Mendes",
        rating: 4,
        date: "2024-01-05",
        comment: "Muito bonitas, só demorou um pouquinho mais que o esperado para chegar.",
      },
    ],
  },
  {
    id: 2,
    slug: "livro-recordações",
    title: "Livro Minhas recordações",
    description: "Livro personalizado para guardar todas as recordações dos primeiros momentos do bebê.",
    longDescription: `Registre cada etapa especial da vida do seu bebê em um livro feito para eternizar memórias.
    Desde o nascimento até os primeiros passos, você pode anotar datas importantes, colar fotos,
    guardar lembranças e personalizar com o nome da criança.

    Nosso livro de recordações é confeccionado com materiais de alta qualidade e acabamento delicado,
    pensado para durar muitos anos e preservar com carinho cada detalhe da infância. 
    Um presente único e emocionante para acompanhar o crescimento do bebê e criar memórias inesquecíveis.`,
    price: 9800,
    image: "category-baby",
    images: ["category-baby", "gallery-3", "gallery-4"],
    category: "Decoração",
    sizes: ["27x25cm"],
    tags: ["bebê", "recordações", "memórias", "presente", "personalizado"],
    sku: "DEC-001",
    reviews: [
      {
        id: 1,
        author: "Fernanda Costa",
        rating: 5,
        date: "2024-01-20",
        comment: "Um livro maravilhoso para guardar cada lembrança da minha filha!",
      },
      {
        id: 2,
        author: "Juliana Almeida",
        rating: 5,
        date: "2024-01-12",
        comment: "Acabamento impecável e espaço perfeito para fotos e anotações.",
      },
    ],
  },
  {
    id: 3,
    slug: "toalhas-de-boca",
    title: "Toalhas de Boca",
    description: "Toalhinhas de boca para bebê, personalizadas com nome e bordados delicados.",
    longDescription: `Nossas toalhas de boca são confeccionadas em algodão macio e hipoalergênico,
    pensadas para o conforto e cuidado diário do bebê. Cada peça é bordada à mão com desenhos exclusivos
    e pode ser personalizada com o nome da criança, tornando-se única e especial.

    São práticas para o dia a dia, ideais para acompanhar o bebê em qualquer momento,
    além de serem um presente encantador e cheio de carinho.`,
    price: 3800,
    image: "category-table",
    images: ["category-table", "gallery-5", "gallery-6"],
    category: "Bebê",
    sizes: ["32x47cm"],
    tags: ["bebê", "toalha de boca", "bordado", "personalizado", "presente"],
    sku: "BEB-002",
    reviews: [
      {
        id: 1,
        author: "Patrícia Rocha",
        rating: 5,
        date: "2024-01-18",
        comment: "As toalhinhas são delicadas e a personalização com o nome do meu filho ficou perfeita!",
      },
    ],
  },
  {
    id: 4,
    slug: "guardanapos-de-cozinha",
    title: "Guardanapos de Cozinha Bordados",
    description: "Guardanapos de cozinha bordados, elegantes e personalizados para suas refeições.",
    longDescription: `Transforme seus momentos à mesa com nossos guardanapos de cozinha bordados.
    Confeccionados em tecido de alta qualidade, eles unem praticidade e sofisticação,
    sendo ideais tanto para o dia a dia quanto para ocasiões especiais.

    Cada peça pode ser personalizada com monogramas, nomes ou desenhos temáticos,
    trazendo exclusividade e charme para sua mesa.`,
    price: 3200,
    image: "category-bedding",
    images: ["category-bedding", "gallery-7", "gallery-8"],
    category: "Cozinha",
    sizes: ["44x74cm"],
    tags: ["cozinha", "guardanapo", "bordado", "personalizado", "mesa posta"],
    sku: "COZ-001",
    reviews: [
      {
        id: 1,
        author: "Roberto Santos",
        rating: 5,
        date: "2024-01-14",
        comment: "Os guardanapos bordados deixaram minha mesa muito mais elegante.!",
      },
      {
        id: 2,
        author: "Luciana Ferreira",
        rating: 4,
        date: "2024-01-08",
        comment: "Adorei a personalização com o nome da minha família. Ficaram lindos e sofisticados!",
      },
    ],
  },
  {
    id: 5,
    slug: "panos-de-prato",
    title: "Panos de Prato",
    description: "Panos de prato decorativos com bordados encantadores para sua cozinha.",
    longDescription: `Adicione cor e alegria à sua cozinha com nossos panos de prato bordados.
    Além de funcionais, são verdadeiras peças decorativas que transformam o ambiente.

    Feitos em algodão 100%, absorvem bem e secam rápido. Disponíveis em diversos temas:
    frutas, flores, animais, frases inspiradoras e muito mais.`,
    price: 3990,
    image: "category-kitchen",
    images: ["category-kitchen", "gallery-1", "gallery-3"],
    category: "Cozinha",
    sizes: ["Unitário", "Kit 3 peças", "Kit 6 peças", "Kit 12 peças"],
    tags: ["cozinha", "decoração", "bordado", "pano"],
    sku: "COZ-001",
    reviews: [
      {
        id: 1,
        author: "Helena Oliveira",
        rating: 5,
        date: "2024-01-22",
        comment: "São tão lindos que dá até dó de usar! Comprei para dar de lembrança.",
      },
    ],
  },
  {
    id: 6,
    slug: "roupoes-personalizados",
    title: "Roupões Personalizados",
    description: "Roupões macios com monogramas bordados, perfeitos para presentes especiais.",
    longDescription: `Experimente o conforto de um roupão de alta qualidade com o toque especial
    de um bordado personalizado. Nossos roupões são confeccionados em atoalhado de primeira linha,
    proporcionando maciez e absorção superiores.

    Ideal para uso próprio ou para presentear em ocasiões especiais como casamentos,
    aniversários, Dia das Mães ou simplesmente para demonstrar carinho.`,
    price: 18990,
    image: "category-robes",
    images: ["category-robes", "gallery-2", "gallery-4"],
    category: "Banho",
    sizes: ["P", "M", "G", "GG"],
    tags: ["roupão", "banho", "presente", "personalizado"],
    sku: "ROU-001",
    reviews: [
      {
        id: 1,
        author: "Marcos Vinícius",
        rating: 5,
        date: "2024-01-19",
        comment: "Presenteei minha mãe e ela adorou! Qualidade excepcional.",
      },
      {
        id: 2,
        author: "Camila Dias",
        rating: 5,
        date: "2024-01-11",
        comment: "Macio demais! Virou meu xodó. Vou comprar outro para meu marido.",
      },
    ],
  },
];

/*
  Função para buscar um produto pelo slug.

  .find() percorre o array e retorna o primeiro item
  que satisfaz a condição.
*/
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/*
  Função para formatar preço.

  Converte centavos para reais e formata no padrão brasileiro.
  Ex: 8990 → "R$ 89,90"
*/
export function formatPrice(priceInCents: number): string {
  const priceInReais = priceInCents / 100;

  return priceInReais.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/*
  Função para calcular média de avaliações.
*/
export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;

  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}