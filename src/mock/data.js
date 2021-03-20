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
  name: 'David Liew',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is David. I am an undergraduate at the National University of Singapore studying Computer Science.',
  paragraphTwo: 'I am interested in bringing my ideas to life and finding solutions to complex problems through software.',
  paragraphThree: 'I am fluent in Java and Python primarily through the coursework in university, on the side I have also picked up web devlopment using ReactJS as well as mobile development using Flutter for personal projects.',
  resume: 'https://drive.google.com/file/d/1wwdU9Gm9ALaN4zsjbpZgetQtvBd_gN0R/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'NUSave.jpg',
    title: 'NUSave',
    info: 'As part of our software engineering module CS2103T my team and I designed a desktop Command Line Interface to aid students in managing their budgets.',
    info2: 'Built using Java',
    url: 'https://github.com/davidliew9/tp',
    //repo: 'https://github.com/davidliew9/tp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GrabNGo.jpg',
    title: 'Grab n Go',
    info: 'Two interacting mobile applications allowing students to view nearby food eateries and order food to pick up and a specified time, and to allow vendors to prepare their orders beforehand.',
    info2: 'Built using Flutter and Firebase',
    url: 'https://github.com/davidliew9/Grab-N-Go-Students',
    //repo: 'https://github.com/davidliew9/Grab-N-Go-Students', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ShowTime.jpg',
    title: 'Showtime - Ground Zero 2020',
    info: 'For the Startathon Ground Zero, our team conceptualised a web application to streamline workflow within companies',
    info2: '',
    url: 'https://github.com/davidliew9/Showtime',
    //repo: 'https://github.com/davidliew9/Showtime', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Minimi.jpg',
    title: 'Minimi - Hack for Good 2020',
    info: 'For Hack for good, our team created a Android application to aid people suffering from depression by performing tasks to take care of a virtual pet as a form of therapy.',
    info2: 'Built using Android Studio and Django',
    url: 'https://github.com/davidliew9/MiniMi',
    //repo: 'https://github.com/davidliew9/MiniMi', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://www.davidliew1999@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-liew-398b4b187/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/davidliew9',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
