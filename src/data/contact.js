import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Lylio',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/lylechristine/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:cxz@gmx.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://1drv.ms/b/s!Ap0L9avjjiaNgv41bhdHvrFwNv9DBw?e=4mtrYY',
    label: 'PDF',
    icon: faFilePdf,
  },
  {
    link: 'https://www.hackerrank.com/Lylio',
    label: 'HackerRank',
    icon: faHackerrank,
  },
];

export default data;
