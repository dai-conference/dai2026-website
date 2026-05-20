// DAI 2026 Conference Configuration
// 所有会议相关文案集中管理

export const conferenceInfo = {
  year: 2026,
  name: 'DAI',
  fullName: 'The 8th International Conference on Distributed Artificial Intelligence',
  edition: 8,
  location: {
    city: 'Hong Kong',
    venue: 'Hong Kong Convention and Exhibition Centre',
    country: 'Hong Kong, China'
  },
  dates: {
    start: '2026-11-29',
    end: '2026-12-02',
    display: 'November 29 - December 2, 2026'
  },
  description: 'Bringing together researchers and practitioners in distributed AI, multi-agent systems, and federated learning.',
  tagline: 'Advancing Distributed Intelligence'
}

const base = '/dai/2026'

// 导航菜单配置（使用 RouterLink，不需要 base 前缀）
export const navItems = [
  { label: 'Home', href: '/', type: 'link' },
  {
    label: 'Calls',
    type: 'dropdown',
    children: [
      { label: 'Call for Papers', href: '/call-for-papers' },
      { label: 'Call for Workshops', href: '/call-for-workshops' },
      { label: 'Call for Tutorials', href: '/call-for-tutorials' },
      { label: 'Call for Posters', href: '/call-for-posters' },
    ]
  },
  { label: 'Committees', href: '/committees', type: 'link' },
  {
    label: 'Program',
    type: 'dropdown',
    children: [
      { label: 'Program Overview', href: '/program' },
      { label: 'Keynotes', href: '/keynotes' },
      { label: 'Workshops', href: '/workshops' },
      { label: 'Tutorials', href: '/tutorials' },
      { label: 'Schedule', href: '/schedule' },
    ]
  },
  { label: 'Accepted Papers', href: '/accepted-papers', type: 'link' },
  { label: 'Registration', href: '/registration', type: 'link' },
  { label: 'Sponsorship', href: '/sponsorship', type: 'link' },
  {
    label: 'Attending',
    type: 'dropdown',
    children: [
      { label: 'Conference Venue', href: '/venue' },
      { label: 'Accommodation', href: '/attending' },
    ]
  },
]

// 快速链接
export const quickLinks = {
  authors: {
    title: 'Authors',
    links: [
      { label: 'Call for Papers', href: base + '/call-for-papers' },
      { label: 'Submission Site', href: base + '/' },
      { label: 'Formatting Guidelines', href: base + '/' },
      { label: 'FAQ', href: base + '/' },
    ]
  },
  attendees: {
    title: 'Attendees',
    links: [
      { label: 'Registration', href: base + '/registration' },
      { label: 'Venue Information', href: base + '/venue' },
      { label: 'Accommodation', href: base + '/attending' },
      { label: 'Visa Information', href: base + '/' },
    ]
  },
  program: {
    title: 'Program',
    links: [
      { label: 'Keynote Speakers', href: base + '/keynotes' },
      { label: 'Workshops', href: base + '/workshops' },
      { label: 'Tutorials', href: base + '/tutorials' },
      { label: 'Schedule', href: base + '/schedule' },
    ]
  }
}

// 重要日期
export const importantDates = [
  {
    id: 'abstract',
    event: 'Abstract Submission',
    date: 'July 15, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'paper',
    event: 'Paper Submission',
    date: 'July 22, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'supplementary',
    event: 'Supplementary Material',
    date: 'July 29, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'reviews',
    event: 'Reviews Released',
    date: 'August 25, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'response',
    event: 'Author Response',
    date: 'September 1-5, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'decisions',
    event: 'Final Decisions',
    date: 'September 15, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'camera',
    event: 'Camera Ready',
    date: 'October 15, 2026',
    time: '23:59 AoE',
    status: 'upcoming'
  },
  {
    id: 'conference',
    event: 'Conference Dates',
    date: 'November 29 - December 2, 2026',
    time: 'Hong Kong',
    status: 'highlight'
  },
]

