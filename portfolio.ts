import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Erika Gomes",
  title: "Ola, Eu sou a Erika",
  description:
    "Como especialista em Design Gráfico e Marketing, com foco em Gestão de Mídias Sociais, meu objetivo é desenvolver estratégias digitais eficazes, combinando design visualmente atraente com conteúdo persuasivo para aumentar o engajamento e impulsionar resultados positivos. Constantemente atualizada nas últimas tendências e melhores práticas, estou pronta para colaborar no crescimento da sua marca ou negócio, oferecendo soluções inovadoras e resultados tangíveis.",
  resumeLink: "https://www.behance.net/erikagomes7",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:eg010822@gmail.com",
  linkedin: "https://www.linkedin.com/in/erika-gomes-558490172/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  instagram: "https://www.instagram.com/socialpopup_/?igsh=cnc0d2w0eW1teXo5",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "O que eu faço",
  subTitle: "Um designer gráfico é um profissional criativo que utiliza habilidades artísticas e técnicas para comunicar mensagens ou ideias através de designs visuais. Alguns exemplos do que um designer gráfico faz incluem:",
  data: [
    {
      title: "Designer Gráfico",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Criação de logotipos e marcas para representar a identidade visual de uma empresa"),
        emoji("⚡ Design de materiais impressos como cartazes, folhetos, cartões de visita, entre outros"),
        emoji("⚡ Criação de gráficos para mídias digitais, como redes sociais e banners web"),
      ],
      softwareSkills: [
        // {
        //   skillName: "Python",
        //   iconifyTag: "logos:python",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Adobe Photoshop", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Lightroom",
    progressPercentage: "90",
  },
  {
    Stack: "Canvas",
    progressPercentage: "95",
  },
  {
    Stack: "CapCut",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Centro Universitário Internacional UNNITER",
    subHeader: "Graduação, Designer Gráfico",
    duration: "Fevereiro 2024 - Fevereiro 2026",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Descomplica",
    subHeader: "Marketing Digital",
    duration: "Junho 2023 - Setembro 2023",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Gerente de Mídias Sociais",
    company: "Transito Livre Modas · Contrato ",
    companyLogo: "/img/icons/common/transito-livre-logo.jpeg",
    date: "Dezembro 2023 - Fevereiro 2024 · 3 Messes",
    desc: "Monitoramento das Redes Sociais, Criação de Cronograma de Postagens Designer Gráfico, Edição de Vídeos e Tratamento de Imagens",
  },
  {
    role: "Assistente de Marketing",
    company: "Lahman · Full-Time",
    companyLogo: "/img/icons/common/lahuman-logo.jpeg",
    date: "Maio 2023 - Julho 2023 · 3 Messes ",
    desc: "Designer Gráfico e Mídias Sociais ",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Design Grafico",
    desc: "Meu portfolio de Design Grafico contendo projetos feitos por mim na plataforma Behance",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://www.behance.net/erikagomes7",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Erika Gomes",
  description: greetings.description,
  author: "Erika Gomes",
  image: "https://mir-s3-cdn-cf.behance.net/user/115/a2d22e117426553.6344a665d3ca1.jpg",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Erika",
    "Erika Desginer",
    "@socialpopup_",
    "socialpopup_",
    "Portfolio",
    "Erika Portfolio ",
    "Erika Designer Portfolio",
  ],
};
