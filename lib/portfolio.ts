// Shared summaries keep the home page and project list in sync.
export const projects = [
  { slug: 'query-guided-search', title: 'Query-guided Search', category: 'Research', description: 'Can a query’s ideal bit pattern help us search faster? Three methods, mathematical costs and measured results.', image: '/projects/query-guided-search/cover.svg', featured: true },
  { slug: 'heroui-chat', title: 'HeroUI Chat', category: 'Built at HeroUI', description: 'An AI interface builder I helped take from an early prototype to production at HeroUI.', image: '', featured: true },
  { slug: 'uimagine', title: 'UImagine', category: 'Personal products', description: 'Turn a description or screenshot into an interface, then edit the result visually.', image: '/uimagine.png', featured: true },
  { slug: 'onellm', title: 'OneLLM', category: 'Personal products', description: 'Build training datasets, fine-tune language models and evaluate them in one browser workspace.', image: '/onellm.png', featured: false },
  { slug: 'adswift', title: 'AdSwift', category: 'Personal products', description: 'An outdoor advertising project connecting digital displays, content management and audience measurement.', image: '/projects/adswift.png', featured: false },
  { slug: 'gitglimpse', title: 'GitGlimpse', category: 'Research', description: 'Search pull requests by meaning and keywords, then build answers with links back to the source.', image: '/projects/gitglimpse.png', featured: true },
  { slug: 'quick-median', title: 'Quick Median', category: 'Open source', description: 'A small JavaScript package that finds a median without sorting the entire array.', image: '', featured: false },
  { slug: 'heroui-contributions', title: 'HeroUI contributions', category: 'Open source', description: 'Making large Select, Autocomplete and Listbox components more responsive through virtualization.', image: '', featured: false },
  { slug: 'cassandra', title: 'TunaDB', category: 'Student projects', description: 'A Cassandra-inspired database in Go, exploring partitioning, replication and storage.', image: '/projects/cassandra.png', featured: false },
  { slug: 'hungrybees', title: 'Hungrybees', category: 'Student projects', description: 'Find nearby group food orders, coordinate in chat and share delivery costs.', image: '/projects/hungrybees.png', featured: false },
  { slug: 'the-guiding-hand', title: 'The Guiding Hand', category: 'Student projects', description: 'A client and counsellor portal built for Gebirah, with the team’s full project presentation.', image: '/projects/guidinghand2.png', featured: false },
];

export const experience = [
  { company: 'TikTok', period: 'June 2025 to present', type: 'Full time', location: 'Singapore', description: 'Responsible for developing and maintaining product features in TikTok Search.' },
  { company: 'HeroUI', period: 'November 2024 to June 2025', type: 'Full time', location: 'Remote', description: 'Responsible for product development. I helped build HeroUI Chat from prototype to production.', project: '/projects/heroui-chat' },
  { company: 'Singtel', period: 'May 2024 to August 2024', type: 'Internship, Management Associate Program', location: 'Singapore', description: 'Responsible for developing and maintaining internal applications.' },
  { company: 'Terrascope', period: 'January 2024 to April 2024', type: 'Internship', location: 'Singapore', description: 'Responsible for developing product features and supporting application improvements.' },
  { company: 'Datature', period: 'May 2023 to August 2023', type: 'Internship', location: 'Singapore', description: 'Responsible for developing and maintaining product features.' },
];
