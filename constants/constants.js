export const websites = [
  {
    title: "Nene´s Gym Kinder",
    description:
      "WordPress webpage for a kyndergarten with private sections for parents to watch grades onine classes during the pandemic",
    image: "/images/websites/nenes-full.jpg",
    tags: ["WordPress", "SEO", "Google Business"],
    source: null,
    visit: "https://nenesgym.edu.mx/",
  },
  {
    title: "Kosmos.la",
    description:
      "Kosmos.la is a company that solves the problem of credit placement through automated processes and digital channels.",
    image: "/images/websites/kosmos-cover.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    source: null,
    visit: "https://kosmos.la/",
  },
  {
    title: "Banorte credit card online processing",
    description:
      "UI Development based on received design for Kosmos.la company.",
    image: "/images/websites/banorte-tarjetas-cover.jpg",
    tags: ["HTML", "CSS", "Javascript", "JQuery"],
    source: "https://mcomi.github.io/banorte-tarjeta-kosmos/",
    visit: "https://www.tarjetas.creditobanorte.com/",
  },
  {
    title: "Consupago online credit application",
    description:
      "UI Development based on received design for Kosmos.la company.",
    image: "/images/websites/consupago-cover.jpg",
    tags: ["HTML", "CSS", "Javascript", "JQuery"],
    source: "https://mcomi.github.io/kosmos-consupago/",
    visit: "https://ats.consubanco.com/",
  },
  {
    title: "Credenz Landing Page",
    description:
      "UI Development based on received design for Kosmos.la company.",
    image: "/images/websites/credenz-cover.jpg",
    tags: ["HTML", "CSS", "Javascript", "JQuery"],
    source: null,
    visit: "https://creditocredenz.com/",
  },
  {
    title: "Al Día Landing Page",
    description:
      "UI Development based on received design for Kosmos.la company.",
    image: "/images/websites/aldia-cover.jpg",
    tags: ["HTML", "CSS", "Javascript", "JQuery"],
    source: "https://aldia.netlify.app/",
    visit: null,
  },
];

export const projects = [
  {
    title: "CLAF",
    description: `Stands for Logistical Control of the Film Archive and is a collection management software to 
      preserve film archives. It is a private project but I show images and a presentation that was made in 2019 when 
      it was recognized within UNAM as a software engineering project of high institutional impact.`,
    technical: [
      "Re-engineering of the film archive database model.",
      "Java + Spring API secure with JWT.",
      "AngularJS Front end client.",
      "Among others.",
    ],
    image: "/images/websites/claf-cover.jpg",
    tags: ["AngularJS", "Bootstrap", "API", "JWT", "Java", "Spring", "MySQL"],
    source: null,
    visit: "https://claf-conti-redis.netlify.app/",
  },
  {
    title: "Gatsby + Stripe Demo",
    description:
      "Basic e-commerce app build with Gatsby and integrated with Stripe API for payments.",
    technical: [
      "Integrate Stripe Products SKU's with GrapQL.",
      "Integrate payment success and cancel redirection.",
      "Use gatsby-image plugin for creating optimized images.",
    ],
    image: "/images/websites/gatsby-demo-cover.jpg",
    tags: ["Gatsby", "GraphQL", "Styled Components", "Stripe API"],
    source: "https://github.com/mcomi/gatsby-shop",
    visit: "https://gatsby-demo-stripe.netlify.app/",
  },
  {
    title: "24-hour online movie streamings",
    description:
      "Web template using Tailwind CSS integrated to an automatized process for Deployment used to schedule 24-hour online movie streamings.",
    technical: [
      "Automatize server process for build and deploy changes with docker.",
      "Configure FTP Server for designers to update page.",
      "Docker configuration for building an nginx server with the page updates.",
    ],
    image: "/images/websites/eventos-film-cover.jpg",
    tags: ["Docker", "Linux Deamons", "Tailwind CSS"],
    source: "",
    visit: "https://eventos.filmoteca.unam.mx/",
  },
  {
    title: "Filmoramas",
    description:
      "Online interactive memory games as an activity for the 60th Filmoteca's UNAM anniversary during pandemic.",
    technical: [
      "CSS animations for the interaction of the cards.",
      "NodeJS API with MySQL to storage different games, users and ranking table.",
      "Docker configuration for building an nginx server with the page updates.",
    ],
    image: "/images/websites/filmorama-cover.jpg",
    tags: ["NodeJS", "CSS", "Javascript", "JQuery", "MySQL"],
    source: null,
    visit: "https://reto.filmoteca.unam.mx/",
  },
  {
    title: "Sign PDF by coordinates",
    description:
      "Online demo for signing PDF documents from estbalished coordinates on every page.",
    technical: [
      "PDFjs and PDF-lib libraries for manipulation PDF on the web.",
      "Reading JSON values to establish signatures coordinates.",
      "Using Canvas for capturing signatures.",
    ],
    image: "/images/websites/firmar-pdf-cover.jpg",
    tags: ["CSS", "Javascript", "PDFjs", "PDF-lib"],
    source: "https://github.com/mcomi/pdf-sign",
    visit: "https://mcomi.github.io/pdf-sign/",
  },
];
