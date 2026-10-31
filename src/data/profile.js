// Edite este arquivo para trocar todo o conteúdo do portfólio.
// Textos traduzíveis ficam em `content.pt` e `content.en`; o resto é comum aos dois idiomas.

export const profile = {
  name: 'Luiz Carlos',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQFNIV_PqxwD-g/profile-displayphoto-scale_400_400/B4DZ_3X8WOIoAg-/0/1786561679064?e=1795046400&v=beta&t=0tM2yYc6eHhNQoLCoYRecUAHRdWVrmEIuoZKRrlq1l8', // URL ou caminho da foto, ex: '/avatar.jpg' (arquivo em /public). Vazio = círculo preto.
  email: 'luizcarlosmdea@gmail.com',
}

export const social = [
  { label: 'github', url: 'https://github.com/AkaLuiz' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/luiz-carlos-menezes-de-amorim-filho-416199235/' },
]

const icon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

export const skills = [
  { name: 'HTML5', icon: icon('html5') },
  { name: 'CSS3', icon: icon('css3') },
  { name: 'JavaScript', icon: icon('javascript') },
  { name: 'React', icon: icon('react') },
  { name: 'Spring Boot', icon: icon('spring') },
  { name: 'Node.js', icon: icon('nodejs') },
  { name: 'Java', icon: icon('java') },
  { name: 'Python', icon: icon('python') },
  { name: 'Flask', icon: icon('flask') },
  { name: 'Docker', icon: icon('docker') },
  { name: 'Linux', icon: icon('linux') },
  { name: 'AWS Lightsail', icon: icon('amazonwebservices') },
]

export const hardSkills =
  'HTML5 - CSS3 - JAVASCRIPT - REACT.JS - SPRINGBOOT - NODE.JS - JAVA - PYTHON - FLASK - DOCKER - LINUX - AWS LIGHTSAIL'

export const content = {
  pt: {
    htmlLang: 'pt-BR',
    pageTitle: 'Portfólio',
    metaDescription: 'Portfólio em formato de timeline.',
    role: 'Full-Stack-dev',
    ui: {
      hire: 'CONTRATAR',
      all: 'Todos',
      filterCerts: 'Filtrar certificados',
      noCerts: 'Nenhum certificado nessa categoria.',
      soon: 'Em breve.',
      hardSkills: 'Hard Skills',
      close: 'Fechar',
      visit: (host) => `Visitar ${host}`,
      language: 'Idioma',
      readingFont: 'Fonte do site',
      fonts: { padrao: 'Padrão', serif: 'Serifada', mono: 'Código', legivel: 'Alta legibilidade' },
      lightOn: 'Ativar modo claro',
      darkOn: 'Ativar modo escuro',
      lightTitle: 'Modo claro',
      darkTitle: 'Modo escuro',
      resetSize: 'Restaurar tamanho padrão',
      fontSize: 'Tamanho da fonte',
      technologies: 'Tecnologias',
    },
    nav: [
      { id: 'projetos', label: 'projetos' },
      { id: 'habilidades', label: 'habilidades' },
      { id: 'educacao', label: 'educação' },
      { id: 'experiencia', label: 'experiência' },
      { id: 'certificados', label: 'certificados' },
      { id: 'contato', label: 'contato' },
    ],
    sections: {
      projetos: 'PROJETOS',
      habilidades: 'HABILIDADES',
      educacao: 'EDUCAÇÃO',
      experiencia: 'EXPERIÊNCIA',
      certificados: 'CERTIFICADOS',
      contato: 'CONTATO',
    },
    hero: {
      greeting: 'Olá, eu sou o Luiz 👋',
      title: 'Engenheiro de Software',
      subtitle: 'Back-end com **Java** e **Spring**, front-end com **React**.',
    },
    about: {
      title: 'Quem sou eu?',
      text: [
        '**Analista Programador** no **ONRTDPJ** (vinculado ao **CNJ**), desenvolvendo e dando suporte a sistemas usados por cartórios de todo o Brasil.',
        'Combino desenvolvimento e análise de dados: **APIs REST** em **Java (Spring)**, plataformas internas com **containers** e deploy em produção, e dashboards sobre mais de **3.000 cartórios** e **5 milhões de protocolos**.',
      ],
    },
    projects: [
      {
        title: 'AKA PDF',
        url: 'https://akapdf.com.br',
        image: '/akapdf.png',
        position: 'left top',
        description: [
          'Conjunto de **ferramentas online para documentos**, feito para entregar **PDFs prontos para enviar e imprimir**, com alta qualidade.',
          'Permite **aumentar o DPI** de um arquivo (até 300 DPI), **combinar vários arquivos** em um só e **transformar imagens em PDF**, tudo de forma rápida e direta. Os arquivos enviados são **temporários**.',
        ],
      },
      {
        title: 'Kernel 32 bits',
        url: 'https://github.com/AkaLuiz/Kernel-32-bit-OSDev',
        linkLabel: 'Ver código no GitHub',
        image: '/kernel.png',
        position: 'left top',
        description: [
          'Kernel **x86 de 32 bits** escrito do zero, baseado no tutorial **Bare Bones** da OSDev Wiki. O objetivo é entender todo o fluxo de inicialização: **bootloader → Assembly → C → escrita direta na memória de vídeo (VGA)**.',
          'O **GRUB** carrega o kernel via **Multiboot**; um código em **Assembly** monta a stack e chama o **kernel_main()** em **C**, que escreve na tela em modo texto (80×25). Sem libc: tudo é implementado do zero, compilado com um cross-compiler **i686-elf**.',
          'O build é automatizado com **Makefile**, gera uma **ISO** bootável com **grub-mkrescue** e roda no **QEMU**. O projeto já tem módulos de terminal, teclado e shell.',
        ],
      },
      {
        title: 'Y (Twitter-like)',
        url: 'https://github.com/AkaLuiz/Twitter-Like',
        linkLabel: 'Ver código no GitHub',
        image: '/twitter-like.png',
        position: 'center',
        description: [
          'Rede social no estilo Twitter, feita como projeto de portfólio: **full-stack completo**, com **API** e **interface** próprias. Dá para criar conta, postar, curtir, repostar, comentar, seguir pessoas e trocar a foto de perfil.',
          '**Back-end** em **Java 17** e **Spring Boot**, com **MySQL**, autenticação com **JWT** e senhas com **BCrypt**. **Front-end** em **React 18** com **React Router**, em CSS puro, com identidade visual própria.',
          'Tudo sobe junto com **Docker Compose** (banco, API e front com **Nginx**). Também tem upload de foto, paginação do feed e notificações em toast.',
        ],
      },
    ],
    education: [
      { title: 'Bacharelado em Engenharia de Software', place: 'UNICEPLAC', period: 'Concluído' },
      { title: 'Curso de inglês (completo)', place: 'CIL - Centro Interescolar de Línguas', period: 'Concluído' },
    ],
    experience: [
      {
        title: 'Analista Programador',
        place: 'ONRTDPJ · Tempo integral · Brasília, DF',
        period: 'fev 2026 - atual',
        description:
          'Projetei, desenvolvi e implantei do zero uma plataforma interna de **HRMS** (gestão de colaboradores, férias e patrimônios) na **AWS Lightsail**, com **APIs REST**.',
      },
      {
        title: 'Analista de Suporte Técnico',
        place: 'ONRTDPJ · Brasília, DF',
        period: 'jul 2023 - fev 2026',
        description:
          'Atendimento, diagnóstico e solução de incidentes reportados por usuários da plataforma digital via chat online. Desenvolvimento de **API** integrada a serviços externos para automatizar procedimentos.',
      },
      {
        title: 'React Native Developer',
        place: 'Centro Universitário UNICEPLAC · Aprendizado · Remoto',
        period: 'abr 2023 - jul 2023',
        description:
          'Desenvolvedor front-end com **React Native** na startup da **UNICEPLAC**, criando interfaces mobile a partir de protótipos do **Figma**.',
      },
    ],
    certificates: [
      { title: 'Cypress: automatizando testes E2E', tags: ['Testes'], place: 'Alura', period: 'jun 2024' },
      { title: 'Java: aplicando a Orientação a Objetos', tags: ['Java'], place: 'Alura', period: 'abr 2024' },
      {
        title: 'Formação Full stack JavaScript: crie um projeto com React e Node.js',
        tags: ['React', 'Node.js'],
        place: 'Alura',
        period: 'nov 2023',
      },
      { title: 'Certificação Java SE 7 Programmer I', tags: ['Java'], place: 'Alura', period: 'nov 2023' },
      {
        title: 'React e Node.js: consumindo APIs no React no projeto Full Stack',
        tags: ['React', 'Node.js'],
        place: 'Alura',
        period: 'nov 2023',
      },
      {
        title: 'Node.js: continue seu projeto Full Stack criando uma API com Express',
        tags: ['Node.js'],
        place: 'Alura',
        period: 'nov 2023',
      },
      { title: 'React: comece seu projeto Full Stack', tags: ['React'], place: 'Alura', period: 'nov 2023' },
    ],
  },

  en: {
    htmlLang: 'en',
    pageTitle: 'Portfolio',
    metaDescription: 'Portfolio in a timeline format.',
    role: 'Full-Stack Dev',
    ui: {
      hire: 'HIRE ME',
      all: 'All',
      filterCerts: 'Filter certificates',
      noCerts: 'No certificates in this category.',
      soon: 'Coming soon.',
      hardSkills: 'Hard Skills',
      close: 'Close',
      visit: (host) => `Visit ${host}`,
      language: 'Language',
      readingFont: 'Site font',
      fonts: { padrao: 'Default', serif: 'Serif', mono: 'Code', legivel: 'High legibility' },
      lightOn: 'Switch to light mode',
      darkOn: 'Switch to dark mode',
      lightTitle: 'Light mode',
      darkTitle: 'Dark mode',
      resetSize: 'Reset to default size',
      fontSize: 'Font size',
      technologies: 'Technologies',
    },
    nav: [
      { id: 'projetos', label: 'projects' },
      { id: 'habilidades', label: 'skills' },
      { id: 'educacao', label: 'education' },
      { id: 'experiencia', label: 'experience' },
      { id: 'certificados', label: 'certificates' },
      { id: 'contato', label: 'contact' },
    ],
    sections: {
      projetos: 'PROJECTS',
      habilidades: 'SKILLS',
      educacao: 'EDUCATION',
      experiencia: 'EXPERIENCE',
      certificados: 'CERTIFICATES',
      contato: 'CONTACT',
    },
    hero: {
      greeting: "Hi, I'm Luiz 👋",
      title: 'Software Engineer',
      subtitle: 'Back-end with **Java** and **Spring**, front-end with **React**.',
    },
    about: {
      title: 'Who am I?',
      text: [
        '**Software Analyst** at **ONRTDPJ** (linked to the **CNJ**, Brazil\'s National Council of Justice), building and supporting systems used by notary offices across Brazil.',
        'I combine development and data analysis: **REST APIs** in **Java (Spring)**, internal platforms with **containers** and production deployment, and dashboards covering over **3,000 notary offices** and **5 million protocols**.',
      ],
    },
    projects: [
      {
        title: 'AKA PDF',
        url: 'https://akapdf.com.br',
        image: '/akapdf.png',
        position: 'left top',
        description: [
          'A set of **online document tools**, built to deliver **high-quality, ready-to-send and ready-to-print PDFs**.',
          'It lets you **increase a file\'s DPI** (up to 300 DPI), **merge several files** into one and **convert images to PDF**, quickly and directly. Uploaded files are **temporary**.',
        ],
      },
      {
        title: '32-bit Kernel',
        url: 'https://github.com/AkaLuiz/Kernel-32-bit-OSDev',
        linkLabel: 'View code on GitHub',
        image: '/kernel.png',
        position: 'left top',
        description: [
          'A **32-bit x86 kernel** written from scratch, based on the OSDev Wiki **Bare Bones** tutorial. The goal is to understand the whole boot flow: **bootloader → Assembly → C → writing directly to video memory (VGA)**.',
          '**GRUB** loads the kernel via **Multiboot**; **Assembly** code sets up the stack and calls **kernel_main()** in **C**, which writes to the screen in text mode (80×25). No libc: everything is implemented from scratch, built with an **i686-elf** cross-compiler.',
          'The build is automated with a **Makefile**, produces a bootable **ISO** with **grub-mkrescue** and runs on **QEMU**. The project already has terminal, keyboard and shell modules.',
        ],
      },
      {
        title: 'Y (Twitter-like)',
        url: 'https://github.com/AkaLuiz/Twitter-Like',
        linkLabel: 'View code on GitHub',
        image: '/twitter-like.png',
        position: 'center',
        description: [
          'A Twitter-style social network built as a portfolio project: a **complete full-stack app** with its own **API** and **interface**. You can sign up, post, like, repost, comment, follow people and change your profile picture.',
          '**Back-end** in **Java 17** and **Spring Boot**, with **MySQL**, **JWT** authentication and **BCrypt** passwords. **Front-end** in **React 18** with **React Router**, in plain CSS, with its own visual identity.',
          'Everything comes up together with **Docker Compose** (database, API and front-end with **Nginx**). It also has photo upload, feed pagination and toast notifications.',
        ],
      },
    ],
    education: [
      { title: "Bachelor's Degree in Software Engineering", place: 'UNICEPLAC', period: 'Completed' },
      { title: 'English course (full)', place: 'CIL - Centro Interescolar de Línguas', period: 'Completed' },
    ],
    experience: [
      {
        title: 'Software Analyst',
        place: 'ONRTDPJ · Full-time · Brasília, DF',
        period: 'Feb 2026 - present',
        description:
          'Designed, built and deployed from scratch an internal **HRMS** platform (employee, vacation and asset management) on **AWS Lightsail**, with **REST APIs**.',
      },
      {
        title: 'Technical Support Analyst',
        place: 'ONRTDPJ · Brasília, DF',
        period: 'Jul 2023 - Feb 2026',
        description:
          'Handled, diagnosed and solved incidents reported by users of the digital platform through online chat. Built an **API** integrated with external services to automate procedures.',
      },
      {
        title: 'React Native Developer',
        place: 'Centro Universitário UNICEPLAC · Apprenticeship · Remote',
        period: 'Apr 2023 - Jul 2023',
        description:
          'Front-end developer with **React Native** at the **UNICEPLAC** startup, building mobile interfaces from **Figma** prototypes.',
      },
    ],
    certificates: [
      { title: 'Cypress: automating E2E tests', tags: ['Testing'], place: 'Alura', period: 'Jun 2024' },
      { title: 'Java: applying Object-Oriented Programming', tags: ['Java'], place: 'Alura', period: 'Apr 2024' },
      {
        title: 'Full Stack JavaScript Track: build a project with React and Node.js',
        tags: ['React', 'Node.js'],
        place: 'Alura',
        period: 'Nov 2023',
      },
      { title: 'Java SE 7 Programmer I Certification', tags: ['Java'], place: 'Alura', period: 'Nov 2023' },
      {
        title: 'React and Node.js: consuming APIs in React in the Full Stack project',
        tags: ['React', 'Node.js'],
        place: 'Alura',
        period: 'Nov 2023',
      },
      {
        title: 'Node.js: continue your Full Stack project by building an API with Express',
        tags: ['Node.js'],
        place: 'Alura',
        period: 'Nov 2023',
      },
      { title: 'React: start your Full Stack project', tags: ['React'], place: 'Alura', period: 'Nov 2023' },
    ],
  },
}
