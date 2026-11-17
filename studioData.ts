export interface ServiceCardData {
  id: string;
  gigBadge: string;
  title: string;
  description: string;
  turnaround: string;
  startingAt: string;
  highlights: string[];
  tags: string[];
  accentColor: 'cyan' | 'violet' | 'emerald';
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Apps' | 'Bug Fixes' | 'Deployments';
  filterCategories: ('Web Apps' | 'Bug Fixes' | 'Deployments')[];
  clientName: string;
  clientRole: string;
  turnaroundTime: string;
  liveDomain: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    delta: string;
  }[];
  techStack: string[];
  codeSnippet: {
    filename: string;
    code: string;
  };
  deliverables: string[];
  mockupType: 'nexus' | 'shopflow' | 'launchpad';
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  color: string;
  glowBg: string;
  borderHover: string;
  iconKey: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  badge: string;
  checkpoints: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  country: string;
  countryFlag: string;
  serviceTag: string;
  rating: number;
  deliveryTime: string;
  quote: string;
  highlightMetric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export const SERVICES_DATA: ServiceCardData[] = [
  {
    id: 'fullstack-ai',
    gigBadge: 'FIVERR TOP GIG • FULL-STACK MVP',
    title: 'AI & Full-Stack Web Development',
    description:
      'Custom responsive websites, SaaS MVPs, React frontends, and Node.js/Express backends built from scratch with clean architecture.',
    turnaround: '3–7 Days Delivery',
    startingAt: 'Custom MVP & SaaS Ready',
    highlights: [
      'Pixel-perfect React.js + Tailwind CSS dark & light interfaces',
      'Scalable Node.js & Express REST APIs with JWT auth & databases',
      'OpenAI, Claude & custom AI workflow integrations with streaming UI',
      'Clean, modular TypeScript codebase ready for future scaling',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind CSS', 'AI APIs'],
    accentColor: 'cyan',
  },
  {
    id: 'bug-fixing',
    gigBadge: 'EXPRESS 24H RESCUE • ZERO BUGS',
    title: 'Rapid Bug Fixing & Code Rescue',
    description:
      'Urgent debugging for React, Node.js, API errors, broken layouts, and AI-generated apps (Lovable, Cursor, Replit) with fast delivery.',
    turnaround: '6–24 Hours Express',
    startingAt: 'Urgent Hotfix Available',
    highlights: [
      'Rescue stalled AI-built apps from Lovable, Cursor, Replit, Bolt & v0',
      'Fix React state loops, hydration crashes, broken mobile layouts & CORS',
      'Resolve Node.js/Express 500 crashes, broken auth & slow database queries',
      'Refactor messy AI-generated spaghetti code into clean production code',
    ],
    tags: ['Lovable / Cursor Fix', 'React Debugging', 'API & CORS Rescue', 'Lighthouse 100'],
    accentColor: 'violet',
  },
  {
    id: 'deployment-hosting',
    gigBadge: 'END-TO-END LAUNCH • SSL & DNS',
    title: 'Complete Deployment & Hosting Setup',
    description:
      'End-to-end launch including Vercel/cloud hosting, Namecheap/GoDaddy custom domain connection, DNS records, and SSL security.',
    turnaround: 'Same-Day Go-Live',
    startingAt: 'Zero-Downtime Launch',
    highlights: [
      'Production deployment on Vercel, Render, Railway, AWS, or DigitalOcean',
      'Namecheap, GoDaddy & Cloudflare custom domain A/CNAME/TXT DNS wiring',
      'Automated HTTPS/SSL certificates, env variable security & CI/CD pipelines',
      'Full production health check, custom email routing & zero-downtime handover',
    ],
    tags: ['Vercel', 'Namecheap / GoDaddy', 'DNS & SSL Setup', 'CI/CD Pipelines'],
    accentColor: 'emerald',
  },
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'nexus-ai',
    title: 'NexusAI SaaS Dashboard',
    subtitle: 'Full-stack React + Node.js analytics app deployed on custom domain',
    category: 'Web Apps',
    filterCategories: ['Web Apps', 'Deployments'],
    clientName: 'Marcus Vance',
    clientRole: 'Founder @ NexusAI Labs (US)',
    turnaroundTime: '5 Days',
    liveDomain: 'app.nexusai-analytics.io',
    summary:
      'Engineered a high-throughput AI token & revenue intelligence platform from scratch using React, TypeScript, Tailwind CSS, and a Node.js/Express backend API, complete with custom domain deployment on Vercel.',
    challenge:
      'The client needed to transform a static Figma prototype into a real-time multi-tenant SaaS dashboard capable of visualizing live LLM token usage, webhook latencies, and Stripe billing metrics without UI lag.',
    solution:
      'Abdullah architected a modular React frontend with optimistic UI updates, paired with a fast Express.js REST API layer, secure environment configuration, and custom DNS/SSL deployment on Vercel edge infrastructure.',
    impactMetrics: [
      { label: 'Lighthouse Score', value: '99 / 100', delta: '+47 pts vs prototype' },
      { label: 'API Latency', value: '34ms', delta: 'Edge cached REST responses' },
      { label: 'Uptime Since Launch', value: '99.98%', delta: 'Zero production errors' },
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind', 'Vercel'],
    codeSnippet: {
      filename: 'server/controllers/analyticsStream.ts',
      code: `export const getRealtimeMetrics = async (req: Request, res: Response) => {
  const { workspaceId } = req.params;
  const payload = await MetricsEngine.aggregateWindow(workspaceId, '24h');
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
  return res.status(200).json({ status: 'ok', latencyMs: 34, data: payload });
};`,
    },
    deliverables: [
      'Full-Stack React + TypeScript Dashboard UI',
      'Node.js & Express REST API + JWT Auth',
      'Custom Domain DNS & Vercel Edge SSL Setup',
      'Responsive Dark-Mode Charts & Export Engine',
    ],
    mockupType: 'nexus',
  },
  {
    id: 'shopflow-engine',
    title: 'ShopFlow E-Commerce Engine',
    subtitle: 'Complete checkout bug resolution and API speed optimization',
    category: 'Bug Fixes',
    filterCategories: ['Bug Fixes', 'Web Apps'],
    clientName: 'Elena Rostova',
    clientRole: 'CTO @ ShopFlow Commerce (UK)',
    turnaroundTime: '18 Hours (Urgent Rescue)',
    liveDomain: 'checkout.shopflow.store',
    summary:
      'Rescued a broken React + Node.js e-commerce application built initially with Cursor & Lovable that suffered from race-condition checkout crashes, CORS failures, and a 6.8-second mobile load time.',
    challenge:
      'Customers were abandoning carts because the mobile checkout button overlapped the payment modal, Stripe webhook calls failed with 502/CORS errors in production, and unoptimized React re-renders froze Safari on iOS.',
    solution:
      'AKD WebStudio audited the entire codebase in under 4 hours, eliminated infinite useEffect state loops, fixed Express CORS & webhook signature verification, and rebuilt the responsive Tailwind checkout drawer.',
    impactMetrics: [
      { label: 'Page Load Speed', value: '0.4s LCP', delta: 'Down from 6.8s (-94%)' },
      { label: 'Checkout Bugs', value: '0 Errors', delta: 'Fixed 14 critical bugs' },
      { label: 'Conversion Lift', value: '+38.4%', delta: 'First 7 days post-fix' },
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind', 'Vercel'],
    codeSnippet: {
      filename: 'src/hooks/useCheckoutSession.ts',
      code: `// Fixed infinite render loop & added idempotent payment lock
const submitOrder = useCallback(async (cartPayload: CartPayload) => {
  if (isSubmittingRef.current) return;
  isSubmittingRef.current = true;
  const verified = await api.post('/v1/checkout/verify', cartPayload);
  return verified.data.sessionUrl;
}, [cartId]);`,
    },
    deliverables: [
      'Resolved 14 Critical React & Node.js Console Bugs',
      'Fixed Express CORS & Payment Webhook Verification',
      'Mobile Safari & Responsive Checkout UI Overhaul',
      '100/100 Google Lighthouse Speed Optimization',
    ],
    mockupType: 'shopflow',
  },
  {
    id: 'launchpad-ai',
    title: 'LaunchPad AI Landing & Portal',
    subtitle: 'Built from concept to live production hosting in 48 hours',
    category: 'Deployments',
    filterCategories: ['Deployments', 'Web Apps'],
    clientName: 'David Chen',
    clientRole: 'Co-Founder @ LaunchPad AI (CA)',
    turnaroundTime: '48 Hours',
    liveDomain: 'launchpad-ai.cloud',
    summary:
      'Designed, developed, and deployed a high-converting AI SaaS landing page and client onboarding portal with custom Namecheap DNS routing, SSL security, and automated GitHub-to-Vercel CI/CD.',
    challenge:
      'With a Product Hunt launch scheduled in 48 hours, the founders had a broken staging build, unconnected GoDaddy/Namecheap domain records, SSL mismatch warnings, and a non-functional waitlist API.',
    solution:
      'Built an ultra-sleek dark-mode landing experience & user portal in React + Tailwind, wired a Node/Express waitlist & onboarding backend, configured A/CNAME/TXT DNS records, and launched live with zero downtime.',
    impactMetrics: [
      { label: 'Concept to Live', value: '48 Hours', delta: 'Launched ahead of deadline' },
      { label: 'SSL & DNS Status', value: 'TLS 1.3 A+', delta: 'Global edge propagation' },
      { label: 'Launch Signups', value: '2,400+', delta: 'Zero server bottlenecks' },
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind', 'Vercel'],
    codeSnippet: {
      filename: 'vercel.json & DNS Config',
      code: `{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api/index.ts" }],
  "headers": [{ "source": "/(.*)", "headers": [
    { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
  ]}]
}`,
    },
    deliverables: [
      'High-Converting AI Landing Page & Client Portal',
      'Namecheap / GoDaddy Custom Domain DNS Configuration',
      'Automated SSL/TLS Security & Environment Hardening',
      'GitHub CI/CD Auto-Deploy Pipeline on Vercel',
    ],
    mockupType: 'launchpad',
  },
];

export const TECH_STACK_ITEMS: TechItem[] = [
  {
    name: 'React.js',
    category: 'Frontend UI',
    description: 'Component architecture, Hooks, SSR/SPA state & high-FPS interfaces',
    color: '#22D3EE',
    glowBg: 'group-hover:bg-cyan-500/10',
    borderHover: 'hover:border-cyan-400/50',
    iconKey: 'react',
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    description: 'High-concurrency event-driven server architecture & microservices',
    color: '#10B981',
    glowBg: 'group-hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-400/50',
    iconKey: 'node',
  },
  {
    name: 'Express.js',
    category: 'API Framework',
    description: 'Secure RESTful API routing, middleware chains, auth & rate limiting',
    color: '#A1A1AA',
    glowBg: 'group-hover:bg-zinc-400/10',
    borderHover: 'hover:border-zinc-300/50',
    iconKey: 'express',
  },
  {
    name: 'JavaScript',
    category: 'Core Language',
    description: 'Modern ES2025+ async patterns, DOM optimization & full-stack logic',
    color: '#FACC15',
    glowBg: 'group-hover:bg-yellow-500/10',
    borderHover: 'hover:border-yellow-400/50',
    iconKey: 'js',
  },
  {
    name: 'TypeScript',
    category: 'Type Safety',
    description: 'Strict end-to-end type contracts eliminating runtime production crashes',
    color: '#3B82F6',
    glowBg: 'group-hover:bg-blue-500/10',
    borderHover: 'hover:border-blue-400/50',
    iconKey: 'ts',
  },
  {
    name: 'Tailwind CSS',
    category: 'Design System',
    description: 'Responsive utility-first styling, glassmorphism & micro-animations',
    color: '#38BDF8',
    glowBg: 'group-hover:bg-sky-500/10',
    borderHover: 'hover:border-sky-400/50',
    iconKey: 'tailwind',
  },
  {
    name: 'AI Development',
    category: 'LLMs & Copilots',
    description: 'OpenAI/Claude APIs plus rescuing Lovable, Cursor & Replit codebases',
    color: '#A855F7',
    glowBg: 'group-hover:bg-purple-500/10',
    borderHover: 'hover:border-purple-400/50',
    iconKey: 'ai',
  },
  {
    name: 'REST APIs',
    category: 'Integration Layer',
    description: 'Webhooks, Stripe payments, third-party SaaS bridges & low-latency JSON',
    color: '#06B6D4',
    glowBg: 'group-hover:bg-cyan-500/10',
    borderHover: 'hover:border-cyan-400/50',
    iconKey: 'api',
  },
  {
    name: 'Vercel',
    category: 'Edge Cloud',
    description: 'Zero-downtime global edge deployments, serverless functions & analytics',
    color: '#FAFAFA',
    glowBg: 'group-hover:bg-white/10',
    borderHover: 'hover:border-white/50',
    iconKey: 'vercel',
  },
  {
    name: 'GitHub',
    category: 'CI/CD & Version Control',
    description: 'Clean pull requests, automated build pipelines & repository management',
    color: '#E4E4E7',
    glowBg: 'group-hover:bg-zinc-300/10',
    borderHover: 'hover:border-zinc-300/50',
    iconKey: 'github',
  },
  {
    name: 'DNS/SSL Management',
    category: 'Domain Infrastructure',
    description: 'Namecheap, GoDaddy & Cloudflare A/CNAME records & TLS 1.3 security',
    color: '#34D399',
    glowBg: 'group-hover:bg-emerald-500/10',
    borderHover: 'hover:border-emerald-400/50',
    iconKey: 'dns',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Share Your Idea or Bug',
    description:
      'Send your project requirements, Figma design, or broken code repository.',
    badge: '15-Min Rapid Audit',
    checkpoints: [
      'Share GitHub repo, Lovable/Cursor link, or project brief',
      'Abdullah reviews architecture & pinpoints root causes immediately',
      'Clear fixed-price quote & guaranteed delivery timeline',
    ],
  },
  {
    number: '02',
    title: 'Build & Optimize',
    description:
      'Clean, responsive development or deep debugging with regular progress updates.',
    badge: 'Clean Production Code',
    checkpoints: [
      'Modular React + Node.js/Express engineering or surgical bug resolution',
      'Mobile responsiveness, API speed tuning & CORS/security hardening',
      'Live staging preview link so you can test progress in real time',
    ],
  },
  {
    number: '03',
    title: 'Deploy & Go Live',
    description:
      'Full testing, custom domain connection, and smooth handover.',
    badge: 'Zero-Stress Handover',
    checkpoints: [
      'Vercel / cloud production setup & environment variable encryption',
      'Namecheap / GoDaddy custom domain DNS & SSL certificate verification',
      '100% source code handover + post-launch support coverage',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    clientName: 'jason_techfounder',
    role: 'SaaS Founder',
    country: 'United States',
    countryFlag: '🇺🇸',
    serviceTag: 'AI App Bug Rescue + Vercel Launch',
    rating: 5,
    deliveryTime: 'Delivered in 12 hours',
    quote:
      'I built 80% of my SaaS in Cursor and Lovable, then hit a wall with broken React state, CORS errors on my Node.js API, and a failed Vercel build. Abdullah jumped in, fixed every single bug in one afternoon, and connected my Namecheap domain with SSL. Absolute lifesaver!',
    highlightMetric: '14 Bugs Fixed in 12h',
  },
  {
    id: 'rev-2',
    clientName: 'sarah_k_digital',
    role: 'E-Commerce Director',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    serviceTag: 'Full-Stack React & Node.js MVP',
    rating: 5,
    deliveryTime: 'Delivered in 4 days',
    quote:
      'AKD WebStudio writes some of the cleanest React and Express code I have seen on Fiverr. Our dashboard loads instantaneously, looks like a million-dollar Linear-style product on mobile and desktop, and Abdullah communicated clearly at every milestone.',
    highlightMetric: '100/100 Lighthouse Speed',
  },
  {
    id: 'rev-3',
    clientName: 'daniel_ventures',
    role: 'Startup Product Lead',
    country: 'Canada',
    countryFlag: '🇨🇦',
    serviceTag: 'Custom Domain, DNS & Cloud Deployment',
    rating: 5,
    deliveryTime: 'Delivered Same Day',
    quote:
      'We struggled for two days trying to connect our GoDaddy custom domain to our full-stack web app without breaking SSL or API routes. Abdullah sorted out all DNS records, environment variables, and production deployment in under 3 hours. Highly recommended!',
    highlightMetric: 'Zero-Downtime Launch',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    tag: 'Turnaround Time',
    question: 'How fast can you fix urgent bugs or build a full-stack web application?',
    answer:
      'For urgent React, Node.js, CSS layout, or deployment issues, AKD WebStudio offers Express 6–24 hour turnaround so your launch is never delayed. For custom landing pages and portals, delivery typically takes 2–4 days, while full-stack SaaS MVPs with custom backends are delivered in 4–7 days with daily live staging previews.',
  },
  {
    id: 'faq-2',
    tag: 'AI App Debugging',
    question: 'Can you fix or finish apps generated by Lovable, Cursor, Replit, Bolt, or v0?',
    answer:
      'Yes! Rescuing and production-hardening AI-generated apps is one of our most requested specialties. If your AI-built project is stuck in an error loop, has broken API routes, authentication bugs, or fails to deploy, Abdullah will audit the repository, clean up the React/Node architecture, and get it running smoothly in production.',
  },
  {
    id: 'faq-3',
    tag: 'Domain & Hosting',
    question: 'Do you handle custom domain connection (Namecheap, GoDaddy) and Vercel/Cloud hosting?',
    answer:
      'Absolutely. We provide end-to-end deployment setup. Whether your domain is registered on Namecheap, GoDaddy, Cloudflare, or Porkbun, we configure all required A, CNAME, and TXT DNS records, link your frontend and backend to Vercel, Render, or Railway, configure production environment variables, and verify active HTTPS/SSL security.',
  },
  {
    id: 'faq-4',
    tag: 'Post-Delivery Support',
    question: 'What happens after delivery? Do you offer revisions and post-launch support?',
    answer:
      'Every project includes complete testing prior to handover, full ownership of the clean GitHub source code, and complimentary post-delivery support to ensure everything runs seamlessly on your live domain. If you need future feature expansions or ongoing maintenance, we are always available on Fiverr.',
  },
  {
    id: 'faq-5',
    tag: 'Requirements',
    question: 'What do I need to share to get started right away?',
    answer:
      'To start a new build, simply share your idea overview, reference websites, or Figma design. For bug fixing or deployment, share your GitHub repository link (or zip file), a screenshot or description of the error, and your hosting/domain provider details. We will reply rapidly with a clear action plan.',
  },
];
