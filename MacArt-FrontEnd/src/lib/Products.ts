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
    slug: "toalhas-bordadas",
    title: "Toalhas Bordadas",
    description: "Toalhas de banho e rosto com bordados personalizados, monogramas e desenhos exclusivos.",
    longDescription: `Nossas toalhas bordadas são confeccionadas com algodão 100% de alta qualidade,
    garantindo maciez e durabilidade. Cada peça passa por um processo cuidadoso de bordado à mão,
    onde nossos artesãos dedicam horas de trabalho para criar desenhos únicos e personalizados.

    Ideal para presentear em casamentos, aniversários, chás de bebê ou para renovar seu banheiro
    com peças exclusivas que carregam carinho e personalidade.`,
    price: 8990,
    image: "category-towels",
    category: "Banho",
    sizes: ["Rosto (50x80cm)", "Banho (70x140cm)", "Gigante (90x160cm)"],
    tags: ["bordado", "personalizado", "banho", "presente"],
    sku: "TOA-001",
    reviews: [
      {
        id: 1,
        author: "Maria Silva",
        rating: 5,
        date: "2024-01-15",
        comment: "Amei as toalhas! O bordado ficou perfeito e a qualidade é excelente. Super recomendo!",
      },
      {
        id: 2,
        author: "Ana Paula",
        rating: 5,
        date: "2024-01-10",
        comment: "Presente de casamento que foi um sucesso! Todos adoraram.",
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
    slug: "enxoval-de-bebe",
    title: "Enxoval de Bebê",
    description: "Conjuntos delicados para os pequenos: fraldas, mantas, babadores e roupinhas bordadas.",
    longDescription: `Prepare a chegada do seu bebê com peças únicas e cheias de amor. Nosso enxoval
    inclui fraldas de boca, mantas, babadores, toalhas com capuz e muito mais, tudo bordado à mão
    com os mais delicados detalhes.

    Usamos apenas tecidos hipoalergênicos e de altíssima qualidade, pensando no conforto e
    segurança dos pequenos. Personalize com o nome do bebê, animais fofos ou temas especiais.`,
    price: 15990,
    image: "category-baby",
    category: "Bebê",
    sizes: ["Kit Básico (5 peças)", "Kit Completo (10 peças)", "Kit Premium (15 peças)"],
    tags: ["bebê", "enxoval", "presente", "bordado"],
    sku: "BEB-001",
    reviews: [
      {
        id: 1,
        author: "Fernanda Costa",
        rating: 5,
        date: "2024-01-20",
        comment: "O enxoval mais lindo que já vi! Minha filha vai ficar uma princesa!",
      },
      {
        id: 2,
        author: "Juliana Almeida",
        rating: 5,
        date: "2024-01-12",
        comment: "Qualidade impecável e bordado perfeito. Vale cada centavo!",
      },
    ],
  },
  {
    id: 3,
    slug: "toalhas-de-mesa",
    title: "Toalhas de Mesa",
    description: "Jogos americanos, trilhos e toalhas de mesa com bordados elegantes para suas refeições.",
    longDescription: `Transforme suas refeições em momentos especiais com nossas toalhas de mesa
    bordadas. Temos opções para todos os estilos, desde os mais clássicos até os contemporâneos.

    Cada peça é confeccionada com tecidos de alta qualidade que resistem a lavagens frequentes
    sem perder a beleza do bordado. Perfeitas para uso diário ou para ocasiões especiais.`,
    price: 12990,
    image: "category-table",
    category: "Mesa",
    sizes: ["Jogo Americano (4 un)", "Trilho (40x150cm)", "Toalha Redonda (Ø180cm)", "Toalha Retangular (160x220cm)"],
    tags: ["mesa", "decoração", "bordado", "jantar"],
    sku: "MES-001",
    reviews: [
      {
        id: 1,
        author: "Patrícia Rocha",
        rating: 5,
        date: "2024-01-18",
        comment: "Minha mesa nunca ficou tão bonita! Os bordados são um charme.",
      },
    ],
  },
  {
    id: 4,
    slug: "jogo-de-cama",
    title: "Jogo de Cama",
    description: "Lençóis, fronhas e colchas com bordados sofisticados para um quarto dos sonhos.",
    longDescription: `Durma com conforto e elegância com nossos jogos de cama bordados.
    Confeccionados em percal 400 fios ou algodão egípcio, nossas peças oferecem
    a combinação perfeita de suavidade e sofisticação.

    Personalize com monogramas, rendas ou bordados temáticos para criar um
    ambiente único e acolhedor no seu quarto.`,
    price: 29990,
    image: "category-bedding",
    category: "Quarto",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    tags: ["cama", "quarto", "bordado", "lençol"],
    sku: "CAM-001",
    reviews: [
      {
        id: 1,
        author: "Roberto Santos",
        rating: 5,
        date: "2024-01-14",
        comment: "Presente de aniversário de casamento perfeito. Minha esposa amou!",
      },
      {
        id: 2,
        author: "Luciana Ferreira",
        rating: 4,
        date: "2024-01-08",
        comment: "Lindo e muito confortável. Só achei o prazo de entrega um pouco longo.",
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