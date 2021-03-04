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
  name: 'Dawit mekonnen',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `
  A results-driven software developer from the University of Gondar passionate about developing user-friendly software applications. Excellent problem-solving skills and ability to perform well in a team. Skilled in frontend development and creating dynamic websites that work well with mobile and desktop `,

  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'port1.png',
    title: 'Music Streaming site',
    info:
      'This website was build using react and Deezer API it have features like listening, searching for tracks and adding them to favorite it stores the data to local storage so that the data wont be lost on refresh',
    info2: '',
    url: 'https://dave-lab12.github.io/musx-music-streming-web-app/',
    repo: 'https://github.com/Dave-lab12/musx-music-streming-web-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dios.png',
    title: 'Website for travel agency',
    info: 'this is a landing page for Dios travel agency it is have basic features like scroll animation it is also mobile responsive ',
    info2: '',
    url: 'https://dios-travel-agency.vercel.app/',
    repo: 'https://github.com/Dave-lab12/dios-travel-agency', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'color.png',
    title: 'Color Generator',
    info: 'This color generator website is also built using react the site helps you to generate the HEX color you inserted into a darker or lighter color of choice',
    info2: '',
    url: 'https://color-generator-r.netlify.app/',
    repo: 'https://github.com/Dave-lab12/color-picker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Click on contact me button to send me an email',
  btn: 'Contact Me',
  email: 'Dwtmekonnen123@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dawit-mekonnen-a95b361b3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dave-lab12',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
}
