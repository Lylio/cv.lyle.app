import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFilePdf, far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(far, fab);

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
    link: 'https://www.sololearn.com/profile/24431183',
    label: 'SoloLearn',
    icon: faFan,
  },
];

export default data;
