// ============================================================
// Conteúdo do portfólio — edite os campos abaixo com seus dados.
// Troque "img" por caminhos de imagens reais quando tiver os arquivos.
// ============================================================

const SITE = {
  name: "Gabriel Nunes",
  role: "Designer",
  email: "ogabnunes@gmail.com",
  linkedin: "linkedin.com/in/ogabnunes",
  instagram: "@osupergab",
  cv: "curriculo.pdf",
};

const PROJECTS = [
  {
    slug: "marca-pessoal",
    client: "Projeto pessoal",
    year: "2025",
    title: "Marca pessoal",
    cover: "assets/marca-pessoal-cover.jpg",
    intro: "Desenvolvimento da identidade visual e marca pessoal como estratégia de consolidação profissional e diferenciação no mercado de design.",
    phases: [
      {
        id: "conceito",
        label: "conceito",
        heading: "Conceito",
        text: "A marca pessoal surge da necessidade de criar uma identidade visual única que representasse meus valores como designer: simplicidade, elegância e funcionalidade. O projeto explora a interseção entre design gráfico e design digital, buscando uma presença forte e coerente.",
        layout: "single",
      },
      {
        id: "desenvolvimento",
        label: "desenvolvimento",
        heading: "Desenvolvimento",
        text: "Através de pesquisa de referências, tipografia cuidadosa e seleção de cores, construí uma marca que funciona tanto em contextos visuais quanto digitais. O processo incluiu refinamentos iterativos para garantir que a identidade funcionasse em diferentes escalas e aplicações.",
        layout: "single",
      },
      {
        id: "resultado",
        label: "resultado",
        heading: "Resultado",
        text: "A marca pessoal foi desenvolvida com elementos dinâmicos e interativos, criando uma experiência visual envolvente que reflete minha proposta de design: criatividade, precisão e inovação.",
        layout: "single",
      },
    ],
  },
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
        text: "Este projeto é um Trabalho de Conclusão de Curso desenvolvido em 2026 para o curso de Bacharelado em Design do Centro Universitário Senac. O projeto é a junção da pesquisa de [...]
        layout: "single",
      },
      {
        id: "fase-2",
        label: "pesquisa",
        heading: "Pesquisa",
        text: "Um dos principais direcionadores do estudo do Pajubá foi o <strong>Aurélia: A Dicionária da Língua Afiada</strong>, o primeiro registro lexicográfico do Pajubá, escrito pelo j[...]
        layout: "book",
        bookCover: "assets/aurélia.avif",
      },
      {
        id: "experimentos",
        label: "experimentos",
        heading: "Experimentos",
        text: "",
        image: "assets/rascunhos.avif",
        imageCaption: "Durante os rascunhos no papel, percebi que as versões condensadas produziam uma metáfora de que assim como a tipografia condensada ocupa espaços reduzidos, travestis hist[...]
        extraImages: [
          {
            image: "assets/experimentos-salto-navalha.webp",
            caption: "Nestes experimentos digitais, trabalhei a tipografia usando itens associados às travestis, como o salto alto e a navalha. Na teoria, a ideia parecia boa, mas na prática, es[...]
          },
          {
            image: "assets/rascunhos1.avif",
            caption: "Ainda nos experimentos digitais, trabalhei com a criação de mais letras diferentes, usando principalmente o direcionamento de traços irregulares, tanto de forma sútil, qu[...]
          },
          {
            image: "assets/rascunho2.avif",
            caption: " Aqui, no experimento final, senti que a tipografia estava chegando perto do resultado esperado: traços retos representando resistência, variação de espessura representan[...]
          },
        ],
        layout: "single",
      },
      {
        id: "desenvolvimento",
        label: "desenvolvimento",
        heading: "Desenvolvimento",
        text: "Depois de chegar em um resultado esperado nos experimentos, o último grupo de caracteres desenvolvidos passou por um refinamento no software Fontra, bem como a criação de alguns [...]
        image: "assets/fontra.avif",
        imageCaption: "Por conta da direção do projeto, principalmente pelo fator da expressão de visibilidade, ficou subentendido que caracteres em caixa baixa não fazem sentido para o objeti[...]
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
  photo: "assets/perfil.jpg",
  intro: "Designer de São Paulo, formado pelo Centro Universitário Senac, com foco em UX/UI Design, produtos digitais e design gráfico. Tenho experiência com projetos de pesquisa, criação d[...]
  softwares: [
    { name: "Figma", icon: "assets/figma.png" },
    { name: "Adobe Illustrator", icon: "assets/illustrator.png" },
    { name: "Notion", icon: "assets/notion.png" },
    { name: "Adobe Photoshop", icon: "assets/photoshop.png" },
    { name: "Adobe InDesign", icon: "assets/indesign.png" },
    { name: "Adobe After Effects", icon: "assets/after-effects.png" },
    { name: "Fontra", icon: "assets/fontra.png" },
  ],
  skills: [
    "UX/UI", "Design Editorial", "Branding",
    "Design System", "Prototipagem", "Comunicação",
    "Adaptabilidade", "Criatividade", "Curiosidade"
  ],
  experience: [
    { period: "jan/2025 — jun/2026", role: "Estagiário - Experiência do Usuário", org: "Getnet" },
    { period: "mai/2023 — dez/2024", role: "Jovem Aprendiz - Proteção de Dados e GCN", org: "Getnet" },
  ],
  education: [
    { period: "fev/2023 — jun/2026", role: "Bacharelado em Design", org: "Centro Universitário Senac" },
    { period: "jan/2020 — jun/2022", role: "Design Gráfico", org: "Escola SAGA" },
  ],
};
