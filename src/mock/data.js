import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Danielle Arias',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'linkedin-pic.jpg',
  paragraphOne: 'Skills: HTML, CSS, Javascript, JQUERY, React, NodeJS, MySQL, MongoDB, and Express.',
  paragraphTwo: 'UC Berkeley Extension Full Stack Development Bootcamp Graduate (2020). Also has BA in linguistics and Spanish liguistics from UC Riverside (2016) ',
  paragraphThree: 'Possesses excellent collaboration abilities and has had to work with various types of teams. Demonstrated leadership skills and managed teams for different projects both in education and professiionally. Has about 6 years of administrative and customer support skills, which were acquired in a multitude of settings. Also involoved in event coordination, public speaking, design, and general data entry.',
  resume: 'https://docs.google.com/document/d/1LVEihAaHs6ZQe70klorChc-ox8hBKOqwZH2RrnCpWBA/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smacklab.png',
    title: 'SmackLab',
    info: 'Fitness app created thinking of the user in mind, who needs a little competition to stay motivated.',
    info2: 'Key features: chat feature, YouTube search of fitness videos, BMI calculator, goals quiz, and authentication.',
    url: 'https://ic-smacklab.herokuapp.com/',
    repo: 'https://github.com/darias321/SmackLab', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'astrologica.png',
    title: 'Astrologica',
    info: 'Astrology app that allows users to create an account displaying their personal daily horoscope.',
    info2: 'Key features: authentication, profile image upload, and explore feature displaying other horoscopes',
    url: 'https://astrology-app-astrologica.herokuapp.com/',
    repo: 'https://github.com/darias321/astrology-app-project-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamesapp.png', 
   title: 'Games App',
    info: 'Multiple games app allowing the user to enjoy classic games on a simple user interface. In charge of coding snake game, contributed to front end and backend quality assurance, refactoring, and debugging.',
    info2: 'Key features: Light/Dark mode, high score recorder, multiple games such as: snake, trivia, and tic tac toe.',
    url: 'https://jessicamenius.github.io/GamesApp/Index/',
    repo: 'https://github.com/darias321/Games-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employee-tracker.png', 
   title: 'Employee Tracker',
    info: 'React employee tracker app made with random name API allowing the user to search for an employee by name or filter their search.',
    info2: 'Key features: Can search by first or last name, choices appear as typed, can filter by employee age, and database used from MySQL.',
    url: 'https://darias321.github.io/employee_directory/',
    repo: 'https://github.com/darias321/employee_directory', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'daniellearias321@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/danielleaarias/',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniellearias/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/darias321',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
