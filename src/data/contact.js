import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

library.add(fab);

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Lylio',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.sololearn.com/en/profile/24431183',
    label: 'SoloLearn',
    icon: faArrowsSpin,
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
];

export default data;
