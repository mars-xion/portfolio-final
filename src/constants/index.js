import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio,
  bndestem,
  outofspace,
  ddwimage,
  weyweywebimage,
  webcode,
  joystick,
  react,
  camera,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    path: ".#about",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    path: ".#testimonials",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "learning-outcomes",
    title: "LearningOutcomes",
    path: "/projects#learning-outcomes",
  },
  {
    id: "contact",
    title: "Contact",
    path: ".#contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webcode,
  },
  {
    title: "React Developer",
    icon: joystick,
  },
  {
    title: "Shutterbug",
    icon: react,
  },
  {
    title: "Gamer",
    icon: camera,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const testimonials = [
  {
    testimonial:
      "Mazoun is a good motivated student ! I have been teaching her for 1.5 years , and during the time she has proven herself constantly , aiming for outstanding all the time ! She shows a lot of interests in research and design, and delivers good work Good to see her growth and more confidence in these year I can see a lot of potential in her, and I think she will achieve a lot more in the future !",
    name: "Yuzhong Lin",
    designation: "Lecturer Media design",
    company: "Fontys Uni",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I am privileged to write in support of my dear student, Mazoun Al Habsi. Mazoun studied in my classroom of Media design subject group at Fontys School of ICT bachelor program, during which time I witnessed her tremendous growth and development. Mazoun demonstrated a genuine interest in the field, an open, inquiring mindset, and a broad skillset. Furthermore, I remember Mazoun as a student with a strong interest in the way we use technology to support and enable humans to achieve their goals as well as a drive for creativity and innovation. I recommend Mazoun to your internship program with absolute confidence",
    name: "Amer Jaganjac",
    designation: "Teacher of information and communication technology",
    company: "Fontys Uni",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Inspiring and motivating, that is what comes to mind if I describe Mazoun.Together we worked on the project “Fan loyalty program” in partnership with Team Liquid. We created a loyalty program. We made use of HTML, CSS, JavaScript, PHP and MySQL. Mazoun was our team leader in this project. It was always special to see how Mazoun got a group of people on board for her ideas, even when some people didn't seem to agree in the first place. She really brought everyone together, making use of everyone's personal strengths. Making clear to-do list and professional documents. Mazoun would be an amazing addition to any team.",
    name: "Megin van Herk",
    designation: "ICT & Media with AI",
    company: "Student",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

//page two: projects divisions, projects.jsx

const divisions = [
  {
    title: "Portfolio",
    icon: portfolio,
    id: "Portfolio",
  },
  {
    title: "Group Project",
    icon: bndestem,
    id: "groupProject",
  },
  {
    title: "Out of Space",
    icon: outofspace,
    id: "outofSpace",
  },
  {
    title: "DDW",
    icon: ddwimage,
    id: "ddw",
  },
  {
    title: "Malaga",
    icon: weyweywebimage,
    id: "malaga",
  },
];

const LAData = {
  jobs: [
    {
      expData: {
        title: "All",
        position: "All Projects",
        period: "Oct 2018 - present",
        details: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim fringilla dui ac mattis.",
          "Donec in sodales eros. Nulla fermentum, ante in venenatis pellentesque, justo odio viverra lorem, varius posuere erat tortor et magna.",
        ],
      },
    },
    {
      expData: {
        title: "LA1",
        position: "User interaction @analysis @advice",
        period: "Oct 2016 - May 2018",
        details: [
          "Analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. ",
          "Select a suitable design process to be able to advise on UX interventions based on a validated UX design.",
        ],
      },
    },
    {
      expData: {
        title: "LA2",
        position: "User interaction @execution @validation)",
        period: "Oct 2018 - present",
        details: [
          "Execute and evaluate the user experience of an interactive product.",
          "Document the development process for the stakeholders.",
        ],
      },
    },
    {
      expData: {
        title: "LA3",
        position: "Software design and realisation",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Create & design software with existing components or libraries using predetermined quality criteria and version control. ",
        ],
      },
    },
    {
      expData: {
        title: "LA4",
        position: "Future-oriented organisation",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Carry out a problem analysis and on that basis, determine the definitive problem and elaborate on this in a project plan.",
        ],
      },
    },
    {
      expData: {
        title: "LA5",
        position: "Investigative problem solving",
        period: "Mar 2016 - Oct 2016",
        details: [
          "formulate sub-questions pertaining to the primary question and answer these using relevant research methods. ",
          "Use the conclusions of the sub-questions to justify (design) choices.",
        ],
      },
    },
    {
      expData: {
        title: "LA6",
        position: "Personal leadership",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Methodically reflect on my professional identity and personal development.  ",
        ],
      },
    },
    {
      expData: {
        title: "LA7",
        position: "Goal-oriented interaction",
        period: "Mar 2016 - Oct 2016",
        details: [
          "communicate with different stakeholders and team members about the ICT assignment",
        ],
      },
    },
  ],
};

const LAprojects = [
  {
    name: "Car Rent",
    position: "Goal-oriented interaction",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    position: "Investigative problem solving",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    position: "User interaction @execution @validation)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, testimonials, divisions, LAData, LAprojects };
