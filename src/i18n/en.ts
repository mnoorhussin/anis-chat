/**
 * English copy dictionary. This is the single source of truth for EN copy.
 * `Dict` (exported below) is the shape every other locale must satisfy, so
 * EN and AR stay structurally in sync at compile time.
 */
const en = {
  meta: {
    siteName: 'Anis',
    defaultTitle: 'Anis — the AI companion for customer support',
    titleTemplate: '%s · Anis',
    description:
      'Anis is the AI companion that answers your customers 24/7 — instantly, in their own language, grounded in your own content. Native Arabic and English. Live in minutes.',
    ogAlt: 'Anis — instant AI customer support in every language',
  },

  nav: {
    links: {
      features: 'Features',
      how: 'How it works',
      useCases: 'Use cases',
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
      'Anis is the AI companion that answers your customers 24/7 — instantly, in their own language, grounded in your own content. One line of code, live in minutes.',
    trustLine: 'Built for Europe & the Arab world · Arabic and English, natively',
    chat: {
      header: 'Support',
      status: 'Online',
      customer: 'Do you ship to Germany, and how long does it take?',
      agent:
        'Yes — we ship across the EU. Orders to Germany arrive in 2–4 business days with free returns. Want me to check delivery for your city?',
      typing: 'Anis is typing…',
      inputPlaceholder: 'Ask anything…',
    },
  },

  trustBar: {
    label: 'Works with the tools you already use',
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
      'A tireless companion for every customer — instant, accurate, and fluent in their language. You stay in control; Anis handles the rest.',
  },

  features: {
    eyebrow: 'Why Anis',
    title: 'Everything a great first reply needs.',
    lead: 'Premium support, without the headcount. Set up once, then let Anis do the waiting.',
    items: [
      {
        title: 'Instant 24/7 answers',
        body: 'Always on. Replies in under a second, day or night, holidays included.',
        icon: 'zap',
      },
      {
        title: "Speaks every customer's language",
        body: 'Detects and replies in 40+ languages — Arabic and English natively, side by side.',
        icon: 'languages',
      },
      {
        title: 'Installs in minutes',
        body: 'One line of code on WordPress, Shopify, or any website. No plugins to wrestle.',
        icon: 'code',
      },
      {
        title: 'Grounded in your content',
        body: 'Answers only from your material — no invented facts, no guessing, no hallucinations.',
        icon: 'shield-check',
      },
      {
        title: 'Works everywhere',
        body: 'Web chat, WhatsApp, and Messenger — one brain across every channel.',
        icon: 'messages-square',
      },
      {
        title: 'Insights that compound',
        body: 'See what customers ask, what converts, and where you quietly lose them.',
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
        body: 'From the first visitor, every question gets an instant, accurate reply — in their language.',
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
          text: 'Of course. Returns are free within 30 days of delivery. I can start it now — do you have your order number?',
        },
        { from: 'user', text: "It's #48213." },
        {
          from: 'agent',
          text: "Found it. Your return label is on its way to your email. Anything else I can help with?",
        },
      ],
    },
    demoAr: {
      label: 'العربية',
      messages: [
        { from: 'user', text: 'هل يمكنني إرجاع سترة اشتريتها الأسبوع الماضي؟' },
        {
          from: 'agent',
          text: 'بالتأكيد. الإرجاع مجاني خلال 30 يومًا من الاستلام. أستطيع البدء الآن — هل لديك رقم الطلب؟',
        },
        { from: 'user', text: 'رقمه ٤٨٢١٣.' },
        {
          from: 'agent',
          text: 'وجدته. بطاقة الإرجاع في طريقها إلى بريدك الإلكتروني. هل من شيء آخر أساعدك به؟',
        },
      ],
    },
  },

  productShowcase: {
    eyebrow: 'Your command center',
    title: 'See every conversation. Understand every customer.',
    lead: 'One clean dashboard for live chats, what people ask, and where you win or lose them — across every channel and language.',
    bullets: [
      'Live conversations across web, WhatsApp & Messenger',
      'Know what customers ask — and where they drop off',
      'Multilingual insights, updated in real time',
    ],
  },

  mocks: {
    dashboard: {
      brand: 'Anis',
      nav: ['Overview', 'Conversations', 'Sources', 'Analytics', 'Settings'],
      overview: 'Overview',
      range: 'Last 7 days',
      stats: [
        { label: 'Conversations', value: '1,248', delta: '+18%' },
        { label: 'Resolved by AI', value: '92%', delta: '+4%' },
        { label: 'Avg. reply', value: '0.8s', delta: '' },
        { label: 'Languages', value: '12', delta: '' },
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
        { name: 'Sara M.', msg: 'Is there a student discount?', status: 'Active' },
      ],
      statusResolved: 'Resolved',
      statusActive: 'Active',
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
      filterAi: 'Handled by AI',
      list: [
        { name: 'Layla H.', snippet: 'شكراً، وصلت الطلبية!', channel: 'whatsapp', time: '2m' },
        { name: 'James P.', snippet: 'Do you offer refunds?', channel: 'web', time: '8m' },
        { name: 'Amine T.', snippet: 'Où est ma commande ?', channel: 'messenger', time: '14m' },
        { name: 'Sofia R.', snippet: 'Ist der Versand kostenlos?', channel: 'web', time: '22m' },
        { name: 'Nour K.', snippet: 'هل يوجد مقاس أكبر؟', channel: 'instagram', time: '1h' },
      ],
      thread: {
        name: 'James P.',
        channelLabel: 'Web · English',
        aiBadge: 'Resolved by AI',
        messages: [
          { from: 'user', text: 'Do you offer refunds?' },
          {
            from: 'agent',
            text: 'Yes — full refunds within 30 days of delivery. Want me to start one for your last order?',
          },
        ],
        handoff: 'Resolved in 0.8s · handed to a human only if needed',
      },
    },
  },

  useCases: {
    eyebrow: 'Made for your business',
    title: 'Wherever customers reach out, Anis is there.',
    items: [
      {
        title: 'E-commerce & Shopify',
        body: 'Answer sizing, shipping, and returns in the moment — and turn questions into checkouts.',
        icon: 'shopping-bag',
      },
      {
        title: 'Agencies',
        body: 'Roll out branded AI support to every client from one dashboard. A new line of recurring revenue.',
        icon: 'briefcase',
      },
      {
        title: 'Local businesses',
        body: 'Be there after hours. Book tables, answer FAQs, and never miss a walk-in question again.',
        icon: 'store',
      },
      {
        title: 'Support teams',
        body: 'Deflect the repetitive tickets and hand off the hard ones — with full context — to a human.',
        icon: 'headset',
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    title: 'Connects to everything you run on.',
    lead: 'Install on your stack in minutes and reach customers on the channels they already use.',
    cta: 'See all integrations',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple pricing that grows with you.',
    lead: 'Start small, scale when you do. Every plan speaks Arabic and English out of the box.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualNote: '2 months free',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    mostPopular: 'Most popular',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        priceMonthly: 19,
        tagline: 'For a single site getting started.',
        cta: 'Get early access',
        features: [
          '1 website',
          'Up to 500 AI replies / month',
          'English + Arabic',
          'Self-serve setup',
          'Email support',
          '“Powered by Anis” badge',
        ],
      },
      {
        id: 'pro',
        name: 'Pro',
        priceMonthly: 49,
        tagline: 'For growing teams that want it all.',
        cta: 'Get early access',
        features: [
          'Up to 3 websites',
          '3,000 AI replies / month',
          'WhatsApp + Messenger',
          'Remove Anis badge',
          'Custom branding & colors',
          'Analytics dashboard',
          'Priority support',
        ],
      },
      {
        id: 'business',
        name: 'Business',
        priceMonthly: 99,
        tagline: 'For established businesses at scale.',
        cta: 'Get early access',
        features: [
          'Up to 10 websites',
          '15,000 AI replies / month',
          'All channels',
          'Done-for-you setup',
          'Human handoff',
          'Advanced analytics',
          'Dedicated support',
        ],
      },
    ],
    enterprise: {
      name: 'Enterprise',
      tagline: 'For larger teams with custom needs — volume, security, SLAs, and onboarding tailored to you.',
      priceLabel: 'Custom',
      cta: 'Contact us',
      features: ['Unlimited websites', 'Custom reply volume', 'SSO & advanced security', 'Dedicated success manager'],
    },
  },

  stats: {
    title: 'Support your customers can feel.',
    items: [
      { value: '<1s', label: 'Average reply time' },
      { value: '24/7', label: 'Always available' },
      { value: '40+', label: 'Languages supported' },
      { value: '1 line', label: 'To install' },
    ],
  },

  testimonials: {
    eyebrow: 'Early believers',
    title: 'Loved by the teams shaping it.',
    note: 'Placeholder testimonials shown during early access.',
    items: [
      {
        quote:
          'Our customers ask at midnight and get real answers. Anis reads like a member of our team — in Arabic and English both.',
        name: 'Layla Haddad',
        role: 'Founder, Noor Boutique',
      },
      {
        quote:
          'We rolled Anis out to a dozen clients in an afternoon. Setup was one line. Support tickets dropped the same week.',
        name: 'Marco Bianchi',
        role: 'Director, Northlight Agency',
      },
      {
        quote:
          'It only answers from our own content, so I never worry about it making things up. That trust is everything.',
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
        a: 'Anis replies in 40+ languages and detects each customer’s language automatically. Arabic and English are first-class, with correct right-to-left support built in.',
      },
      {
        q: 'Is my data private and GDPR-compliant?',
        a: 'Yes. Anis is built privacy-first for European and regional data rules. Your content is used only to answer your customers, never to train shared models, and you can export or delete it at any time.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Absolutely. Plans are month-to-month with no lock-in. Cancel or change tiers whenever you like — no phone calls, no friction.',
      },
      {
        q: 'How does Anis avoid making things up?',
        a: 'Anis answers only from the content you give it — your pages, docs, and FAQs. When it doesn’t know, it says so and can hand off to a human, rather than guessing.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Early access',
    title: 'Give your customers a companion.',
    lead: 'Be among the first businesses to put Anis to work. Join the waitlist and we’ll reach out as your access opens.',
  },

  footer: {
    tagline: 'The AI companion that answers your customers — instantly, in every language.',
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
          integrations: 'Integrations',
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
