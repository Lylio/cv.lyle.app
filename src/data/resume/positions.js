import React from 'react';

const positions = [
  {
    company: 'CGI',
    position: 'Senior Consultant',
    link: 'https://www.cgi.com/en',
    daterange: 'April 2023 - Present',
    points: [
      <b>Software Development & Engineering · Back-End & Front-End Tooling<br />
        Mentoring · Self-Development · Teamwork · Communication<br />
      </b>,
    ],
    description: 'CGI is an information technology, consulting and systems integration company with '
      + 'a global presence. I\'m a Senior Software Engineer within CGI\'s Scottish Business Unit. '
      + 'This role is dynamic, demanding and requires a variety of current tech skills applied in '
      + 'various business environments.',
  },
  {
    company: 'HMCTS (CGI)',
    position: 'Front-End Developer',
    link: 'https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service',
    daterange: 'May 2023 - October 2023',
    points: [
      <b>Angular 16 ∙ Node 18 ∙ Express ∙ Azure<br />
        JavaScript/TypeScript ∙ HTML5 ∙ CSS3<br />
        Git/GitHub ∙ Figma ∙ Yarn<br />
        Agile Methodologies ∙ Peer Review
      </b>,
    ],
    description: 'I worked as a Front-End Angular Developer on a modernisation project '
      + 'for HM Courts & Tribunals Service. This greenfield project focused on migrating and '
      + 'upgrading the legacy Digital Audio Recording Transcription and Storage system (DARTS) onto '
      + 'a Kubernetes Azure Cloud Platform.',
  },
  {
    company: 'FSB Tech',
    position: 'Java Developer',
    link: 'https://fsbtech.com/',
    daterange: 'Nov 2022 - Dec 2022',
    points: [
      <b>Java (JDK 8/11) ∙ Maven ∙ Linux<br />
        PostgreSQL ∙ MongoDB ∙ GitLab<br />
      </b>,
    ],
    description: 'FSB Tech was a gaming-technology company which created online betting experiences. '
      + 'Unfortunately they had to close their Glasgow office in late 2022 which resulted in the '
      + 'entire development team being made redundant.',
  },
  {
    company: 'OLM Systems',
    position: 'Java Developer',
    link: 'https://www.olmsystems.com/',
    daterange: 'Aug 2021 - Oct 2022',
    points: [
      <b>Java (JDK 8/11) ∙ Quarkus ∙ Spring Boot ∙ GraphQL<br />
        PostgreSQL ∙ Kubernetes ∙ Kafka ∙ Docker ∙ Maven<br />
        Google Cloud Platform ∙ Linux (Ubuntu) ∙ Bitbucket <br />
      </b>,
    ],
    description: 'As part of the integration team, I developed bespoke data services which sat'
      + ' within OLM\'s health & social care software products.'
      + ' This role focused on Java/backend development in which Quarkus and Spring Boot'
      + ' frameworks supported a variety of microservices and web apps. OLM\'s'
      + ' product suite remains very popular with local authorities and other public sector'
      + ' organisations, and the integration team was responsible for developing ad-hoc solutions'
      + ' to support customer\'s case management and data needs.'
      + ' My skills in Java Microservice Development, Cloud Native Application Design,'
      + ' and Enterprise Systems Integration were highly strengthened during my time at OLM.',
  },
  {
    company: 'Virgin Money',
    position: 'Senior Platform Engineer',
    link: 'https://uk.virginmoney.com/',
    daterange: 'Oct 2018 - Jun 2021',
    points: [
      <b>
        OpenShift ∙ Docker ∙ Linux (RHEL 8) ∙ Bash<br />
        Java (JDK 8) ∙ Spring Boot ∙ Python ∙ Gradle ∙ Maven<br />
        Jenkins ∙ Nexus Repo ∙ MongoDB ∙ SonarQube ∙ GoCD<br />
        GitHub ∙ React ∙ Azure ∙ MacOS<br />
      </b>,
    ],
    description: 'In this DevOps role I developed, supported and maintained'
      + ' Virgin Money\'s Operational Platform which was a complex containerisation estate'
      + ' comprising of Spring Boot microservices and React web applications. This role advanced'
      + ' my DevOps skill-set in Back End Development, Microservice Technology and Continuous'
      + ' Integration/Delivery.',
  },
];

export default positions;