// 公告
export const announcements = [
  {
    id: 1,
    date: 'March 1, 2026',
    title: 'DAI 2026 Website Launched',
    content: 'We are pleased to announce the launch of the DAI 2026 conference website. The Call for Papers will be released soon.',
    link: null
  },
  {
    id: 2,
    date: 'February 15, 2026',
    title: 'Keynote Speakers Announced',
    content: 'We are excited to announce our first keynote speakers. More details will be announced soon.',
    link: { label: 'View Speakers', href: base + '/keynotes' }
  },
  {
    id: 3,
    date: 'January 20, 2026',
    title: 'Workshop Proposals Open',
    content: 'Workshop and tutorial proposals are now being accepted. The deadline for proposals is April 1, 2026.',
    link: { label: 'Submit Proposal', href: base + '/call-for-workshops' }
  },
  {
    id: 4,
    date: 'January 5, 2026',
    title: 'Conference Venue Confirmed',
    content: 'DAI 2026 will be held at the Hong Kong Convention and Exhibition Centre, November 29 - December 2, 2026.',
    link: { label: 'Venue Info', href: base + '/venue' }
  },
]

// 新闻
export const newsItems = [
  {
    id: 1,
    date: 'March 10, 2026',
    category: 'CFP',
    title: 'Call for Papers Now Open',
    excerpt: 'The Call for Papers for DAI 2026 is now open. We invite submissions on all aspects of distributed artificial intelligence.',
  },
  {
    id: 2,
    date: 'March 5, 2026',
    category: 'Program',
    title: 'Tutorial Program Announced',
    excerpt: 'We are pleased to announce the tutorial program for DAI 2026, featuring tutorials on cutting-edge topics.',
  },
  {
    id: 3,
    date: 'February 28, 2026',
    category: 'Sponsorship',
    title: 'Sponsorship Opportunities Available',
    excerpt: 'We invite industry partners to sponsor DAI 2026. Various sponsorship tiers are available with excellent visibility.',
  },
]

// 赞助商
export const sponsors = {
  tiers: {
    platinum: {
      name: 'Platinum',
      color: '#6b7280'
    },
    gold: {
      name: 'Gold', 
      color: '#d97706'
    },
    silver: {
      name: 'Silver',
      color: '#6b7280'
    }
  },
  list: {
    platinum: [
      { name: 'Google Research', logo: 'Google' },
      { name: 'Microsoft Research', logo: 'Microsoft' },
      { name: 'OpenAI', logo: 'OpenAI' },
    ],
    gold: [
      { name: 'Meta AI', logo: 'Meta' },
      { name: 'DeepMind', logo: 'DeepMind' },
      { name: 'Amazon Science', logo: 'Amazon' },
      { name: 'IBM Research', logo: 'IBM' },
    ],
    silver: [
      { name: 'NVIDIA', logo: 'NVIDIA' },
      { name: 'Intel Labs', logo: 'Intel' },
      { name: 'Salesforce Research', logo: 'Salesforce' },
      { name: 'Apple Research', logo: 'Apple' },
      { name: 'Samsung Research', logo: 'Samsung' },
      { name: 'Baidu Research', logo: 'Baidu' },
    ]
  }
}

// 页脚数据
export const footerData = {
  links: {
    conference: [
      { label: 'About', href: base + '/' },
      { label: 'Organizing Committee', href: base + '/committees' },
      { label: 'Program Committee', href: base + '/program-committee' },
      { label: 'Previous Editions', href: base + '/' },
    ],
    authors: [
      { label: 'Call for Papers', href: base + '/call-for-papers' },
      { label: 'Submission Guidelines', href: base + '/' },
      { label: 'Ethics Guidelines', href: base + '/' },
      { label: 'FAQ', href: base + '/' },
    ],
    attendees: [
      { label: 'Registration', href: base + '/registration' },
      { label: 'Venue', href: base + '/venue' },
      { label: 'Accommodation', href: base + '/attending' },
      { label: 'Travel Grants', href: base + '/' },
    ],
    info: [
      { label: 'Contact Us', href: base + '/' },
      { label: 'Code of Conduct', href: base + '/' },
      { label: 'Privacy Policy', href: base + '/' },
    ],
  },
  social: [
    { name: 'Twitter', icon: '𝕏', href: base + '/' },
    { name: 'LinkedIn', icon: 'in', href: base + '/' },
    { name: 'GitHub', icon: '⌘', href: base + '/' },
  ]
}

