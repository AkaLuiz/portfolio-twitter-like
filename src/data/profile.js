// Edite este arquivo para trocar todo o conteúdo do portfólio.

export const profile = {
  name: 'Luiz Carlos',
  role: 'Full-Stack-dev',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQFNIV_PqxwD-g/profile-displayphoto-scale_400_400/B4DZ_3X8WOIoAg-/0/1786561679064?e=1795046400&v=beta&t=0tM2yYc6eHhNQoLCoYRecUAHRdWVrmEIuoZKRrlq1l8', // URL ou caminho da foto, ex: '/avatar.jpg' (arquivo em /public). Vazio = círculo preto.
  email: 'luizcarlosmdea@gmail.com',
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
}

export const social = [
  { label: 'github', url: 'https://github.com/AkaLuiz' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/luiz-carlos-menezes-de-amorim-filho-416199235/' },
]

const icon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

export const projects = [
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
]

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

export const education = [
  {
    title: 'Bacharelado em Engenharia de Software',
    place: 'UNICEPLAC',
    period: 'Concluído',
  },
  {
    title: 'Curso de inglês (completo)',
    place: 'CIL - Centro Interescolar de Línguas',
    period: 'Concluído',
  },
]

export const experience = [
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
]

export const certificates = [
  { title: 'Cypress: automatizando testes E2E', tags: ['Testes'], place: 'Alura', period: 'jun 2024' },
  { title: 'Java: aplicando a Orientação a Objetos', tags: ['Java'], place: 'Alura', period: 'abr 2024' },
  {
    title: 'Formação Full stack JavaScript: crie um projeto com React e Node.js', tags: ['React', 'Node.js'],
    place: 'Alura',
    period: 'nov 2023',
  },
  { title: 'Certificação Java SE 7 Programmer I', tags: ['Java'], place: 'Alura', period: 'nov 2023' },
  {
    title: 'React e Node.js: consumindo APIs no React no projeto Full Stack', tags: ['React', 'Node.js'],
    place: 'Alura',
    period: 'nov 2023',
  },
  {
    title: 'Node.js: continue seu projeto Full Stack criando uma API com Express', tags: ['Node.js'],
    place: 'Alura',
    period: 'nov 2023',
  },
  { title: 'React: comece seu projeto Full Stack', tags: ['React'], place: 'Alura', period: 'nov 2023' },
]
