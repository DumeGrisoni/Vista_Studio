const navLinks = [
  {
    name: 'Projets',
    link: '#work',
  },
  {
    name: 'Conception',
    link: '#workflow',
  },
  {
    name: 'Competences',
    link: '#skills',
  },
];

const words = [
  { text: 'une Idée', imgPath: './images/ideas.svg' },
  { text: 'un Concept', imgPath: './images/concepts.svg' },
  { text: 'un Design', imgPath: './images/designs.svg' },
  { text: 'un Code', imgPath: './images/code.svg' },
  { text: 'une Idée', imgPath: './images/ideas.svg' },
  { text: 'un Concept', imgPath: './images/concepts.svg' },
  { text: 'un Design', imgPath: './images/designs.svg' },
  { text: 'un Code', imgPath: './images/code.svg' },
];

const counterItems = [
  { value: 3, suffix: '+', label: "Années d'experience" },
  { value: 2000, suffix: '+', label: 'Cafés bus' },
  { value: 100000, suffix: '+', label: 'Lignes écrites' },
  { value: 20, suffix: '+', label: 'Projets réalisés' },
];

const logoIconsList = [
  {
    imgPath: './images/logos/company-logo-1.png',
  },
  {
    imgPath: './images/logos/company-logo-2.png',
  },
  {
    imgPath: './images/logos/company-logo-3.png',
  },
  {
    imgPath: './images/logos/company-logo-4.png',
  },
  {
    imgPath: './images/logos/company-logo-5.png',
  },
  {
    imgPath: './images/logos/company-logo-6.png',
  },
];

const abilities = [
  {
    imgPath: './images/seo.png',
    title: 'Expertise',
    desc: 'Un accompagnement sur mesure et un travail soigné, pour des résultats qui vous ressemblent.',
  },
  {
    imgPath: './images/chat.png',
    title: 'Transparence à chaque étape',
    desc: 'Un suivi régulier pour avancer ensemble dans la même direction.',
  },
  {
    imgPath: './images/time.png',
    title: 'Délais maîtrisés',
    desc: 'Chaque étape est planifiée pour garantir une livraison ponctuelle et sans compromis sur la qualité.',
  },
];

const techStackImgs = [
  {
    name: 'React & React Native',
    imgPath: './images/logos/react.png',
  },
  {
    name: 'Backend Node.js',
    imgPath: './images/logos/node.png',
  },
  {
    name: "Développeur d'expériences interactives",
    imgPath: './images/logos/three.png',
  },
  {
    name: 'Accompagnateur digital',
    imgPath: './images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'React & React Native',
    desc: 'Interfaces Web & Mobile Dynamiques',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Node.js',
    desc: 'Serveur Rapide en JavaScript',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Three.js',
    desc: 'Graphismes 3D pour le Web',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Appwrite',
    desc: 'Service de gestion données des applications.',
    modelPath: '/models/appWrite.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'GitHub',
    desc: 'Plateforme de partage de projets Web et Mobile.',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Échange initial pour définir vos besoins, suivi d'un devis. Une fois validé, je réalise un premier design pour poser les bases du projet.",
    imgPath: './images/exp1.png',
    logoPath: './images/logo1.png',
    title: 'Premier Contact',
    responsibilities: [
      'Échange initial avec les clients pour comprendre leurs besoins, leurs objectifs et les contraintes spécifiques du projet.',
      'Conseils personnalisés sur les choix techniques et créatifs en fonction de la nature du projet (site vitrine, application Mobile, site de vente, etc.).',
      "Rédaction et envoi d'un devis clair et détaillé. Une fois accepté, création d'un premier design pour valider la direction visuelle avec le client.",
    ],
  },
  {
    review:
      'Après validation du design, je développe un prototype fonctionnel ou une version bêta, prête à être dévoilée mais encore sujette à des ajustements avant la version finale.',
    imgPath: './images/exp2.png',
    logoPath: './images/logo2.png',
    title: 'Prototype',
    responsibilities: [
      "Développement du site ou de l'application selon les spécifications validées.",
      'Intégration de la base de données, si nécessaire, pour assurer la fonctionnalité complète.',
      "Présentation régulière des progrès pour obtenir vos retours et ajuster le projet en temps réel, jusqu'à atteindre une version stable et prête pour les ajustements finaux.",
    ],
  },
  {
    review:
      "J'effectue les derniers ajustements et tests pour garantir la stabilité et la performance de l'application avant sa mise en ligne.",
    imgPath: './images/exp3.png',
    logoPath: './images/logo3.png',
    title: 'React Native Developer',
    date: 'March 2019 - May 2020',
    responsibilities: [
      "Optimisation et tests finaux pour assurer la performance et la stabilité de l'application.",
      'Ajustements en fonction des retours finaux pour peaufiner les derniers détails.',
      "Préparation du projet pour la mise en ligne ou la livraison, garantissant qu'il répond aux exigences du client et fonctionne de manière optimale.",
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: './images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: './images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: './images/logo3.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: './images/insta.png',
  },
  {
    name: 'fb',
    imgPath: './images/fb.png',
  },
  {
    name: 'x',
    imgPath: './images/x.png',
  },
  {
    name: 'linkedin',
    imgPath: './images/linkedin.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
