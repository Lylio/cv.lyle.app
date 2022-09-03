const skills = [
  {
    title: 'Java',
    competency: 8,
    category: ['Java'],
  },
  {
    title: 'Spring Boot',
    competency: 8,
    category: ['Java', 'Spring'],
  },
  {
    title: 'Quarkus',
    competency: 7,
    category: ['Java'],
  },
  {
    title: 'GraphQL',
    competency: 6,
    category: ['Querying'],
  },
  {
    title: 'Gradle',
    competency: 7,
    category: ['Build Tools'],
  },
  {
    title: 'Maven',
    competency: 8,
    category: ['Build Tools'],
  },
  {
    title: 'JUnit',
    competency: 8,
    category: ['Java', 'Testing'],
  },
  {
    title: 'Docker',
    competency: 8,
    category: ['Container Tech'],
  },
  {
    title: 'Kubernetes',
    competency: 8,
    category: ['Container Tech'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Messaging'],
  },
  {
    title: 'Python',
    competency: 7,
    category: ['Scripting'],
  },
  {
    title: 'Bash',
    competency: 7,
    category: ['Scripting'],
  },
  {
    title: 'SQL',
    competency: 7,
    category: ['Databases', 'Querying'],
  },
  {
    title: 'PostgreSQL',
    competency: 7,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 7,
    category: ['Databases'],
  },
  {
    title: 'Azure',
    competency: 7,
    category: ['Cloud'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 7,
    category: ['Cloud'],
  },
  {
    title: 'React',
    competency: 7,
    category: ['JavaScript'],
  },
  {
    title: 'Jenkins',
    competency: 8,
    category: ['CI/CD'],
  },
  {
    title: 'Nexus Repo',
    competency: 8,
    category: ['CI/CD'],
  },
  {
    title: 'SonarQube',
    competency: 8,
    category: ['CI/CD'],
  },
  {
    title: 'GoCD',
    competency: 7,
    category: ['CI/CD'],
  },
  {
    title: 'Git',
    competency: 8,
    category: ['SCM'],
  },
  {
    title: 'GitHub',
    competency: 8,
    category: ['SCM'],
  },
  {
    title: 'Bitbucket',
    competency: 8,
    category: ['SCM'],
  },
  {
    title: 'OpenShift',
    competency: 8,
    category: ['Container Tech'],
  },
  {
    title: 'Linux (RHEL 8)',
    competency: 7,
    category: ['OS'],
  },
  {
    title: 'Linux (Ubuntu)',
    competency: 8,
    category: ['OS'],
  },
  {
    title: 'MacOS',
    competency: 8,
    category: ['OS'],
  },
  {
    title: 'Windows 10',
    competency: 8,
    category: ['OS'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#ad755a',
  '#37b1f5',
  '#365294',
  '#d451ba',
  '#64cb7b',
  '#376bb9',
  '#7ece6f',
  '#c3423f',
  '#d75858',
  '#444040',
  '#6968b3',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
