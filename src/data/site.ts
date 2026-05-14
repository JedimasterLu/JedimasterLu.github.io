import settings from "./site-settings.json";

type NewsItem = {
  date: string;
  text: string;
};

type ProjectFigure = {
  imageName: string;
  caption: string;
};

type Project = {
  title: string;
  paragraphs: string[];
  figure?: ProjectFigure;
};

type EducationEntry = {
  degree: string;
  time: string;
  major: string;
  school: string;
  bullets: string[];
};

type SkillRow = {
  category: string;
  details: string;
};

type AdditionalInfoItem = {
  title: string;
  body: string;
};

const siteUrl = settings.siteUrl;
const github = settings.github;
const linkedin = settings.linkedin;
const scholarId = settings.scholarId;
const authorName = settings.authorName;
const email = settings.email;

export const site = {
  meta: {
    title: settings.metaTitle,
    description: settings.metaDescription,
    keywords: settings.metaKeywords,
    author: authorName,
    robots: "index, follow",
    canonical: siteUrl,
    googleSiteVerification: settings.googleSiteVerification,
    favicon: settings.favicon,
  },
  brand: {
    header: "natural portfolio",
    footer: "Natural Portfolio",
  },
  header: {
    kicker: "Review",
    linkText: siteUrl,
  },
  hero: {
    name: authorName,
    subtitle: "PhD Student in MSE | Graduate Research Assistant",
  },
  contact: {
    addressLines: ["205 Gates Rd, Room 1101.6", "West Lafayette, IN 47907"],
    email,
    lastUpdatedLabel: "Last updated:",
  },
  about: {
    paragraphs: [
      "I am a PhD student in MSE working with <a href=\"https://www.jingangli.org\" target=\"_blank\" rel=\"noopener\">Prof. Jingang Li</a> at Purdue University. My research lies at the intersection of nanomaterials, optics, neuromorphic computing, and AI for science.",
      "I earned a bachelor’s degree at Shanghai Jiao Tong University, studying in the Hsu Tzuyao Honor Class of School of Materials Science and Engineering. My graduation thesis won the Best Bachelor’s Thesis (top 1%) in 2025. My undergraduate work covers high-throughput experiments, optical phase change materials, phase field simulation, and solid-state electrolytes.",
      "Please feel free to contact me if you are interested in my work or have any questions. I’d be glad to hear from you!",
    ],
  },
  news: [
    {
      date: "Jan 28, 2026",
      text: "My handbook chapter “Exciton dynamics in 2D quantum material heterostructures” is accepted by The Handbook of Two Dimensional Quantum Materials and Energy Applications!",
    },
    {
      date: "Aug 26, 2025",
      text: "I become a MSE PhD student in Prof. Jingang Li’s lab at Purdue University. Look forward to the study and life here!",
    },
    {
      date: "Jun 30, 2025",
      text: "I graduate from SJTU as an outstanding graduate of the university. Will never forget the wonderful past 4 years in SJTU.",
    },
    {
      date: "Aug 24, 2024",
      text: "My new website is live! I will be updating this website with my research, publications, and other news. Stay tuned!",
    },
  ],
  publications: {
    bibFileName: "papers.bib",
    authorName,
  },
  projects: [
    {
      title: "Deep learning enhanced plasmonic physical unclonable function",
      paragraphs: [
        "Data stored in non-volatile memories is vulnarable to attack, especially in the AI era. For advanced security applications, we utilized the stochaisic dark field scattering signal of plasmonic structures formed via solid-state dewetting as permanant and unclonable fingerprints called physical unclonable functions. To overcome the instable imaging condition and artifacts, we trained a ConvNext-based model with deep contrastive learning, which exhibits extraordinary reliability under mechanical vibration and color shifting. This work is currently under review.",
      ],
    },
    {
      title: "High-throughput screening of phase change materials",
      figure: {
        imageName: "hts_cover.png",
        caption:
          "Fig 2 | Schematics of quarternary combinatorial thin film with various periodic configurations.",
      },
      paragraphs: [
        "This project systematically investigated the composition-parameter-structure-property relations of combinatorial super-latticelike thin films of GeSbSn(Se) and GeSbSeTe  using ion beam deposition and various high-throughput characterization methods. We utilized a moving mask integrated ion beam deposition system to fabricate combinatorial thin film with non-uniform composition distribution. We then applied high-throughput XRD, ellipsometry, and EDS to obtain the spatial distribution of composition, phase, and optical properties. Base on these high-throughput experimental data, we constructed the multi-parameter coupled structure-perperty relationships of the ternary and quaternary phase change material systems.",
        "The project was mentored by Hongjian Yuan and supervised by Prof. <a href=\"https://smse.sjtu.edu.cn/people/detail/274\">Hong Wang</a>. It was funded by <a href=\"https://zirc.sjtu.edu.cn/Zirc/index\">Zhiyuan Innovative Research Center</a> of Shanghai Jiao Tong University. The paper of this work has already been submitted. Our work on GeSbSn(Se) system has been published, and my graduation thesis on GeSbSeTe system won the Best Bachelor’s Thesis (top 1%) in 2025.",
      ],
    },
    {
      title: "Adaptive mesh refinement accelerated simulation of laser-bed fusion",
      figure: {
        imageName: "pf_cover.png",
        caption:
          "Fig 3 | Phase distribution visualization of a simulated bulk specimen produced by laser fusion.",
      },
      paragraphs: [
        "In this project, I am working as a research assistant in Prof. <a href=\"https://smse.sjtu.edu.cn/people/detail/39\">Hong Liu</a>’s group at Shanghai Jiao Tong University. We introduced a two-step adaptive mesh refinement (AMR) approach to accelerate the phase field simulation of the microstructure evolution in laser-based addtive manufacturing.",
        "Although phase field models are widely used in phase distribution simulation, the mesh size needs to be adequately small to simulate the nucleation and growth process, which leads to extensive computational time and cost as consequences. We developed a two-step AMR strategy that, when there is nucleus formation inside a coarse grid, the grid will be automatically refined to fine mesh. In the opposite, if the fine mesh inside a coarse grid is mostly occupied by one phase, the grid will then be coarsened back. In this way, we are able to simulate the nucleation process while maintaining low amount of grids. This projects is still under development.",
      ],
    },
    {
      title: "A symmetric Hebb-Wagner method for electron conductivity measurement",
      paragraphs: [
        "In this project, a symmetric Hebb-Wagner method was presented to address the challenge of accurately measuring the electron conductivity of LLZTO, a promising solid electrolyte for solid-state lithium-ion batteries, under different bias voltage, test duration, and temperature. This project was mentored by a senior doctorial student <a href=\"https://www.researchgate.net/profile/Li-Guoyao\">Guoyao Li</a> and supervised by Prof. <a href=\"https://en.smse.sjtu.edu.cn/people_detail/195\">Huanan Duan</a>.",
        "This was a <a href=\"https://uitp.sjtu.edu.cn/innovation/index.html\">PRP project</a> funded by SJTU. My contribution included the preparation of LLZTO pellets, structural and electrochemical characterization, data analysis, writing, and a final project thesis defense.",
      ],
    },
  ],
  education: [
    {
      degree: "Doctor of Philosophy",
      time: "2025.08 ~ present",
      major: "Materials Engineering",
      school: "Purdue University",
      bullets: ["Lynn Fellowship"],
    },
    {
      degree: "Bachelor of Engineering",
      time: "2021.09 ~ 2025.06",
      major: "Mat. Sci. & Eng.",
      school: "Shanghai Jiao Tong University",
      bullets: ["Best Bachelor’s Thesis (Top 1%)", "Outstanding Graduate"],
    },
  ],
  skills: {
    caption: "Table 1 | The skills involved in my work.",
    rows: [
      {
        category: "Materials Characterization",
        details:
          "XRD, SEM, AFM, EDS, Ellipsometry, Optical Microscopy, Mechanical testing, Electrochemical workstation",
      },
      {
        category: "Nanomaterial fabrication",
        details:
          "E-beam evaporation, Ion-beam sputtering, Photolithography, Cleanroom operations",
      },
      {
        category: "Programming languages",
        details: "Python, MATLAB, C++, Lua, C#, Latex, Typst",
      },
      {
        category: "Coding",
        details: "Data analysis, Visualization, Machine learning, software development, Git",
      },
      {
        category: "Languages",
        details: "Chinese (Native), English (Fluent)",
      },
    ],
  },
  interests: {
    intro: "My passions apart from research lie in:",
    items: [
      "Classical music. Especially those between mid-classical and late-romantic periods. Favorite composers include Tchaikovsky, Brahms, Bach, and Beethoven.",
      "Violin. Have been playing since 7. Favorite pieces are Bach Violin Partita No. 2, Tchaikovsky Violin Concerto and Brahms Violin Concerto.",
      "Sports. Like playing table tennis. Like to watch Formula 1 and MLB.",
      "Art and design. Photography, typography, page layout, and graphic design.",
    ],
  },
  additionalInfo: [
    {
      title: "Contact",
      body:
        "Please feel free to contact me if you are interested in my work or have any questions. The easiest way to reach me is via email.",
    },
    {
      title: "Open Access",
      body: `The source code of this website is available at <a href="${github}" target="_blank" rel="noopener">${github}</a>. The content of this website is licensed under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">Apache License 2.0</a>. A template for this website is under development.`,
    },
    {
      title: "Acknowledgements",
      body: "This website is built with <a href=\"https://astro.build\" target=\"_blank\" rel=\"noopener\">Astro</a>. The design of this site is inspired by the layout of <a href=\"https://www.nature.com/nmat/\" target=\"_blank\" rel=\"noopener\">Nature Materials</a>. Fonts made from <a href=\"http://www.onlinewebfonts.com\">Web Fonts</a> is licensed by CC BY 4.0",
    },
  ],
  footer: {
    brand: "Natural Portfolio",
    github,
    linkedin,
  },
  links: {
    siteUrl,
    github,
    linkedin,
    scholarId,
    email,
  },
  schema: {
    jobTitle: "PhD Student in Materials Science and Engineering",
    affiliation: "Purdue University",
    alumniOf: "Shanghai Jiao Tong University",
    knowsAbout: [
      "Materials Science",
      "Nanomaterials",
      "Optical Physics",
      "Neuromorphic Computing",
      "AI for Science",
    ],
  },
} satisfies {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    robots: string;
    canonical: string;
    googleSiteVerification: string;
    favicon: string;
  };
  brand: { header: string; footer: string };
  header: { kicker: string; linkText: string };
  hero: { name: string; subtitle: string };
  contact: { addressLines: string[]; email: string; lastUpdatedLabel: string };
  about: { paragraphs: string[] };
  news: NewsItem[];
  publications: { bibFileName: string; authorName: string };
  projects: Project[];
  education: EducationEntry[];
  skills: { caption: string; rows: SkillRow[] };
  interests: { intro: string; items: string[] };
  additionalInfo: AdditionalInfoItem[];
  footer: { brand: string; github: string; linkedin: string };
  links: {
    siteUrl: string;
    github: string;
    linkedin: string;
    scholarId: string;
    email: string;
  };
  schema: {
    jobTitle: string;
    affiliation: string;
    alumniOf: string;
    knowsAbout: string[];
  };
};
