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
    slug: "avental-cozinha-feminino",
    title: "Avental de cozinha feminino",
    description: "Avental artesanal com modelagem feminina, ideal para proteger com estilo e elegância.",
    longDescription: `Confeccionado com tecidos de alta qualidade e acabamento impecável, este avental une funcionalidade e estética para o dia a dia na cozinha ou eventos gastronômicos.`,
    price: 12000,
    image: "avental-fem",
    images: ["Avental_de_cozinha_01", "Avental_de_cozinha_02", "Avental_de_cozinha_03",
      "Avental_de_cozinha_04", "Avental_de_cozinha_05", "Avental_de_cozinha_06", "Avental_de_cozinha_07",
      "Avental_de_cozinha_08", "Avental_de_cozinha_09", "Avental_de_cozinha_10"],
    category: "Cozinha",
    sizes: ["Tamanho Personalizado"],
    tags: ["cozinha", "artesanal", "avental", "feminino", "gastronomia"],
    sku: "AV-001",
    reviews: [
      {
        id: 1,
        author: "Maria Silva",
        rating: 5,
        date: "2026-03-11",
        comment: "O acabamento é lindo, o tecido é bem resistente.",
      },
      {
        id: 2,
        author: "Ana Paula",
        rating: 5,
        date: "2026-03-09",
        comment: "Comprei para usar no meu café e as clientes sempre elogiam!",
      },
    ],
  },
  {
    id: 2,
    slug: "avental-cozinha-masculino",
    title: "Avental de Cozinha Masculino",
    description: "Avental robusto e prático, perfeito para chefs e mestres do churrasco.",
    longDescription: "Desenvolvido com materiais resistentes, oferece proteção completa e bolsos utilitários para utensílios.",
    price: 8500,
    image: "avental-masc",
    images: ["Avental_de_cozinha_masculino_ 01", "Avental_de_cozinha_masculino_ 02", "Avental_de_cozinha_masculino_ 03", "Avental_de_cozinha_masculino_ 04", "Avental_de_cozinha_masculino_ 05"],
    category: "Cozinha",
    sizes: ["Tamanho Único"],
    tags: ["cozinha", "churrasco", "avental", "masculino", "gastronomia"],
    sku: "AV-002",
    reviews: [
      { id: 1, author: "Ricardo Alves", rating: 5, date: "2026-03-12", comment: "Excelente para o churrasco de domingo, protege muito bem." }
    ],
  },
  {
    id: 3,
    slug: "capa-caderneta-vacinacao",
    title: "Capa de Caderneta de Vacinação",
    description: "Capa personalizada para proteger e organizar os documentos de saúde do seu bebê.",
    longDescription: "Feita com material durável e bordado personalizado, mantém a caderneta de vacinação segura contra rasgos e sujeira.",
    price: 4500,
    image: "capa-vacina",
    images: ["Capa_de_caderneta_de_vacinação_01", "Capa_de_caderneta_de_vacinação_02", "Capa_de_caderneta_de_vacinação_03", "Capa_de_caderneta_de_vacinação_04", "Capa_de_caderneta_de_vacinação_05"],
    category: "Bebê",
    sizes: ["Padrão"],
    tags: ["bebê", "organização", "personalizado", "enxoval"],
    sku: "BB-001",
    reviews: [
      { id: 1, author: "Fernanda Lima", rating: 5, date: "2026-03-01", comment: "Finalmente a caderneta está protegida e ficou linda com o nome dele." }
    ],
  },
  {
    id: 4,
    slug: "fraldinhas-de-boca",
    title: "Fraldinhas de Boca",
    description: "Kit de fraldinhas macias e absorventes, essenciais para o cuidado diário do recém-nascido.",
    longDescription: "Confeccionadas em algodão 100% de alta absorção, são delicadas com a pele do bebê.",
    price: 3500,
    image: "fraldinha-boca",
    images: ["Fraldinhas_de_boca_01", "Fraldinhas_de_boca_02", "Fraldinhas_de_boca_03"],
    category: "Bebê",
    sizes: ["30x30cm"],
    tags: ["bebê", "enxoval", "bordado", "algodão", "praticidade"],
    sku: "BB-002",
    reviews: [
      { id: 1, author: "Beatriz Santos", rating: 5, date: "2026-03-10", comment: "Mto macia, não agride a pele do bebê. O bordado é impecável." }
    ],
  },
  {
    id: 5,
    slug: "guardanapos-bordados",
    title: "Guardanapos Bordados",
    description: "Guardanapos de tecido com acabamento bordado, ideais para mesas postas elegantes.",
    longDescription: "Leve sofisticação para suas refeições com nossos guardanapos bordados de fácil lavagem.",
    price: 6000,
    image: "guardanapo-bordado",
    images: ["Guardanapos_bordados_01", "Guardanapos_bordados_02", "Guardanapos_bordados_03", "Guardanapos_bordados_04", "Guardanapos_bordados_05"],
    category: "Casa",
    sizes: ["40x40cm"],
    tags: ["mesa posta", "decoração", "bordado", "jantar", "elegância"],
    sku: "CS-001",
    reviews: [
      { id: 1, author: "Cláudia Rocha", rating: 5, date: "2026-03-05", comment: "Minha mesa de jantar ficou outra coisa com esses guardanapos." }
    ],
  },
  {
    id: 6,
    slug: "jogo-de-fraldas",
    title: "Jogo de Fraldas",
    description: "Conjunto completo de fraldas bordadas e personalizadas para o enxoval.",
    longDescription: "Inclui fraldas de passeio e de ombro, todas com o mesmo tema e personalização exclusiva.",
    price: 12000,
    image: "jogo-fraldas",
    images: ["Jogo_de_fraldas_01", "Jogo_de_fraldas_02"],
    category: "Bebê",
    sizes: ["Padrão"],
    tags: ["bebê", "enxoval", "presente", "bordado", "kit"],
    sku: "BB-003",
    reviews: [
      { id: 1, author: "Patrícia Melo", rating: 5, date: "2026-03-10", comment: "O presente de chá de bebê foi um sucesso! Todos adoraram os detalhes." }
    ],
  },
  {
    id: 7,
    slug: "kit-jogo-americano-puxa-saco",
    title: "Kit Jogo Americano com Puxa-saco",
    description: "Kit coordenado para decorar e organizar sua cozinha com praticidade.",
    longDescription: "O kit conta com lugares de jogo americano e um puxa-saco combinando para harmonia visual.",
    price: 9500,
    image: "kit-cozinha",
    images: ["kit_jogo_01", "kit_jogo_02"],
    category: "Cozinha",
    sizes: ["Padrão"],
    tags: ["cozinha", "decoração", "jogo americano", "puxa-saco", "kit"],
    sku: "AV-003",
    reviews: [
      { id: 1, author: "Sandra Gomes", rating: 4, date: "2026-02-28", comment: "Muito lindo e prático para o dia a dia." }
    ],
  },
  {
    id: 8,
    slug: "manta-maternidade",
    title: "Manta Maternidade",
    description: "Manta luxuosa e confortável para a saída de maternidade e momentos especiais.",
    longDescription: "Desenvolvida para proporcionar o máximo de conforto térmico e maciez com bordados delicados.",
    price: 15000,
    image: "manta-maternidade",
    images: ["Manta_maternidade_01", "Manta_maternidade_02", "Manta_maternidade_03", "Manta_maternidade_04", "Manta_maternidade_05", "Manta_maternidade_06", "Manta_maternidade_07"],
    category: "Bebê",
    sizes: ["90x90cm"],
    tags: ["maternidade", "bebê", "enxoval", "conforto", "luxo"],
    sku: "BB-004",
    reviews: [
      { id: 1, author: "Luciana Vaz", rating: 5, date: "2026-03-12", comment: "A manta é maravilhosa, super quentinha e elegante." }
    ],
  },
  {
    id: 9,
    slug: "ninho-de-berco",
    title: "Ninho de Berço",
    description: "Ninho redutor de berço que simula o aconchego do útero materno.",
    longDescription: "Projetado para um sono mais seguro e tranquilo, o ninho limita o espaço do bebê.",
    price: 18000,
    image: "ninho-berco",
    images: ["Ninho_de_berço_01", "Ninho_de_berço_02", "Ninho_de_berço_03", "Ninho_de_berço_04", "Ninho_de_berço_05"],
    category: "Bebê",
    sizes: ["Ajustável"],
    tags: ["bebê", "sono", "conforto", "enxoval", "ninho"],
    sku: "BB-005",
    reviews: [
      { id: 1, author: "Renata Pires", rating: 5, date: "2026-02-20", comment: "Meu bebê dorme muito melhor nesse ninho, super recomendo." }
    ],
  },
  {
    id: 10,
    slug: "porta-lembrancinhas",
    title: "Porta-lembrancinhas",
    description: "Organizador delicado para armazenar e apresentar lembrancinhas de eventos.",
    longDescription: "Ideal para batizados e chás de bebê, mantendo as lembranças organizadas.",
    price: 5500,
    image: "porta-lembrancas",
    images: ["Porta_minhas_lembranças_01", "Porta_minhas_lembranças_02", "Porta_minhas_lembranças_03", "Porta_minhas_lembranças_04", "Porta_minhas_lembranças_05"],
    category: "Eventos",
    sizes: ["Pequeno", "Médio"],
    tags: ["lembrança", "organização", "festa", "personalizado"],
    sku: "EV-001",
    reviews: [
      { id: 1, author: "Camila Farias", rating: 4, date: "2026-03-08", comment: "Ajudou muito na organização da mesa do bolo." }
    ],
  },
  {
    id: 11,
    slug: "porta-saquinhos-maternidade",
    title: "Porta-saquinhos Maternidade",
    description: "Organizador de trocas de roupa para facilitar a rotina na maternidade.",
    longDescription: "Ajuda a separar as trocas do bebê por dia, facilitando o trabalho da enfermaria e dos pais.",
    price: 7000,
    image: "porta-saquinhos",
    images: ["Porta_saquinho_maternidade_01", "Porta_saquinho_maternidade_02", "Porta_saquinho_maternidade_03"],
    category: "Bebê",
    sizes: [],
    tags: ["maternidade", "organização", "malinha", "bebê"],
    sku: "BB-006",
    reviews: [
      { id: 1, author: "Tatiane Luz", rating: 5, date: "2026-02-10", comment: "Essencial para levar para o hospital, facilita muito a vida." }
    ],
  },
  {
    id: 12,
    slug: "saias-e-vestidos-festa-junina",
    title: "Saias e Vestidos de Festa Junina",
    description: "Trajes típicos artesanais com detalhes em rendas e fitas para festas juninas.",
    longDescription: "Vestidos coloridos e rodados para garantir a diversão com muito estilo caipira.",
    price: 13000,
    image: "festa-junina",
    images: ["Saias_e _vestido_de_festa_junina_01", "Saias_e _vestido_de_festa_junina_02", "Saias_e _vestido_de_festa_junina_03", "Saias_e _vestido_de_festa_junina_04", "Saias_e _vestido_de_festa_junina_05", "Saias_e _vestido_de_festa_junina_06", "Saias_e _vestido_de_festa_junina_07", "Saias_e _vestido_de_festa_junina_08", "Saias_e _vestido_de_festa_junina_09", "Saias_e _vestido_de_festa_junina_10", "Saias_e _vestido_de_festa_junina_11", "Saias_e _vestido_de_festa_junina_12", "Saias_e _vestido_de_festa_junina_13", "Saias_e _vestido_de_festa_junina_14"],
    category: "Eventos",
    sizes: ["2 a 8 anos"],
    tags: ["festa junina", "caipira", "fantasia", "artesanal", "infantil"],
    sku: "EV-002",
    reviews: [
      { id: 1, author: "Marcela Silva", rating: 5, date: "2026-03-14", comment: "O vestido é a coisa mais linda, minha filha amou." }
    ],
  },
  {
    id: 13,
    slug: "toalha-rosto-banho-bordada",
    title: "Toalha de Rosto e Banho Bordada",
    description: "Jogo de toalhas de alta gramatura com bordados personalizados.",
    longDescription: "Toalhas macias com barrados bordados. Perfeito para presentear ou para decorar seu banheiro.",
    price: 11000,
    image: "toalha-bordada",
    images: ["Toalha_de_rosto_e_banho_bordada_01", "Toalha_de_rosto_e_banho_bordada_02", "Toalha_de_rosto_e_banho_bordada_03", "Toalha_de_rosto_e_banho_bordada_04"],
    category: "Banho",
    sizes: ["Rosto", "Banho"],
    tags: ["banho", "bordado", "personalizado", "toalha", "presente"],
    sku: "BN-001",
    reviews: [
      { id: 1, author: "Gisele Oliveira", rating: 4, date: "2026-02-05", comment: "Toalha bem felpuda e o bordado é muito bem feito." }
    ],
  },
  {
    id: 14,
    slug: "toalhinha-personalizada-lavabo",
    title: "Toalhinha Personalizada de Lavabo",
    description: "Toalha pequena para lavabo com personalização em bordado.",
    longDescription: "Ideal para visitas ou para levar na bolsa escolar. Bordamos conforme sua preferência.",
    price: 2500,
    image: "toalha-lavabo",
    images: ["Toalhinha_personalizada_de_lavabo_01", "Toalhinha_personalizada_de_lavabo_02", "Toalhinha_personalizada_de_lavabo_03"],
    category: "Banho",
    sizes: ["30x45cm"],
    tags: ["lavabo", "personalizado", "banho", "visita", "bordado"],
    sku: "BN-002",
    reviews: [
      { id: 1, author: "Daniela Ramos", rating: 5, date: "2026-01-25", comment: "Lindo mimo para dar de presente." }
    ],
  },
  {
    id: 15,
    slug: "touca-de-cozinha",
    title: "Touca de Cozinha",
    description: "Touca culinária ajustável para profissionais e entusiastas.",
    longDescription: "Feita em tecido leve e respirável, garante higiene no preparo dos alimentos.",
    price: 2000,
    image: "touca-cozinha",
    images: ["Touca_de_cozinha_01", "Touca_de_cozinha_02"],
    category: "Cozinha",
    sizes: ["Tamanho Único"],
    tags: ["cozinha", "higiene", "gastronomia", "acessório"],
    sku: "AV-004",
    reviews: [
      { id: 1, author: "Marcos Viana", rating: 5, date: "2026-02-18", comment: "Confortável e não esquenta a cabeça." }
    ],
  }
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