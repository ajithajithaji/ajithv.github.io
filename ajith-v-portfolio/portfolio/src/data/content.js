/* ============================================================
   EDIT EVERYTHING HERE.
   This is the only file you need to touch to change the site's
   text, projects, jobs, links and numbers.
   ============================================================ */

export const profile = {
  firstName: 'Ajith',
  lastName: 'V',
  displayName: 'Ajith V',            // big name in the hero
  navBrand: 'Ajith',                 // short name in the top-left
  role: 'Senior Odoo Techno-Functional Consultant',
  headlineLead: 'Techno-Functional Consultant',
  headlineRest:
    'at Cybrosys Technologies — 3.5+ years turning business workflows into working Odoo.',
  // ==text== renders with the accent underline.
  heroSub:
    'I develop, implement and consult on ==Odoo ERP== across accounting, Sales, Purchase, Inventory, project management, website and POS — custom modules, third-party integrations, performance tuning and deployment on Odoo.sh, Docker and AWS.',
  location: 'Palakkad, Kerala, India',
  city: 'Pattambi',
  timezone: 'IST',
  email: 'ajithodoo@gmail.com',
  phone: '+91 90720 20497',
  availability: 'Open to consulting, implementation and ERP customisation work',
  cvUrl: '/CV.pdf',                  // drop your CV in /public and rename it CV.pdf
  photo: '/profile.jpg',             // swap for '/profile-alt.jpg' or your own file in /public
  photoAlt: 'Ajith V',
  // Replace the # placeholders with your real profile URLs.
  // `label` picks the icon in src/components/SocialIcon.jsx and is used as the
  // accessible name. `handle` only shows on the contact page.
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ajith-v-037681208/',
      handle: 'ajith-v-037681208',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ajithajithaji',
      handle: 'ajithajithaji',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/ajii_._/',
      handle: 'ajii_._',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/people/Ajith-Aji/pfbid02UBprQ7Trrz2jXaNNSUir26kAyne3Tb1abTgDHtgirEwNUrRAgKKFYSYhLoFB5adwl/',
      handle: 'Ajith Aji',
    },
  ],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'services', label: 'Services' },
  { id: 'stack', label: 'Stack' },
  { id: 'tools', label: 'Tools' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

/* Hero: the deploy-log signature element. Each line prints in sequence. */
export const deployLabel = 'deploy — odoo@production'

export const deployLog = [
  { tag: 'build', text: 'odoo 19.0 — custom addons resolved', tone: 'green' },
  { tag: 'test', text: 'unit tests passed — 100+ modules', tone: 'blue' },
  { tag: 'image', text: 'docker build — nginx reverse proxy', tone: 'green' },
  { tag: 'db', text: 'postgresql — ORM queries optimised', tone: 'blue' },
  { tag: 'deploy', text: 'odoo.sh · aws · on-premise ready', tone: 'green' },
  { tag: 'ok', text: 'page load down 30%', tone: 'green' },
]

export const heroDomains = [
  { title: 'Accounting', sub: 'Reports · Reconciliation' },
  { title: 'Project', sub: 'Stages · Approvals' },
  { title: 'Website', sub: 'Pages · Themes' },
  { title: 'Point of Sale', sub: 'Screens · Receipts' },
  { title: 'Payments', sub: 'Gateways · Callbacks' },
  { title: 'Deployment', sub: 'Odoo.sh · Docker · AWS' },
]

export const ticker = [
  'Odoo 13 → 19',
  '100+ Modules Delivered',
  'Payment Gateway Integrations',
  'PDF & Excel Reporting',
  'OWL · QWeb · ORM',
  'Docker · Nginx · AWS',
  'Multi-company Security',
  'Shopify · Bloy Loyality · Freshdesk · Wifleet Delivery',
  'Tap · MultiSafepay · Deema · Taly',
  'Fresher Training & Mentoring',
]

export const about = {
  eyebrow: '01 — Profile',
  title: 'Both halves of the job.',
  aside: 'A note\non practice',
  body:
    'Techno-functional Odoo Developer with 3.5 years of experience at Cybrosys, working across the complete Odoo ecosystem, including Accounting, Sales, Purchase, Inventory, POS, CRM, Project, Website, HR, Payments, and other core modules. I sit on both sides of the table — understanding the business problem during requirement discussions and developing the right Odoo solution to address it. Experienced in customization, integrations, migrations, performance optimization, security, and deployments across Odoo.sh, AWS, and on-premise environments. I take pride in solving complex performance and business workflow issues, implementing reliable multi-company security, and helping freshers successfully deliver their first Odoo modules.',
  facts: [
    { k: 'Currently', v: 'Odoo Techno-Functional Consultant — Cybrosys Technologies · Calicut' },
    { k: 'Experience', v: '3.5+ years across Odoo development, implementation and consultation' },
    { k: 'Versions', v: 'Odoo 13 through 19 — customisation, migration and upgrade support' },
    { k: 'Integrations', v: 'Shopify, Taly, Freshdesk, Tap, MultiSafepay, Deema, Wifleet Delivery, Bloy Loyalty' },
    { k: 'Based', v: 'Kerala, India · working with clients remotely and on-site' },
    { k: 'Reach', v: 'ajithodoo@gmail.com · +91 90720 20497' },
  ],
}

export const experience = {
  eyebrow: '02 — Experience',
  title: 'A record in production.',
  aside: '2021 →\nnow',
  jobs: [
    {
      period: 'Mar 2023 — Present',
      meta: 'Full-time · Calicut',
      badge: 'Now',
      role: 'Odoo Techno-Functional Consultant',
      org: 'Cybrosys Technologies',
      tag: 'Consultant · Mentor',
      summary:
        'Over 100 Odoo module customizations and implementations across Accounting, Sales, Purchase, Inventory, POS, CRM, Project, Website, HR, and Payments — translating complex business requirements into practical, automated ERP solutions and supporting them through development, deployment, optimization, and ongoing maintenance.',
      points: [
        '**100+ module customisations** delivered across multiple business domains and industries',
        '**Project management workflows** — custom tasks, stages, approvals and automated actions for real project visibility',
        '**Payment gateway integrations** — configuration, API flows, callbacks and secure transaction handling',
        '**Custom PDF and Excel reports** for Sales, Purchase, Accounting and HR',
        '**Responsive website pages** and landing sections for consultation and real estate clients, built to match reference designs',
        '**ORM optimisation** and computed-field refactoring, cutting page load time by up to 30%',
        '**Multi-company security** — access rights, record rules and controlled visibility',
        '**Deployment across platforms** — Odoo.sh, Odoo Online, on-premise, Docker and Nginx on AWS',
        '**Training and mentoring** freshers on ORM, module structure and coding standards',
        '**Code review and quality checks** as part of task allocation and delivery tracking',
      ],
      chips: ['Odoo 13–19', 'Python', 'JavaScript', 'OWL', 'QWeb', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      period: 'Ongoing',
      meta: 'Integration work',
      role: 'Third-party Integrations',
      org: 'E-commerce · Payments · Accounting · Support',
      tag: 'Connectors',
      summary:
        'Connectors between Odoo and the systems a business already runs on — storefronts, payment providers, accounting software and support desks. The interesting part is never the happy path; it is what happens when the other side times out.',
      points: [
        '**E-commerce** — Shopify catalogue, stock and order sync driven by webhooks',
        '**Payments** — Tap,Taly, MultiSafepay and Deema, including callbacks, refunds and reconciliation',
        '**Operations** — Freshdesk ticketing, Wiyak delivery status and Bloy loyalty redemption at the POS',
        '**Reliability** — retry handling, duplicate protection and error logs a support agent can read',
      ],
      chips: ['Shopify', 'Tap', 'MultiSafepay', 'Deema', 'Taly', 'Freshdesk', 'Wiyak', 'Bloy'],
    },
    {
      period: 'Alongside',
      meta: 'Team',
      role: 'Mentoring & Quality',
      org: 'Fresher training and delivery quality',
      tag: 'Enablement',
      summary:
        'Contributed to employee quality initiatives and project management activities — task allocation, progress tracking, code review and quality checks that keep delivery on time and on standard.',
      points: [
        '**Fresher onboarding** on ORM concepts, module structure and best practice',
        '**Code review** and quality gates before a module reaches a client',
        '**Progress tracking** and task allocation across active projects',
      ],
      chips: ['Mentoring', 'Code Review', 'Requirement Analysis', 'Client Coordination'],
    },
    {
      period: '2021',
      meta: 'Education',
      role: 'Bachelor of Computer Science',
      org: 'University of Calicut',
      tag: 'Degree',
      summary:
        'Programming fundamentals, databases and software design — the base that still decides how I model a schema or read a query before optimising it.',
      points: [],
      chips: ['Programming', 'Databases', 'OOP', 'Software Design'],
    },
  ],
  stats: [
    { value: 100, suffix: '+', label: 'Modules Customised\n& Implemented', note: 'across multiple domains' },
    { value: 30, suffix: '%', label: 'Faster Page Load\nafter ORM tuning', note: 'query and field refactoring' },
    { value: 8, suffix: '+', label: 'Third-party Systems\nIntegrated', note: 'commerce · payments · support' },
    { value: 3, suffix: '.5+ yrs', label: 'Hands-on Odoo\nExperience', note: 'development to consultation' },
  ],
}

export const projects = {
  eyebrow: '03 — Selected Work',
  title: 'Things that shipped.',
  aside: 'Six\nbuilds',
  items: [
    {
      no: 'P / 01',
      kind: 'Featured · Connector',
      title: 'QuickBooks Connector',
      body: 'A published Odoo app that keeps QuickBooks and Odoo accounting in step — chart of accounts mapping, customer and vendor sync, invoice and payment flow, with OAuth-based authentication and error handling that tells the user what actually failed rather than dumping a traceback.',
      chips: ['Odoo', 'QuickBooks API', 'OAuth', 'Accounting', 'Sync Logs'],
      metricValue: 'Two-way',
      metricLabel: 'accounting sync without re-keying',
      featured: true,
    },
    {
      no: 'P / 02',
      kind: 'Vertical App',
      title: 'Hospital Management',
      body: 'An end-to-end hospital management solution on Odoo — patient registration, appointments, doctor management, medical records, consultations, prescriptions and billing, with all workflows connected for efficient healthcare operations.',
      chips: ['Odoo', 'Healthcare', 'Patients', 'Appointments', 'Billing'],
      metricValue: 'Integrated',
      metricLabel: 'built for connected healthcare workflows',
    },
    {
      no: 'A / 03',
      kind: 'Core Module',
      title: 'Accounting Management',
      body: 'Accounting customisations covering invoicing, payments, journal entries, reconciliation and financial reporting — transforming complex accounting workflows into automated Odoo processes with accurate financial data and controls.',
      chips: ['Odoo Accounting', 'Invoicing', 'Payments', 'Reports'],
      metricValue: 'Finance-ready',
      metricLabel: 'built for accurate accounting workflows',
    },
    {
      no: 'P / 04',
      kind: 'Reporting',
      title: 'PDF & Excel Reporting Suite',
      body: 'Custom financial and performance reports across Sales, Purchase, Accounting and HR — QWeb-driven PDFs that print correctly, and Excel exports with real formatting, filters and totals rather than a raw dump of the table.',
      chips: ['QWeb', 'xlsxwriter', 'Accounting', 'HR', 'Sales'],
      metricValue: 'Print-ready',
      metricLabel: 'reports finance actually uses',
    },
    {
      no: 'P / 05',
      kind: 'Website · Frontend',
      title: 'Responsive Web Pages & Themes',
      body: 'Fully responsive website pages and landing sections for consultation and real estate clients, replicating reference designs to the pixel, plus advanced Odoo themes with configurable layouts published as products.',
      chips: ['Odoo Website', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      metricValue: 'Pixel-matched',
      metricLabel: 'to the client’s reference design',
    },
    {
      no: 'P / 06',
      kind: 'Retail',
      title: 'POS Customisation',
      body: 'Point of Sale extensions covering custom screens, receipt layouts and counter-side workflow changes, built on OWL so they survive the version upgrade rather than breaking on the next release.',
      chips: ['Odoo POS', 'OWL', 'Receipts', 'JavaScript'],
      metricValue: 'Counter-tested',
      metricLabel: 'built for the till, not the demo',
    },
    {
      no: 'I / 07',
      kind: 'Inventory',
      title: 'Inventory Management',
      body: 'Inventory customisations covering stock movements, warehouse operations, replenishment, multi-location workflows and inventory reporting, turning complex stock processes into reliable and automated Odoo workflows.',
      chips: ['Odoo Inventory', 'Stock Moves', 'Warehouses', 'Reports'],
      metricValue: 'Stock-accurate',
      metricLabel: 'built for real warehouse operations',
    },
  ],
}

export const cases = {
  eyebrow: '04 — Case Studies',
  title: 'Proof, in detail.',
  aside: 'Context to\noutcome',
  items: [
    {
      no: 'CS / 01',
      title: 'The pages that took too long',
      lead: 'Heavy list and form views made an active Odoo database feel unusable by mid-morning.',
      metric: '−30% load time',
      context:
        'A growing database with layered customisations — computed fields stacked on computed fields, and list views loading far more than the screen ever showed.',
      problem:
        'Every list refresh triggered chains of recomputation and unindexed lookups. Users blamed the server, but the cost was in the ORM layer and the field definitions above it.',
      modules: ['Sales', 'Accounting', 'Project', 'Base'],
      approach: ['ORM query analysis', 'Computed field refactor', 'Stored vs non-stored review', 'Index strategy'],
      outcomeValue: 'Up to 30% faster',
      outcomeText:
        'Page load dropped by as much as 30% after refactoring computed fields and rewriting the query paths behind them — with no change to what users saw on screen.',
    },
    {
      no: 'CS / 02',
      title: 'Taking payment without losing the order',
      lead: 'Third-party payment gateway integration where a dropped callback means a paid order that Odoo never records.',
      metric: 'Secure & recoverable',
      context:
        'A client needed a payment provider wired into Odoo checkout, with transactions reconciling cleanly against sales orders and invoices.',
      problem:
        'Gateway callbacks arrive out of order, repeat themselves, or vanish entirely. A naive handler either double-confirms an order or leaves a customer charged with nothing to show for it.',
      modules: ['Website · eCommerce', 'Sales', 'Accounting', 'Payment'],
      approach: ['Payment provider config', 'API flow & callbacks', 'Transaction state handling', 'Session management'],
      outcomeValue: 'Reconciled',
      outcomeText:
        'Transactions settle against the right order every time, with callback handling that tolerates retries and duplicates instead of trusting the first message it receives.',
    },
    {
      no: 'CS / 03',
      title: 'One codebase, three deployment worlds',
      lead: 'The same customisations running on Odoo.sh, Odoo Online and self-hosted infrastructure.',
      metric: 'Platform-agnostic',
      context:
        'Clients arrive on different platforms — some on Odoo.sh, some on Odoo Online, some on their own servers — and each has different limits on what a module may do.',
      problem:
        'Filesystem access, external dependencies, upgrade timing and configuration all behave differently per platform. Modules written for one environment quietly fail on the next.',
      modules: ['Odoo.sh', 'Odoo Online', 'On-premise', 'Docker · Nginx'],
      approach: ['Containerised Odoo', 'Nginx reverse proxy', 'AWS deployment', 'Upgrade & troubleshooting'],
      outcomeValue: 'Portable',
      outcomeText:
        'Customisations deploy across all three environments with platform-specific configuration handled at deployment rather than rewritten into the module.',
    },
  ],
}

export const services = {
  eyebrow: '05 — Services',
  title: 'How I engage.',
  aside: 'Functional\n& technical',
  columns: [
    {
      tag: 'Functional',
      title: 'Make Odoo fit the business.',
      points: [
        '**Requirement analysis** and process mapping from the current way of working to a clean Odoo workflow',
        '**Implementation and configuration** across Sales, Purchase, Accounting, Project, HR, POS and Website',
        '**Workflow design** — stages, approvals and automated actions that match how the team actually operates',
        '**Reporting** — the PDF and Excel outputs finance and management ask for by name',
        '**Training and handover** so the team runs the system without calling every week',
      ],
    },
    {
      tag: 'Technical',
      title: 'Build what the edge cases need.',
      points: [
        '**Custom module development** — business logic, automation, OWL and QWeb frontends',
        '**Integrations** — REST, XML-RPC, JSON-RPC and OAuth, including payment gateways',
        '**Performance work** — ORM query tuning, computed field refactoring, schema and index review',
        '**Security** — multi-company rules, access rights and record-level control',
        '**Deployment** — Odoo.sh, Odoo Online, Docker, Nginx, AWS and Azure, plus version upgrades',
      ],
    },
  ],
  modes: [
    { tag: 'Project', title: 'Fixed-scope delivery', body: 'A defined build or implementation — scoped, estimated and delivered end to end.' },
    { tag: 'Retainer', title: 'Ongoing partner', body: 'Monthly capacity for support, enhancements and a steady roadmap.' },
    { tag: 'Audit', title: 'Architecture review', body: 'A focused read of an existing Odoo setup — code, data model, performance and risk.' },
  ],
}

export const stack = {
  eyebrow: '06 — Stack',
  title: 'The arsenal.',
  aside: 'Nine\nclusters',
  clusters: [
    { name: 'Languages', title: 'Code as first language.', items: ['Python', 'JavaScript', 'Postgresql', 'OWL JS', 'Jquery', 'MS SQL', 'XML', 'HTML', 'CSS'] },
    { name: 'Odoo Development', title: 'Native to the framework.', items: ['ORM', 'Custom Workflows', 'Record Rules', 'Access Rights', 'Computed Fields', 'Performance Optimization', 'Session Management', 'Module Structure', 'Migration Support'] },
    { name: 'Frontend', title: 'What the user actually touches.', items: ['OWL Components', 'QWeb Templates', 'Bootstrap', 'Responsive Layouts', 'Website Builder', 'Advanced Themes'] },
    { name: 'API & Integration', title: 'Systems talking cleanly.', items: ['REST API', 'XML-RPC', 'JSON-RPC', 'OAuth', 'Payment Gateways', 'Callback Handling', 'Third-party Connectors'] },
    { name: 'Databases', title: 'Where the truth lives.', items: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Schema Design', 'Indexing', 'Data Migration'] },
    { name: 'Odoo Platforms', title: 'Wherever it has to run.', items: ['Odoo.sh', 'Odoo Online', 'On-Premise', 'Self-Hosted', 'Docker Deployments', 'Version Upgrades'] },
    { name: 'Cloud & DevOps', title: 'Production-grade deployment.', items: ['Docker', 'Nginx', 'AWS', 'Microsoft Azure', 'Linux', 'Git'] },
    { name: 'ERP Modules', title: 'Functional depth.', items: ['Sales', 'Purchase', 'Accounting', 'Project', 'Inventory', 'HR', 'POS', 'CRM', 'E-commerce', 'Website', 'Approvals', 'Studio'] },
    { name: 'Beyond the code', title: 'The part that ships projects.', items: ['Requirement Analysis', 'Client Coordination', 'Code Review', 'Team Mentoring', 'Debugging', 'Time Management', 'Accountability'] },
  ],
}

export const tools = {
  eyebrow: '07 — Free Tools',
  title: 'Odoo developer toolkit.',
  aside: 'Client-side\n· nothing sent',
}

export const integrations = {
  eyebrow: '08 — Integrations',
  title: 'Systems I have wired into Odoo.',
  aside: 'Connectors\n& gateways',
  intro:
    'Each of these is a live connector — authentication, data mapping, error handling and the retry behaviour that keeps records straight when the other side goes quiet.',
  items: [
    {
      name: 'Shopify',
      kind: 'E-commerce',
      body: 'Product, stock, order and customer sync between a Shopify store and Odoo, with webhooks driving updates in near real time.',
      chips: ['Admin API', 'Webhooks', 'Two-way sync'],
    },
    {
      name: 'Wiyak',
      kind: 'Delivery',
      body: 'Order handoff and delivery status flowing back into Odoo so the sales order shows the real state of the shipment.',
      chips: ['REST API', 'Status sync'],
    },
    {
      name: 'Bloy Loyalty',
      kind: 'Loyalty',
      body: 'Loyalty points earned and redeemed at the counter, validated against the Bloy API before the payment line is confirmed.',
      chips: ['POS', 'Points redemption', 'API validation'],
    },
    {
      name: 'Tap Payments',
      kind: 'Payments',
      body: 'Card and wallet payments through Tap, with hosted checkout, callback handling and transaction reconciliation against the order.',
      chips: ['Payment gateway', 'Callbacks', 'Reconciliation'],
    },
    {
      name: 'MultiSafepay',
      kind: 'Payments',
      body: 'A second payment provider on the same acquirer pattern — payment links, status webhooks and refunds handled inside Odoo.',
      chips: ['Payment gateway', 'Refunds', 'Webhooks'],
    },
    {
      name: 'Deema',
      kind: 'Buy Now, Pay Later',
      body: 'Split-payment checkout wired into the Odoo order flow, with instalment status reflected on the invoice.',
      chips: ['BNPL', 'Checkout', 'Order sync'],
    },
    {
      name: 'Taly',
      kind: 'Payment Integration',
      body: 'Payment integration between Odoo and Taly — connecting payment transactions with Odoo orders, invoices and payment records to streamline the payment workflow and maintain accurate transaction tracking.',
      chips: ['Payment Gateway', 'Odoo Integration', 'Transactions', 'Payment Tracking'],
    },
    {
      name: 'Freshdesk',
      kind: 'Support',
      body: 'Tickets raised from Odoo records and kept in step with Freshdesk, so support context sits next to the customer it belongs to.',
      chips: ['Ticketing', 'REST API', 'Record linking'],
    },
  ],
}

export const writing = {
  eyebrow: '09 — Writing',
  title: 'Notes from production.',
  aside: 'Field notes\n& teardowns',
  items: [
    {
      tag: 'Performance',
      state: 'Draft',
      title: 'Your computed fields are the slow part',
      body: 'How I traced slow Odoo screens back to stacked computed fields, unnecessary ORM calls, and non-stored computations — and what I changed to make large datasets respond faster.',
      content:
        'Performance problems rarely come from a single query. In Odoo, a computed field can trigger another computation, which triggers more ORM reads, turning a simple form or report into hundreds of database queries. I’ve worked on identifying these bottlenecks, reducing unnecessary searches, optimizing database functions, and deciding when a value should be stored instead of calculated on every request.',
    },
    {
      tag: 'Payments',
      state: 'Draft',
      title: 'Gateway callbacks lie to you',
      body: 'Retries, duplicate payments and out-of-order callbacks — designing payment integrations that remain reliable when the real world gets messy.',
      content:
        'Payment integrations need to handle more than a successful response. A gateway can send the same callback multiple times, deliver events out of order, or retry after a timeout. The integration needs proper transaction references, status validation and duplicate handling so Odoo never creates inconsistent payment records. I’ve worked on payment gateway integrations where reliability matters more than simply making the first transaction work.',
    },
    {
      tag: 'Deployment',
      state: 'Draft',
      title: 'Odoo.sh, Online or your own server',
      body: 'What changes between Odoo.sh, Odoo Online and on-premise deployments — and how I approach modules that need to survive different environments.',
      content:
        'An Odoo module doesn’t live in isolation. Deployment architecture affects configuration, dependencies, scheduled actions, database access, performance and debugging. I’ve worked across Odoo.sh, AWS and on-premise environments, handling deployments, migrations, server configuration and production troubleshooting while keeping custom modules maintainable across environments.',
    },
  ],
}

export const credentials = {
  eyebrow: '10 — Credentials',
  title: 'Education.',
  aside: 'Three\nmarks',
  items: [
    {
      kind: 'Degree',
      when: '2021',
      title: 'Bachelor of Computer Science',
      org: 'University of Calicut',
      body: 'Programming, databases and software design — the conceptual base under every module written since.',
    },
    {
      kind: 'Higher Secondary',
      when: '2018',
      title: 'Plus Two — Science, Computer Science',
      org: 'GHSS Chathanur',
      body: 'First contact with programming and the point the career direction was set.',
    },
    {
      kind: 'Secondary',
      when: '2016',
      title: 'SSLC',
      org: 'SCERT · GHSS Chathanur',
      body: 'Kerala state secondary education.',
    },
  ],
}

export const contact = {
  kicker: 'Available · MMXXVI',
  title: 'Let’s build something',
  titleAccent: 'that lasts.',
  note: 'Open to projects',
}

/* The dedicated Contact page (?p=contact) */
export const contactPage = {
  eyebrow: 'Contact',
  title: 'Tell me what you are building.',
  intro:
    'Implementation, a custom module, an integration or a second opinion on an existing setup — send the details and I will reply with what it would take.',
  responseNote: 'I usually reply within a working day.',
  subjects: [
    'Odoo implementation',
    'Custom module development',
    'Third-party integration',
    'Performance / audit',
    'Something else',
  ],
}
