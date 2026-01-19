// Projects

export type Project = {
    id: string;
    title: string;
    category: string;
    problem: string;
    solution: string;
    outcome: string[];
    technologies: string[];
    color: string;
    image:string;
    videos?:string[];
    imgs?: string[];
};

export const projectsList = [
  {
    id: 'proposal-management-system',
    title: 'Proposal Management System — UAE',
    category: 'Full-Stack Platform',
    problem:
      'Manual proposal creation and tracking caused delays, data duplication, and lack of visibility across teams.',
    solution:
      'Designed and built a full-stack proposal management platform with authentication, role-based access control, and a custom drag-and-drop form builder. The system generates structured proposals, stores submissions centrally, and supports automated workflows.',
    outcome: [
      'Centralized proposal data',
      'Reduced processing time',
      'Improved internal visibility and control',
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'React.js',
      'Redux Toolkit',
      'NestJS',
      'MongoDB',
      'JWT Authentication',
    ],
    color:'#fee2e2cc',
    image:'/images/projects/web/prop1.webp',
    videos:[
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7320279267458580481?compact=1'
    ],
  },

  {
    id: 'cms-driven-websites',
    title: 'CMS-Driven Business Websites',
    category: 'Web Platforms',
    problem:
      'Clients required fast, scalable websites that non-technical staff could manage without developer involvement.',
    solution:
      'Built CMS-driven platforms using Next.js with Payload CMS and Strapi, enabling content, media, SEO, and localization management through a secure admin interface.',
    outcome: [
      'Reduced content update dependency on developers',
      'Improved performance and SEO',
      'Scalable, maintainable architecture',
    ],
    technologies: [
      'Next.js',
      'React',
      'Payload CMS',
      'Strapi',
      'TypeScript',
    ],
    
    color:'#dcfce7cc',
    image:'/images/projects/web/cms2.jpg',
    videos:[
      '/images/projects/web/str.png',
      '/images/projects/web/pay.webp'
    ],
  },

  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Online Sales System',
    problem:
      'Need for a complete online sales system with inventory management, payments, and administration.',
    solution:
      'Developed a full-stack e-commerce platform including product catalog, cart, payments, admin dashboard, order management, and role-based authentication.',
    outcome: [
      'End-to-end digital sales workflow',
      'Centralized order and inventory management',
    ],
    technologies: [
      'Node.js',
      'React',
      'MongoDB',
      'Redux Toolkit',
      'PayPal Integration',
    ],
    
    color:'#fef3c7cc',
    image:'/images/projects/web/ecom5.jpg',
    videos:[
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7193920374693052417?compact=1'
    ],
  },
   {
  id: 'blogging-system',
  title: 'Blogging & Content Publishing System',
  category: 'Full-Stack Web Application',
  problem:
    'Content platforms required a scalable blogging system with user management, media handling, and administrative control beyond what off-the-shelf CMS solutions provide.',
  solution:
    'Designed and developed a full-stack blogging system with a custom Node.js backend and REST APIs. The platform includes an admin dashboard for content moderation, user management, and analytics, user profiles with author-specific content, and third-party Cloudinary integration for secure and optimized media storage and delivery.',
  outcome: [
    'Centralized content and user management through an admin dashboard',
    'Scalable media handling with cloud-based image optimization',
    'Improved publishing control and content quality',
  ],
  technologies: [
    'Node.js',
    'Express.js',
    'React',
    'Redux Toolkit',
    'MongoDB',
    'Cloudinary',
    'JWT Authentication',
    'Role-Based Access Control',
    'Email Verification'
  ],
  
    color:'#cffafecc',
    image:'/images/projects/web/blog1.jpg',
    videos:[
            'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187781906229280769?compact=1',
            'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187783260096131072?compact=1',
            'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187785484025155584?compact=1',
            'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187786248000856064?compact=1'
    ],
},
  {
    id: 'conference-av-app',
    title: 'Conference Audio / Video Web Application',
    category: 'Real-Time Communication',
    problem:
      'Requirement for real-time communication platform supporting meetings, chat, and scheduling.',
    solution:
      'Built a real-time web application supporting audio/video calls, authentication, chat, meeting scheduling, and connection monitoring.',
    outcome: [
      'Real-time communication with modern UI',
      'Secure authentication and session management',
    ],
    technologies: [
      'Next.js',
      'React',
      'WebRTC',
      'MongoDB',
      'Clerk Authentication',
    ],
    
    color:'#e0e7ffcc',
    image:'/images/projects/web/av3.jpg',
    videos:[
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7193859513685311489?compact=1'
    ],
  },

  {
    id: 'iot-monitoring-dashboards',
    title: 'IoT Monitoring Dashboards',
    category: 'IoT & Data Visualization',
    problem:
      'Need to monitor real-time sensor data and device status from distributed IoT systems.',
    solution:
      'Developed dashboards integrating IoT devices with cloud platforms, displaying live sensor data and system status through web interfaces.',
    outcome: [
      'Real-time visibility into device behavior',
      'Improved monitoring and system insight',
    ],
    technologies: [
      'React/Next.js',
      'Node.js',
      'WebSockets',
      'MQTT',
      'Cloud IoT Platforms',
    ],
    
    color:'#fde68acc',
    image:'/images/projects/iot/iotdash.jpg',
    videos:[],
    imgs:[
      '/images/projects/iot/accel.png',
      '/images/projects/iot/bag.png',
      '/images/projects/iot/iotdash.jpg',
      '/images/projects/iot/lighting.png',
      '/images/projects/iot/location2.png',
      '/images/projects/iot/parking.png',
    ]
  },
];





// Experience
export const sectionsData = [
    {
        title: 'Full-Stack Web Developer',
        subTitle: "Freelance - UpWork / Client Projects",
        content: [
            'Built internal business systems and dashboards',
            'Developed secure backend APIs and authentication',
            'Contributed to ongoing projects and maintained existing systems',
            'Developed SEO Websites - integrated with CMS'
        ],
        source: 'http://gameofthronesipsum.richfinelli.com/',
    },
    {
        title: 'Full-Stack Web Developer',
        subTitle: "Tax Consultancy (UAE)",
        content: [
            'Digitized internal workflows',
            'Built proposal management system with form builder and dynamic response',
            'Designed databases and dashboards',
            'Delivered production web platforms for UAE market-share for company clients'
        ],
        source: 'https://fungenerators.com/lorem-ipsum/coffee/',
    },
    {
        title: 'IoT-Integrated Web Developer',
        subTitle: "ITI - Hands-On Labs",
        content: ['Built dashboards and real-time monitoring systems'],
        source: '#',
    },
];