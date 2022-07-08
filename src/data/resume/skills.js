const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Java'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Java', 'Spring', 'Frameworks', 'Microservices'],
  },
  {
    title: 'Spring Data JPA',
    competency: 3,
    category: ['Java', 'Spring', 'Microservices'],
  },
  {
    title: 'Hibernate',
    competency: 3,
    category: ['Java', 'Frameworks'],
  },
  {
    title: 'Quarkus',
    competency: 3,
    category: ['Java', 'Frameworks'],
  },
  {
    title: 'Gradle',
    competency: 3,
    category: ['Build Tools'],
  },
  {
    title: 'Maven',
    competency: 4,
    category: ['Build Tools'],
  },
  {
    title: 'JUnit',
    competency: 3,
    category: ['Java', 'Testing'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Containerisation', 'Kubernetes'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Kubernetes', 'Containerisation'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Scripting'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Scripting'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Databases', 'Scripting'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frontend'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Build Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['SCM'],
  },
  {
    title: 'GitHub',
    competency: 4,
    category: ['SCM'],
  },
  {
    title: 'OpenShift',
    competency: 3,
    category: ['Containerisation', 'Kubernetes'],
  },
  {
    title: 'Linux',
    competency: 4,
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
