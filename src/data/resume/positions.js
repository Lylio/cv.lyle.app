import React from 'react';

const positions = [
  {
    company: 'SCOTTISH GOVERNMENT (CGI CLIENT)',
    position: 'Senior Java Developer @ AGRICULTURE AND RURAL ECONOMIES ',
    link: 'https://www.ruralpayments.org/',
    daterange: 'March 2024 - Present',
    points: [
      <b>Java (JDK 11) · JSP · Red Hat Fuse · Git/GitLab · OpenShift · Oracle · SQL Developer ·
        SoapUI
      </b>,
    ],
    description: 'I\'ve recently joined the Agricultural & Rural Economies (ARE) project with the'
      + 'Scottish Government as a Java Developer. The ARE project is closely linked with the '
      + 'Scottish Rural Payments and Services facility (https://www.ruralpayments.org/). The '
      + 'maintenance and development of the Rural Payments Service is an ongoing relationship '
      + 'between CGI developers and the Scottish Government: there are currently significant '
      + 'upgrades to modernise the ARE technical estate such as upgrading to Java 11.',
  },
  {
    company: 'HMCTS (CGI CLIENT)',
    position: 'Front-End Developer',
    link: 'https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service',
    daterange: 'May 2023 - October 2023',
    points: [
      <b>Angular 16 ∙ Azure ∙ JavaScript/TypeScript ∙ HTML5 ∙ CSS3 ∙ Git/GitHub ∙ Agile
      </b>,
    ],
    description: 'I gained an introduction to Front-End Angular Developer on a modernisation project '
      + 'for HM Courts & Tribunals Service. This greenfield project focused on migrating and '
      + 'upgrading the legacy Digital Audio Recording Transcription and Storage system (DARTS) onto '
      + 'a Azure\'s Kubernetes Cloud Platform.',
  },
  {
    company: 'CGI',
    position: 'Senior Java Developer',
    link: 'https://www.cgi.com/en',
    daterange: 'April 2023 - Present',
    points: [
      <b>Software Development · Software Engineering · Back-End Web Development · Cloud Computing
      </b>,
    ],
    description: 'CGI is an information technology, consulting and systems integration company with '
      + 'a global presence. I\'m a Software Engineer within CGI\'s Scottish Business Unit. '
      + 'This role is dynamic, demanding and requires a variety of current tech skills applied in '
      + 'various business environments.',
  },
  {
    company: 'FSB Tech',
    position: 'Java Developer',
    link: 'https://fsbtech.com/',
    daterange: 'Nov 2022 - Dec 2022',
    points: [
      <b>Java (JDK 8/11) ∙ Maven ∙ Linux<br />
        PostgreSQL ∙ MongoDB ∙ BitBucket<br />
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
      <b>Java (JDK 8/11) ∙ Quarkus ∙ Kafka<br />
        PostgreSQL ∙ Kubernetes ∙ Maven<br />
        Google Cloud Platform ∙ Linux (Ubuntu)<br />
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
        OpenShift ∙ GitHub ∙ Docker ∙ Bash ∙ Python<br />
        Java (JDK 8) ∙ Spring Boot ∙ Gradle ∙ Maven<br />
        Jenkins ∙ Nexus Repo ∙ MongoDB ∙ SonarQube <br />
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