// 组委会数据
export const committees = {
  generalChairs: [
    { name: 'Minming Li', affiliation: 'Professor, Department of Computer Science, City University of Hong Kong', email: '', image: '', link: 'https://www.cs.cityu.edu.hk/~minmli/' },
    { name: 'Francesca Rossi', affiliation: 'IBM Global Leader for Responsible AI and AI Governance; IBM Fellow, T.J. Watson IBM Research Lab', email: '', image: '', link: 'https://research.ibm.com/people/francesca-rossi' },
    { name: 'Michael Wellman', affiliation: 'Professor of Computer Science & Engineering, University of Michigan', email: '', image: '', link: 'https://eecs.engin.umich.edu/people/wellman-michael/' }
  ],
  programChairs: [
    { name: 'Ian Gemp', affiliation: 'Staff Research Scientist, Google DeepMind (GDM)', email: '', image: '', link: 'https://imgemp.github.io/' },
    { name: 'Ying Wen', affiliation: 'Associate Professor, School of Artificial Intelligence, Shanghai Jiao Tong University', email: '', image: '', link: 'https://yingwen.io/' }
  ],
  aiPaperTrackChairs: [
    { name: 'Siheng Chen', affiliation: 'Associate Professor, Shanghai Jiao Tong University', email: '', image: '', link: 'https://siheng-chen.github.io/' }
  ],
  workshopTutorialChairs: [
    { name: 'Lei Bai', affiliation: 'Research Scientist, Shanghai AI Laboratory', email: '', image: '', link: 'http://leibai.site/' }
  ],
  publicityChairs: [
    { name: 'Huanran Wang', affiliation: 'Head of Impact Collaboration, Beijing Academy of Artificial Intelligence (BAAI)', email: '', image: '', link: '' }
  ],
  localChairs: [
    { name: 'Shuang Qiu', affiliation: 'Assistant Professor, Department of Systems Engineering and Department of Computer Science (secondary), City University of Hong Kong', email: '', image: '', link: 'https://shq-ml.github.io/' },
    { name: 'Youzhi Zhang', affiliation: 'Associate Professor, CAIR, HKISI-CAS', email: '', image: '', link: 'https://youzhi333.github.io/' }
  ],
  webPublicationChairs: [
    { name: 'Shao Zhang', affiliation: 'Researcher, Pujiang Laboratory', email: '', image: '', link: '' },
    { name: 'Mengchen Zhao', affiliation: 'Associate Professor, South China University of Technology', email: '', image: '', link: 'https://batmanzzmc.github.io/' }
  ]
}

// 演讲嘉宾数据（待填充）
export const keynotes = [
  // {
  //   id: 1,
  //   name: '',
  //   affiliation: '',
  //   title: '',
  //   abstract: '',
  //   image: '',
  //   link: ''
  // }
]

// 已接受论文数据（待填充）
export const acceptedPapers = {
  oral: [
    // { title: '', authors: [] }
  ],
  poster: [
    // { title: '', authors: [] }
  ]
}

// 研讨会数据（待填充）
export const workshops = [
  // {
  //   id: 1,
  //   title: '',
  //   organizers: [],
  //   description: '',
  //   link: ''
  // }
]

// 教程数据（待填充）
export const tutorials = [
  // {
  //   id: 1,
  //   title: '',
  //   organizers: [],
  //   description: '',
  //   link: ''
  // }
]

// 日程数据（待填充）
export const schedule = {
  days: [
    // {
    //   date: '',
    //   events: [
    //     { time: '', title: '', type: '' }
    //   ]
    // }
  ]
}
