import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ujjwal',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Zambad',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Pune',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+917030362407',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ujjwalzambad2003@gmail.com',
  },

  {
    id: 9,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const resume = [
  {
    id: 1,
    category: 'primaryeducation',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'CBSE 10th Boards <br> Yavatmal Public School </br>',
    desc: 'Scored 91.8%',
  },

  {
    id: 2,
    category: 'primaryeducation',
    icon: <FaGraduationCap />,
    year: '2019-2021',
    title: 'IIT-JEE coaching <br> IIT HOME </br>',
    desc: 'Scored 90.4%ile in Jee Mains',
  },

  {
    id: 3,
    category: 'secondaryeducation',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'HSC - 12th Boards <br> Dinanath Junior HighSchool, Dhantoli , Nagpur </br>',
    desc: 'Scored 93.87%',
  },

  {
    id: 4,
    category: 'secondaryeducation',
    icon: <FaGraduationCap />,
    year: 'present - 2023',
    title: 'Engineering Degree (IT) <br> DYPCOE, Akurdi </br>',
    desc: 'Currently studying in 2nd Year, had scored 9.32 CGPA in 1st Year ',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '55',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '60',
  },

  {
    id: 5,
    title: 'C++',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Express Js',
    percentage: '40',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '50',
  },

  {
    id: 8,
    title: 'Java',
    percentage: '30',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather App',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ujjwalzambad.github.io/weather-app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Password Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Password Generator',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ujjwalzambad.github.io/password-generator/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Dev Detective',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'GitHub Detective',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ujjwalzambad.github.io/Detective-Me/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Top Courses Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Top Courses Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Tailwind , React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://top-course-starter-12h8pscot-ujjwalzambad.vercel.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Shopping Cart',
    details: [
      {
        title: 'Project : ',
        desc: 'Shopping Cart',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Tailwind',
      },
      {
        title: 'Preview : ',
        desc: 'https://boisterous-semifreddo-ad339c.netlify.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Random GIF Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Random GIF Generator',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://random-gif-starter-boxofo6kz-ujjwalzambad.vercel.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
