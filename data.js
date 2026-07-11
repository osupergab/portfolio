// ============================================================
// Conteúdo do portfólio — edite os campos abaixo com seus dados.
// Troque "img" por caminhos de imagens reais quando tiver os arquivos.
// ============================================================

const SITE = {
  name: "[Seu Nome]",
  role: "designer de produto",
  email: "ola@seudominio.com",
  linkedin: "linkedin.com/in/seunome",
  instagram: "@seunome",
  cv: "cv-seunome.pdf",
};

const PROJECTS = [
  {
    slug: "projeto-01",
    client: "TCC",
    year: "2026",
    title: "Pajú Type",
    cover: "assets/capa_paju.jpg",
    gallery: [
      "assets/cartaz1.webp",
      "assets/cartaz2.webp",
      "assets/cartaz3.webp",
      "assets/cartaz4.webp",
      "assets/cartaz5.webp",
      "assets/cartaz6.webp",
      "assets/cartaz7.webp",
      "assets/cartaz8.webp",
      "assets/cartaz9.webp",
      "assets/cartaz10.webp",
    ],
    intro: "Um resumo curto de uma linha sobre o problema que esse projeto resolveu.",
    downloads: [
      { label: "Baixar a monografia (PDF)", file: "assets/monografia-paju-type.pdf" },
      { label: "Baixar a fonte (TTF)", file: "assets/paju-type.ttf" },
    ],
    phases: [
      {
        id: "contexto",
        label: "contexto",
        heading: "Contexto",
        text: "Este projeto é um Trabalho de Conclusão de Curso desenvolvido em 2026 para o curso de Bacharelado em Design do Centro Universitário Senac. O projeto é a junção da pesquisa de design tipográfico e expressão cultural para explorar o Pajubá como patrimônio linguístico e ferramenta de representação da cultura travesti brasileira. <br><br> <em><span class=\"text-highlight\">*Fonte e monografia completa do projeto disponíveis para download ao final da página.</em></span> <br><br> O Pajubá é um dialeto que surgiu a partir da convivência entre travestis, mulheres trans e outros grupos LGBTQIA+ no Brasil. Construído a partir de influências de línguas africanas, especialmente do iorubá, o Pajubá foi utilizado historicamente como uma ferramenta de comunicação, proteção e pertencimento, permitindo que essas pessoas compartilhassem informações e experiências em contextos marcados pela exclusão social e pela violência. Com o passar do tempo, muitas de suas expressões ultrapassaram os limites da comunidade e passaram a integrar o vocabulário popular brasileiro. Apesar de sua relevância histórica e cultural, o Pajubá ainda é pouco explorado pelo design como objeto de estudo e representação visual. Grande parte das pesquisas e registros sobre o tema concentra-se em aspectos linguísticos e sociológicos, enquanto suas possibilidades de tradução para a linguagem gráfica permanecem pouco investigadas. Dessa forma, existe uma oportunidade de utilizar o design, e principalmente a tipografia, como ferramenta para valorizar, preservar e ampliar a visibilidade desse patrimônio cultural. Foi a partir desse contexto que surgiu a Pajú Type. O projeto busca transformar conceitos como visibilidade, ocupação de espaços, resistência e afirmação identitária em linguagem tipográfica, estabelecendo uma ponte entre cultura, linguagem e design. Como resultado, foi desenvolvida uma tipografia autoral inspirada no universo do Pajubá e aplicada em uma coleção de dez cartazes.",
        layout: "single",
      },
      {
        id: "fase-2",
        label: "pesquisa",
        heading: "Pesquisa",
        text: "Um dos principais direcionadores do estudo do Pajubá foi o <strong>Aurélia: A Dicionária da Língua Afiada</strong>, o primeiro registro lexicográfico do Pajubá, escrito pelo jornalista Vitor Angelo e o pesquisador Fred Libi, com mais de 140 páginas de verbetes e expressões populares usadas dentro da comunidade LGBTQ+, incluindo o pajubá. <br><br> O principal ponto de análise é o mapeamento do pajubá não só como dialeto, mas como uma linguagem de resistência entre travestis e mulheres trans. Sua estrutura interseccional, que funde o português com raízes africanas (iorubá/nagô) e indígenas (tupi) reflete a solidariedade entre grupos marginalizados.",
        layout: "book",
        bookCover: "assets/aurélia.avif",
      },
      {
        id: "experimentos",
        label: "experimentos",
        heading: "Experimentos",
        text: "",
        image: "assets/rascunhos.avif",
        imageCaption: "Durante os rascunhos no papel, percebi que as versões condensadas produziam uma metáfora de que assim como a tipografia condensada ocupa espaços reduzidos, travestis historicamente precisaram ocupar espaços que não haviam sido pensados para elas.",
        extraImages: [
          {
            image: "assets/experimentos-salto-navalha.webp",
            caption: "Nestes experimentos digitais, trabalhei a tipografia usando itens associados às travestis, como o salto alto e a navalha. Na teoria, a ideia parecia boa, mas na prática, estava muito associada a uma cultura urbana da travesti, e o objetivo do projeto não era associar a travesti com a urbanidade.",
          },
          {
            image: "assets/rascunhos1.avif",
            caption: "Ainda nos experimentos digitais, trabalhei com a criação de mais letras diferentes, usando principalmente o direcionamento de traços irregulares, tanto de forma sútil, quanto de forma explicita.",
          },
          {
            image: "assets/rascunho2.avif",
            caption: " Aqui, no experimento final, senti que a tipografia estava chegando perto do resultado esperado: traços retos representando resistência, variação de espessura representando tensão visual, tipos condensados e terminais pontiagudos inspirados no salto alto.",
          },
        ],
        layout: "single",
      },
      {
        id: "desenvolvimento",
        label: "desenvolvimento",
        heading: "Desenvolvimento",
        text: "Depois de chegar em um resultado esperado nos experimentos, o último grupo de caracteres desenvolvidos passou por um refinamento no software Fontra, bem como a criação de alguns caracteres especiais e variação de espessura.",
        image: "assets/fontra.avif",
        imageCaption: "Por conta da direção do projeto, principalmente pelo fator da expressão de visibilidade, ficou subentendido que caracteres em caixa baixa não fazem sentido para o objetivo do projeto, por isso, apenas caracteres em caixa alta foram desenvolvidos.",
        extraImages: [
        ],
        layout: "single",
      },
      {
        id: "resultado",
        label: "resultado",
        heading: "Resultado",
        text: "",
        video: "assets/paju-type-resultado.mp4",
        extraImages: [
          { image: "assets/resultado-alfabeto.png" },
          { image: "assets/resultado-pesos.png" },
        ],
        showGallery: true,
        layout: "single",
      },
    ],
  },
  {
    slug: "projeto-02",
    client: "Cliente B",
    year: "2025",
    title: "Nome do trabalho",
    cover: null,
    intro: "Um resumo curto de uma linha sobre o problema que esse projeto resolveu.",
    phases: [
      {
        id: "fase-1",
        label: "fase 1",
        heading: "Descoberta",
        text: "Descreva aqui o contexto do projeto: o problema, o time envolvido e o que motivou o trabalho.",
        layout: "single",
      },
      {
        id: "fase-2",
        label: "fase 2",
        heading: "Exploração",
        text: "Explique o processo de exploração de soluções, testes e iterações realizadas.",
        layout: "triple",
      },
      {
        id: "fase-3",
        label: "fase 3",
        heading: "Resultado",
        text: "Apresente o resultado final e o impacto do projeto.",
        layout: "single",
      },
    ],
  },
  {
    slug: "projeto-03",
    client: "Cliente C",
    year: "2025",
    title: "Nome do trabalho",
    cover: null,
    intro: "Um resumo curto de uma linha sobre o problema que esse projeto resolveu.",
    phases: [
      {
        id: "fase-1",
        label: "fase 1",
        heading: "Descoberta",
        text: "Descreva aqui o contexto do projeto e o que motivou o trabalho.",
        layout: "single",
      },
      {
        id: "fase-2",
        label: "fase 2",
        heading: "Exploração",
        text: "Explique o processo de exploração de soluções.",
        layout: "triple",
      },
      {
        id: "fase-3",
        label: "fase 3",
        heading: "Resultado",
        text: "Apresente o resultado final e o impacto do projeto.",
        layout: "single",
      },
    ],
  },
  {
    slug: "projeto-04",
    client: "Cliente D",
    year: "2024",
    title: "Nome do trabalho",
    cover: null,
    intro: "Um resumo curto de uma linha sobre o problema que esse projeto resolveu.",
    phases: [
      {
        id: "fase-1",
        label: "fase 1",
        heading: "Descoberta",
        text: "Descreva aqui o contexto do projeto e o que motivou o trabalho.",
        layout: "single",
      },
      {
        id: "fase-2",
        label: "fase 2",
        heading: "Exploração",
        text: "Explique o processo de exploração de soluções.",
        layout: "triple",
      },
      {
        id: "fase-3",
        label: "fase 3",
        heading: "Resultado",
        text: "Apresente o resultado final e o impacto do projeto.",
        layout: "single",
      },
    ],
  },
];

const ABOUT = {
  intro: "Sou designer de produto com experiência em pensar sistemas, não apenas telas. Gosto de projetos onde pesquisa, interface e conteúdo caminham juntos — e onde dá pra medir se o trabalho realmente ajudou alguém.\n\nNos últimos anos trabalhei em produtos B2B e B2C, sempre próxima de times de produto e engenharia, cuidando do processo do início ao fim.",
  softwares: ["Figma", "Framer", "Notion", "Principle", "Illustrator"],
  skills: [
    "Design de produto", "Design system", "Prototipagem",
    "Pesquisa com usuários", "UX writing", "Design de interação",
    "Facilitação de workshops", "Handoff para dev",
  ],
  experience: [
    { period: "2024 — atual", role: "Product Designer", org: "Nome da empresa" },
    { period: "2022 — 2024", role: "Product Designer", org: "Nome da empresa" },
  ],
  education: [
    { period: "2020 — 2022", role: "Design de Produto", org: "Nome da instituição" },
    { period: "2016 — 2020", role: "Design Gráfico", org: "Nome da instituição" },
  ],
};
