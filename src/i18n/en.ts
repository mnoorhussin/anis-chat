/**
 * English copy dictionary. This is the single source of truth for EN copy.
 * `Dict` (exported below) is the shape every other locale must satisfy, so
 * EN and AR stay structurally in sync at compile time.
 */
const en = {
  meta: {
    siteName: 'Anis',
    defaultTitle: 'Anis — Arabic-first AI customer support',
    titleTemplate: '%s · Anis',
    description:
      "Anis is an Arabic-first AI support agent that answers your customers 24/7 from your business's own approved content — and hands off to your team when it can't find a reliable answer. Install on your website in one line. Built for Europe and the Arab world.",
    ogAlt: 'Anis — Arabic-first AI customer support',
  },

  nav: {
    links: {
      features: 'Features',
      how: 'How it works',
      useCases: 'Use cases',
      agencies: 'Agencies',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
    cta: 'Get early access',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },

  langSwitch: {
    label: 'Change language',
    en: 'English',
    ar: 'العربية',
  },

  theme: {
    toggle: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
  },

  common: {
    getEarlyAccess: 'Get early access',
    bookDemo: 'Book a demo',
    joinWaitlist: 'Join the waitlist',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    submit: 'Request access',
    submitting: 'Sending…',
    successTitle: "You're on the list.",
    successBody: "We'll be in touch as soon as your early access is ready.",
    errorTitle: 'Something went wrong.',
    errorBody: 'Please try again, or email us at hello@anis.chat.',
    emailInvalid: 'Please enter a valid email address.',
    nameRequired: 'Please enter your name.',
    privacyNote: 'No spam. Unsubscribe anytime. We respect your privacy.',
  },

  hero: {
    badge: 'Now in early access',
    titleTop: 'Never leave a',
    titleAccent: 'customer waiting',
    titleEnd: '.',
    lead:
      "Anis is an Arabic-first AI support agent that answers your customers around the clock from your business's own content — and hands the conversation to your team the moment it can't find a reliable answer. Install it on your site with one line, and stay in control of every conversation.",
    trustLine: 'Built for Europe & the Arab world · Natural Arabic, never literal machine translation',
    chips: [
      { label: 'Answers from your sources', icon: 'shield-check' },
      { label: 'Human handoff when needed', icon: 'users' },
    ],
    chat: {
      header: 'Support',
      status: 'Online',
      customer: 'Do you ship to Germany, and how long does it take?',
      agent:
        'Yes — we ship across the EU, and delivery to Germany usually takes 2–4 business days. Returns are free within 30 days of delivery.',
      typing: 'Anis is typing…',
      inputPlaceholder: 'Ask anything…',
    },
  },

  trustBar: {
    label: 'Install on the tools you already use',
  },

  problem: {
    eyebrow: 'The cost of silence',
    title: 'Every unanswered message is a customer walking away.',
    lead:
      'People expect answers now — not tomorrow morning. When they wait, they leave. And your team can only reply to so many, so fast.',
    pains: [
      {
        title: 'Slow replies lose sales',
        body: 'Most buyers move on after a few minutes of silence. Nights, weekends, and rush hours are where deals quietly disappear.',
      },
      {
        title: 'Customers arrive at 2 a.m.',
        body: 'Your busiest visitors rarely match your office hours — especially across time zones and languages.',
      },
      {
        title: 'Your team is buried',
        body: 'The same questions, over and over, drown the hard ones. Support burns out answering what a machine could.',
      },
    ],
  },

  solution: {
    eyebrow: 'The promise',
    title: 'Anis answers the moment they ask.',
    lead:
      'A tireless first responder for every customer — grounded in your content, fluent in their language, and honest when it needs a human. You stay in control; Anis handles the rest.',
  },

  features: {
    eyebrow: 'Why Anis',
    title: 'Everything a great first reply needs.',
    lead: 'Premium support, without the headcount. Set up once, then let Anis do the waiting.',
    items: [
      {
        title: 'Instant, around-the-clock answers',
        body: 'Always on. Replies begin the moment a customer asks — day or night, weekends and holidays included.',
        icon: 'zap',
      },
      {
        title: "Speaks your customer's language",
        body: 'Natural Arabic and fluent English, side by side — with automatic language detection and additional languages supported.',
        icon: 'languages',
      },
      {
        title: 'Installs in minutes',
        body: 'One line of code on WordPress, Shopify, or any website — locked to the domains you approve.',
        icon: 'code',
      },
      {
        title: 'Answers from your sources',
        body: "Designed to answer only from your approved content. When it can't find a reliable answer, it says so clearly and hands the conversation to your team instead of guessing.",
        icon: 'shield-check',
      },
      {
        title: 'One knowledge base, every channel',
        body: 'Live on your website today. WhatsApp and Messenger are coming next — all from a single knowledge base.',
        icon: 'messages-square',
      },
      {
        title: 'Insights that compound',
        body: 'See what customers ask, what Anis resolved, where it escalated, and which questions your content still cannot answer.',
        icon: 'line-chart',
      },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'Live in three steps.',
    lead: 'No project plan, no agency, no code review. You could be answering customers before your coffee cools.',
    steps: [
      {
        step: '01',
        title: 'Add your content',
        body: 'Point Anis at your website, docs, or FAQs. It learns your business — products, policies, tone — in minutes.',
      },
      {
        step: '02',
        title: 'Paste one line of code',
        body: 'Drop the snippet into your site or install the plugin. No developers required.',
      },
      {
        step: '03',
        title: 'Anis answers your customers',
        body: 'From the first visitor, every question gets an instant, grounded reply — in their language.',
      },
    ],
  },

  showcase: {
    eyebrow: 'See it in action',
    title: 'One companion, every language.',
    lead: 'The same Anis, answering fluently in Arabic and English — grounded in the same business content.',
    demoEn: {
      label: 'English',
      messages: [
        { from: 'user', text: 'Can I return a jacket I bought last week?' },
        {
          from: 'agent',
          text: "Of course. According to the store's return policy, returns are free within 30 days of delivery. Would you like me to pass your request to the support team?",
        },
      ],
    },
    demoAr: {
      label: 'العربية',
      messages: [
        { from: 'user', text: 'هل يمكنني إرجاع سترة اشتريتها الأسبوع الماضي؟' },
        {
          from: 'agent',
          text: 'بالتأكيد. وفق سياسة المتجر، الإرجاع مجاني خلال ٣٠ يومًا من الاستلام. هل ترغب في تحويل طلبك إلى فريق الدعم لمساعدتك في بدء الإرجاع؟',
        },
      ],
    },
  },

  productShowcase: {
    eyebrow: 'Your command center',
    title: 'See every conversation. Understand every customer.',
    lead: 'One clean dashboard for live chats, what people ask, what Anis resolved, and where it handed off — across your channels and languages.',
    bullets: [
      'Conversations, resolutions, and escalations at a glance',
      'Knowledge gaps: the questions your content still cannot answer',
      'Leads captured, top topics, and languages used',
    ],
  },

  mocks: {
    sampleLabel: 'Sample dashboard',
    dashboard: {
      brand: 'Anis',
      nav: ['Overview', 'Conversations', 'Sources', 'Analytics', 'Settings'],
      overview: 'Overview',
      range: 'Last 7 days',
      stats: [
        { label: 'Conversations', value: '1,248', delta: '+18%' },
        { label: 'Auto-resolution rate', value: '82%', delta: '+4%' },
        { label: 'Avg. first response', value: '3s', delta: '' },
        { label: 'Leads captured', value: '84', delta: '' },
      ],
      chartTitle: 'Conversations this week',
      langTitle: 'Top languages',
      langs: [
        { name: 'Arabic', pct: 46 },
        { name: 'English', pct: 38 },
        { name: 'French', pct: 10 },
        { name: 'German', pct: 6 },
      ],
      convTitle: 'Recent conversations',
      convs: [
        { name: 'Layla H.', msg: 'Do you ship to Germany?', status: 'Resolved' },
        { name: 'Marco B.', msg: 'How do I reset my password?', status: 'Resolved' },
        { name: 'Sara M.', msg: 'Do you offer bulk discounts?', status: 'Escalated' },
      ],
      statusResolved: 'Resolved',
      statusActive: 'Active',
      statusEscalated: 'Escalated',
    },
    sources: {
      title: 'Sources',
      subtitle: 'Anis learns from these',
      add: 'Add source',
      trained: 'Trained',
      items: [
        { label: 'yourstore.com', meta: 'Website · 128 pages', icon: 'globe' },
        { label: 'Product-FAQ.pdf', meta: 'Document · 24 pages', icon: 'file-text' },
        { label: 'Returns & shipping', meta: 'Help article', icon: 'book-open' },
      ],
    },
    install: {
      title: 'Add to your site',
      note: 'One line. No developers.',
      copy: 'Copy',
      copied: 'Copied',
    },
    inbox: {
      title: 'Conversations',
      filterAll: 'All',
      filterAi: 'Auto-resolved',
      list: [
        { name: 'Layla H.', snippet: 'شكراً، وصلت الطلبية!', channel: 'web', time: '2m' },
        { name: 'James P.', snippet: 'Do you offer refunds?', channel: 'web', time: '8m' },
        { name: 'Amine T.', snippet: 'Où est ma commande ?', channel: 'web', time: '14m' },
        { name: 'Sofia R.', snippet: 'Ist der Versand kostenlos?', channel: 'web', time: '22m' },
        { name: 'Nour K.', snippet: 'هل يوجد مقاس أكبر؟', channel: 'web', time: '1h' },
      ],
      thread: {
        name: 'James P.',
        channelLabel: 'Web · English',
        aiBadge: 'Resolved by Anis',
        messages: [
          { from: 'user', text: 'Do you offer refunds?' },
          {
            from: 'agent',
            text: 'Yes — full refunds within 30 days of delivery. Would you like me to pass this to the team to start it?',
          },
        ],
        handoff: "Answered from the store's sources · handed to a human only if needed",
      },
    },
  },

  useCases: {
    eyebrow: 'Made for your business',
    title: 'Wherever customers reach out, Anis is there.',
    items: [
      {
        title: 'Agencies',
        body: 'Resell Anis to every client from one dashboard — separate workspaces, your branding, recurring revenue.',
        icon: 'briefcase',
      },
      {
        title: 'E-commerce & Shopify',
        body: 'Answer sizing, shipping, and returns in the moment — in Arabic and English — and hand off when a human is needed.',
        icon: 'shopping-bag',
      },
      {
        title: 'Local businesses',
        body: 'Be there after hours. Answer common questions, capture leads, and never miss a walk-in question again.',
        icon: 'store',
      },
      {
        title: 'Support teams',
        body: 'Deflect the repetitive tickets and hand off the hard ones — with full context — to a human.',
        icon: 'headset',
      },
    ],
  },

  agency: {
    eyebrow: 'For agencies',
    title: 'Launch a smart support assistant for every client — under your brand, from one dashboard.',
    text: 'Spin up an independent workspace per client, tailor the branding, sources, and usage limits, and deliver recurring-revenue AI support without building the system from scratch.',
    cta: 'Start an agency trial',
    bullets: [
      'An independent workspace for every client',
      'One dashboard across all your clients',
      'Separate sources, conversations & usage limits',
      'Your branding — remove Anis on the right plan',
      'Invite each client’s staff',
      'Duplicate a workspace in one click',
      'Branded, per-client reports',
    ],
    mock: {
      brand: 'Anis',
      label: 'Agency',
      title: 'Client workspaces',
      add: 'New workspace',
      repliesLabel: 'replies',
      clients: [
        { name: 'Noor Boutique', plan: 'Growth', replies: '2.1k' },
        { name: 'Atlas Travel', plan: 'Starter', replies: '740' },
        { name: 'Café Sud', plan: 'Starter', replies: '480' },
        { name: 'Verde Store', plan: 'Growth', replies: '1.6k' },
      ],
    },
  },

  integrations: {
    eyebrow: 'Integrations',
    title: 'Connects to everything you run on.',
    lead: 'Install on your website today. Messaging channels are rolling out next — the ones your customers already use.',
    cta: 'Get early access',
    soon: 'Soon',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Pricing that scales with your conversations.',
    lead: 'Start free, upgrade when you grow. Every plan speaks Arabic and English — and every plan has clear limits, so there are no surprise bills.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualNote: '2 months free',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    mostPopular: 'Most popular',
    tiers: [
      {
        id: 'free',
        name: 'Free',
        price: 0,
        tagline: 'Try Anis on one site.',
        cta: 'Get early access',
        highlight: '',
        features: ['50 AI replies', '1 assistant · 1 website', 'Basic source upload', 'Anis branding'],
      },
      {
        id: 'starter',
        name: 'Starter',
        price: 29,
        tagline: 'For a single business getting started.',
        cta: 'Get early access',
        highlight: '',
        features: [
          '1,000 AI replies / mo',
          '1 assistant · 1 website',
          'Basic analytics',
          'Lead capture',
          'Email escalation',
        ],
      },
      {
        id: 'growth',
        name: 'Growth',
        price: 79,
        tagline: 'For growing teams that want control.',
        cta: 'Get early access',
        highlight: 'popular',
        features: [
          '4,000 AI replies / mo',
          'Remove Anis branding',
          'Advanced analytics',
          'Knowledge-gap reporting',
          'Human takeover',
          'Automatic source refresh',
          'Multiple team members',
        ],
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 149,
        tagline: 'For higher volume and custom actions.',
        cta: 'Get early access',
        highlight: '',
        features: [
          '10,000 AI replies / mo',
          'API access',
          'Advanced actions',
          'WhatsApp connection (when available)',
          'Priority support',
          'More team members & sources',
        ],
      },
      {
        id: 'agency',
        name: 'Agency',
        price: 299,
        tagline: 'Resell Anis to your clients, white-label.',
        cta: 'Start an agency trial',
        highlight: 'agency',
        features: [
          'Up to 20 client workspaces',
          '25,000 shared AI replies',
          'Full white-label experience',
          'Central agency dashboard',
          'Client invitations',
          'Branded reports',
          'Workspace duplication',
          'Custom agency domain (when available)',
        ],
      },
    ],
    addonTitle: 'Need more room?',
    addonText: 'Extra agency workspace from $10–15/mo plus its usage. Add AI-reply credits to any plan anytime.',
    notes: [
      'Every plan includes a set number of AI replies — no unlimited usage.',
      'Automatic top-ups, manual credits, usage warnings, and a hard spending limit.',
      'Clear overage pricing, with a discount on annual billing.',
      'WhatsApp / Meta messaging fees are billed separately or passed through.',
    ],
  },

  stats: {
    title: 'Support your customers can feel.',
    items: [
      { value: 'Arabic-first', label: 'Natural, full RTL support' },
      { value: '24/7', label: 'Always available' },
      { value: 'AR + EN', label: 'Core languages, plus more' },
      { value: '1 line', label: 'To install' },
    ],
  },

  testimonials: {
    eyebrow: 'Early believers',
    title: 'Built with the teams shaping it.',
    note: 'Illustrative quotes shown during early access — not real customer results yet.',
    items: [
      {
        quote:
          'Our customers ask at midnight and get real answers. Anis reads like a member of our team — in Arabic and English both.',
        name: 'Layla Haddad',
        role: 'Founder, Noor Boutique',
      },
      {
        quote:
          'We can stand up a branded assistant per client from one place. That changes what we can offer — and bill for.',
        name: 'Marco Bianchi',
        role: 'Director, Northlight Agency',
      },
      {
        quote:
          'It answers from our own content and hands off when it is unsure. That honesty is exactly what I wanted.',
        name: 'Sara Meyer',
        role: 'Head of CX, Kessler & Co.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    lead: 'Everything you need to know before you get early access.',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. Anis installs with a single line of code, a WordPress plugin, or a Shopify app. If you can paste a snippet, you can launch it — and if you would rather not, our team sets it up for you.',
      },
      {
        q: 'How long does setup take?',
        a: 'Minutes. Point Anis at your website or upload your FAQs, paste the snippet, and it starts answering. Most businesses are live the same day.',
      },
      {
        q: 'Which languages does Anis support?',
        a: 'Arabic and English are first-class — natural phrasing and correct right-to-left support, not literal machine translation. Anis detects each customer’s language automatically, and additional languages are supported.',
      },
      {
        q: 'Which channels are available today?',
        a: 'Today Anis runs as a website widget you can install on any site. WhatsApp and Messenger are in active development and will be clearly marked when they are ready.',
      },
      {
        q: 'What happens when Anis doesn’t know the answer?',
        a: 'It tells the customer it couldn’t find the answer in your sources and offers to hand the conversation to your team — rather than guessing or inventing an answer.',
      },
      {
        q: 'How do you handle my data and privacy?',
        a: 'Your content is used only to answer your own customers — never to train shared models. You can export or delete it at any time, data is handled with European rules in mind, and a data-processing agreement is available. See our Privacy Policy for specifics.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Absolutely. Plans are month-to-month with no lock-in. Cancel or change tiers whenever you like — no phone calls, no friction.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Early access',
    title: 'Give your customers a companion.',
    lead: 'Be among the first businesses to put Anis to work. Join the waitlist and we’ll reach out as your access opens.',
  },

  footer: {
    tagline: 'Arabic-first AI customer support for Europe and the Arab world.',
    newsletterTitle: 'Get launch updates',
    newsletterBody: 'One short email when early access opens. Nothing else.',
    columns: {
      product: {
        title: 'Product',
        links: {
          features: 'Features',
          how: 'How it works',
          pricing: 'Pricing',
          useCases: 'Use cases',
          agencies: 'Agencies',
        },
      },
      company: {
        title: 'Company',
        links: {
          about: 'About',
          blog: 'Blog',
          contact: 'Contact',
        },
      },
      legal: {
        title: 'Legal',
        links: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy',
        },
      },
    },
    rights: 'All rights reserved.',
    madeWith: 'Built for Europe & the Arab world.',
  },

  cookie: {
    title: 'We value your privacy',
    body: 'We use essential cookies to run this site. With your consent, we’d also use analytics to improve it. You can change your choice anytime.',
    accept: 'Accept all',
    reject: 'Reject non-essential',
    settings: 'Preferences',
    save: 'Save choices',
    essential: 'Essential',
    essentialNote: 'Required for the site to function. Always on.',
    analytics: 'Analytics',
    analyticsNote: 'Privacy-friendly, anonymous usage stats to help us improve.',
    privacyLink: 'Read our Privacy Policy',
  },
} ;

export type Dict = typeof en;
export default en;
