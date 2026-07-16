import type { Lang } from './config';

export interface LegalSection {
  heading: string;
  body: string[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}
export interface LegalSet {
  privacy: LegalDoc;
  terms: LegalDoc;
  cookies: LegalDoc;
}

/**
 * NOTE: Standard GDPR-aware boilerplate for a pre-launch marketing site.
 * Placeholders in [brackets] (legal entity, address, jurisdiction) must be
 * completed and the whole set reviewed by a qualified lawyer before launch.
 */
const UPDATED_EN = '16 July 2026';
const UPDATED_AR = '١٦ يوليو ٢٠٢٦';
const ENTITY = '[Anis — legal entity to be confirmed]';

const en: LegalSet = {
  privacy: {
    title: 'Privacy Policy',
    updated: `Last updated: ${UPDATED_EN}`,
    intro:
      'This Privacy Policy explains how Anis collects, uses, and protects personal data when you visit this website or join our early-access waitlist. We are committed to privacy by design and to the EU General Data Protection Regulation (GDPR).',
    sections: [
      {
        heading: '1. Who we are',
        body: [
          `This website is operated by Anis (“we”, “us”, “our”), ${ENTITY}. For any privacy question or to exercise your rights, contact us at hello@anis.chat. Anis is the data controller for the personal data described in this policy.`,
        ],
      },
      {
        heading: '2. Information we collect',
        body: [
          'Waitlist & contact data: when you submit an early-access or contact form, we collect the name and email address you provide.',
          'Usage data: with your consent, we collect anonymous, aggregated analytics about how the site is used (for example, pages viewed and general region). We do not use this to identify you.',
          'Technical data: our hosting provider may process your IP address and browser type as a normal part of serving the site securely.',
        ],
      },
      {
        heading: '3. How we use your data & legal bases',
        body: [
          'To contact you about early access and product updates you requested — legal basis: your consent (Art. 6(1)(a) GDPR).',
          'To operate, secure, and improve the website — legal basis: our legitimate interests (Art. 6(1)(f) GDPR).',
          'To comply with legal obligations where applicable — legal basis: legal obligation (Art. 6(1)(c) GDPR).',
        ],
      },
      {
        heading: '4. Cookies & analytics',
        body: [
          'We use only essential cookies by default. Non-essential analytics run solely if you accept them in our cookie banner. You can change your choice at any time. See our Cookie Policy for details.',
        ],
      },
      {
        heading: '5. Sharing & processors',
        body: [
          'We do not sell your personal data. We share it only with service providers who process it on our behalf under a data-processing agreement — for example, our hosting provider, a form/email service, and a privacy-friendly analytics provider. Each acts only on our instructions.',
        ],
      },
      {
        heading: '6. International transfers',
        body: [
          'Where data is transferred outside the European Economic Area, we rely on appropriate safeguards such as the European Commission’s Standard Contractual Clauses, so your data receives an equivalent level of protection.',
        ],
      },
      {
        heading: '7. Data retention',
        body: [
          'We keep waitlist and contact data only as long as needed for the purposes above or until you ask us to delete it or withdraw consent. Anonymous analytics are retained in aggregate form.',
        ],
      },
      {
        heading: '8. Your rights',
        body: [
          'Under the GDPR you have the right to access, rectify, erase, restrict, or object to the processing of your data, and the right to data portability. You may withdraw consent at any time without affecting prior processing.',
          'To exercise any right, email hello@anis.chat. You also have the right to lodge a complaint with your local data-protection authority.',
        ],
      },
      {
        heading: '9. Security',
        body: [
          'We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or misuse. No method of transmission is perfectly secure, but we work to keep your data safe.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: `Last updated: ${UPDATED_EN}`,
    intro:
      'These Terms govern your use of the Anis website and the early-access waitlist. By using this site, you agree to these Terms.',
    sections: [
      {
        heading: '1. About Anis',
        body: [
          `Anis is a pre-launch product operated by ${ENTITY}. This website markets the product and lets you request early access. No paid product or live service is offered here yet.`,
        ],
      },
      {
        heading: '2. Early access & waitlist',
        body: [
          'Submitting the waitlist form registers your interest. It does not create a contract, guarantee access, or guarantee any specific price, feature, or launch date. Pricing shown is indicative and may change before launch.',
        ],
      },
      {
        heading: '3. Acceptable use',
        body: [
          'You agree not to misuse the site, attempt to disrupt it, access it unlawfully, or submit false information or other people’s data without their permission.',
        ],
      },
      {
        heading: '4. Intellectual property',
        body: [
          'The Anis name, logo, text, and design are owned by us or our licensors and are protected by intellectual-property laws. You may not copy or reuse them without permission. Third-party names and logos shown are the property of their respective owners.',
        ],
      },
      {
        heading: '5. Disclaimers',
        body: [
          'The site and any pre-launch information are provided “as is” and “as available”, without warranties of any kind. Statements about future features are not commitments and may change.',
        ],
      },
      {
        heading: '6. Limitation of liability',
        body: [
          'To the maximum extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of this website. Nothing in these Terms limits liability that cannot be limited by law.',
        ],
      },
      {
        heading: '7. Changes',
        body: [
          'We may update these Terms from time to time. The “last updated” date shows when they last changed. Continued use of the site means you accept the current Terms.',
        ],
      },
      {
        heading: '8. Governing law & contact',
        body: [
          'These Terms are governed by the laws of [jurisdiction to be confirmed]. Questions? Email hello@anis.chat.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: `Last updated: ${UPDATED_EN}`,
    intro:
      'This Cookie Policy explains how Anis uses cookies and similar technologies on this website, and how you can control them.',
    sections: [
      {
        heading: '1. What are cookies',
        body: [
          'Cookies are small text files stored on your device when you visit a website. They help sites function and can provide information to site owners. Similar technologies include local storage.',
        ],
      },
      {
        heading: '2. How we use cookies',
        body: [
          'Essential: required for the site to work and to remember your privacy choices. These are always active and do not need consent.',
          'Analytics (optional): privacy-friendly, anonymous statistics that help us understand and improve the site. These run only if you accept them.',
        ],
      },
      {
        heading: '3. Your choices',
        body: [
          'When you first visit, non-essential cookies are off by default. You can accept or reject them in our cookie banner and change your decision at any time. You can also block or delete cookies in your browser settings.',
        ],
      },
      {
        heading: '4. Changes & contact',
        body: [
          'We may update this policy as our use of cookies evolves. For any question, email hello@anis.chat.',
        ],
      },
    ],
  },
};

const ar: LegalSet = {
  privacy: {
    title: 'سياسة الخصوصية',
    updated: `آخر تحديث: ${UPDATED_AR}`,
    intro:
      'توضّح سياسة الخصوصية هذه كيف يجمع أنيس البيانات الشخصية ويستخدمها ويحميها عند زيارتك لهذا الموقع أو انضمامك لقائمة الوصول المبكر. نلتزم بمبدأ الخصوصية بالتصميم وباللائحة العامة الأوروبية لحماية البيانات (GDPR).',
    sections: [
      {
        heading: '١. من نحن',
        body: [
          `يُدار هذا الموقع من قِبل أنيس («نحن»)، ${ENTITY}. لأي استفسار يخص الخصوصية أو لممارسة حقوقك، تواصل معنا على hello@anis.chat. يُعدّ أنيس المتحكّم في البيانات الموضحة في هذه السياسة.`,
        ],
      },
      {
        heading: '٢. البيانات التي نجمعها',
        body: [
          'بيانات قائمة الانتظار والتواصل: عند إرسالك نموذج الوصول المبكر أو التواصل، نجمع الاسم والبريد الإلكتروني اللذين تزوّدنا بهما.',
          'بيانات الاستخدام: بموافقتك، نجمع إحصاءات مجهولة ومجمّعة حول كيفية استخدام الموقع (مثل الصفحات المُشاهَدة والمنطقة العامة). لا نستخدمها للتعرّف على هويتك.',
          'بيانات تقنية: قد يعالج مزوّد الاستضافة عنوان IP ونوع المتصفح كجزء طبيعي من تقديم الموقع بأمان.',
        ],
      },
      {
        heading: '٣. كيف نستخدم بياناتك والأسس القانونية',
        body: [
          'للتواصل معك بشأن الوصول المبكر وتحديثات المنتج التي طلبتها — الأساس القانوني: موافقتك (المادة 6(1)(أ) من اللائحة).',
          'لتشغيل الموقع وتأمينه وتحسينه — الأساس القانوني: مصالحنا المشروعة (المادة 6(1)(و)).',
          'للامتثال للالتزامات القانونية عند وجودها — الأساس القانوني: التزام قانوني (المادة 6(1)(ج)).',
        ],
      },
      {
        heading: '٤. ملفات الارتباط والتحليلات',
        body: [
          'نستخدم ملفات الارتباط الأساسية فقط افتراضيًا. ولا تعمل تحليلات غير الأساسية إلا إذا قبلتها في شريط ملفات الارتباط. يمكنك تغيير اختيارك في أي وقت. راجع سياسة ملفات الارتباط للتفاصيل.',
        ],
      },
      {
        heading: '٥. المشاركة ومعالجو البيانات',
        body: [
          'لا نبيع بياناتك الشخصية. نشاركها فقط مع مزوّدي خدمات يعالجونها نيابةً عنا بموجب اتفاقية معالجة بيانات — مثل مزوّد الاستضافة وخدمة النماذج/البريد ومزوّد تحليلات صديق للخصوصية. ويعمل كلٌّ منهم وفق تعليماتنا فقط.',
        ],
      },
      {
        heading: '٦. عمليات النقل الدولية',
        body: [
          'عند نقل البيانات خارج المنطقة الاقتصادية الأوروبية، نعتمد على ضمانات مناسبة مثل البنود التعاقدية القياسية للمفوضية الأوروبية، لتحصل بياناتك على مستوى حماية معادل.',
        ],
      },
      {
        heading: '٧. الاحتفاظ بالبيانات',
        body: [
          'نحتفظ ببيانات قائمة الانتظار والتواصل فقط للمدة اللازمة للأغراض أعلاه أو حتى تطلب حذفها أو تسحب موافقتك. أما التحليلات المجهولة فتُحفظ بصيغة مجمّعة.',
        ],
      },
      {
        heading: '٨. حقوقك',
        body: [
          'بموجب اللائحة، لك الحق في الوصول إلى بياناتك وتصحيحها ومحوها وتقييد معالجتها أو الاعتراض عليها، وكذلك الحق في نقل البيانات. ويمكنك سحب موافقتك في أي وقت دون التأثير على المعالجة السابقة.',
          'لممارسة أي حق، راسلنا على hello@anis.chat. ولك أيضًا حق تقديم شكوى إلى هيئة حماية البيانات المحلية لديك.',
        ],
      },
      {
        heading: '٩. الأمان',
        body: [
          'نطبّق تدابير تقنية وتنظيمية مناسبة لحماية البيانات الشخصية من الوصول غير المصرّح به أو الفقدان أو إساءة الاستخدام. ولا توجد وسيلة نقل آمنة تمامًا، لكننا نعمل جاهدين للحفاظ على أمان بياناتك.',
        ],
      },
    ],
  },
  terms: {
    title: 'شروط الخدمة',
    updated: `آخر تحديث: ${UPDATED_AR}`,
    intro:
      'تحكم هذه الشروط استخدامك لموقع أنيس ولقائمة الوصول المبكر. وباستخدامك هذا الموقع، فإنك توافق على هذه الشروط.',
    sections: [
      {
        heading: '١. عن أنيس',
        body: [
          `أنيس منتج قبل الإطلاق يُدار من قِبل ${ENTITY}. يعرّف هذا الموقع بالمنتج ويتيح لك طلب وصول مبكر. ولا يُقدَّم هنا بعدُ أي منتج مدفوع أو خدمة مباشرة.`,
        ],
      },
      {
        heading: '٢. الوصول المبكر وقائمة الانتظار',
        body: [
          'إرسال نموذج قائمة الانتظار يسجّل اهتمامك فقط. ولا يُنشئ عقدًا ولا يضمن الوصول ولا أي سعر أو ميزة أو موعد إطلاق محدّد. والأسعار المعروضة استرشادية وقد تتغيّر قبل الإطلاق.',
        ],
      },
      {
        heading: '٣. الاستخدام المقبول',
        body: [
          'توافق على عدم إساءة استخدام الموقع أو محاولة تعطيله أو الوصول إليه بصورة غير قانونية أو إدخال معلومات كاذبة أو بيانات أشخاص آخرين دون إذنهم.',
        ],
      },
      {
        heading: '٤. الملكية الفكرية',
        body: [
          'اسم أنيس وشعاره ونصوصه وتصميمه مملوكة لنا أو لمرخّصينا ومحمية بقوانين الملكية الفكرية. ولا يجوز نسخها أو إعادة استخدامها دون إذن. أما أسماء وشعارات الأطراف الثالثة الظاهرة فهي ملك لأصحابها.',
        ],
      },
      {
        heading: '٥. إخلاء المسؤولية',
        body: [
          'يُقدَّم الموقع وأي معلومات سابقة للإطلاق «كما هي» و«حسب توافرها» دون أي ضمانات. والتصريحات حول ميزات مستقبلية ليست التزامات وقد تتغيّر.',
        ],
      },
      {
        heading: '٦. حدود المسؤولية',
        body: [
          'إلى أقصى حد يسمح به القانون، لا نتحمّل مسؤولية أي خسارة غير مباشرة أو تبعية تنشأ عن استخدامك لهذا الموقع. ولا يحدّ أي بند من هذه الشروط من مسؤولية لا يمكن تقييدها قانونًا.',
        ],
      },
      {
        heading: '٧. التعديلات',
        body: [
          'قد نحدّث هذه الشروط من وقت لآخر، ويوضّح تاريخ «آخر تحديث» موعد آخر تغيير. واستمرارك في استخدام الموقع يعني قبولك للشروط الحالية.',
        ],
      },
      {
        heading: '٨. القانون الحاكم والتواصل',
        body: [
          'تخضع هذه الشروط لقوانين [الاختصاص القضائي قيد التأكيد]. لأي سؤال، راسلنا على hello@anis.chat.',
        ],
      },
    ],
  },
  cookies: {
    title: 'سياسة ملفات الارتباط',
    updated: `آخر تحديث: ${UPDATED_AR}`,
    intro:
      'توضّح سياسة ملفات الارتباط هذه كيف يستخدم أنيس ملفات الارتباط والتقنيات المشابهة على هذا الموقع، وكيف يمكنك التحكم بها.',
    sections: [
      {
        heading: '١. ما ملفات الارتباط',
        body: [
          'ملفات الارتباط ملفات نصية صغيرة تُخزَّن على جهازك عند زيارة موقع ما. تساعد المواقع على العمل وقد تزوّد أصحابها بمعلومات. ومن التقنيات المشابهة التخزين المحلي.',
        ],
      },
      {
        heading: '٢. كيف نستخدم ملفات الارتباط',
        body: [
          'أساسية: ضرورية لعمل الموقع ولتذكّر اختياراتك المتعلقة بالخصوصية. وهي مفعّلة دائمًا ولا تحتاج إلى موافقة.',
          'تحليلات (اختيارية): إحصاءات مجهولة وصديقة للخصوصية تساعدنا على فهم الموقع وتحسينه. ولا تعمل إلا إذا قبلتها.',
        ],
      },
      {
        heading: '٣. خياراتك',
        body: [
          'عند زيارتك الأولى، تكون ملفات الارتباط غير الأساسية متوقفة افتراضيًا. يمكنك قبولها أو رفضها من شريط ملفات الارتباط وتغيير قرارك في أي وقت. كما يمكنك حظر ملفات الارتباط أو حذفها من إعدادات متصفحك.',
        ],
      },
      {
        heading: '٤. التعديلات والتواصل',
        body: [
          'قد نحدّث هذه السياسة مع تطوّر استخدامنا لملفات الارتباط. لأي سؤال، راسلنا على hello@anis.chat.',
        ],
      },
    ],
  },
};

const legal: Record<Lang, LegalSet> = { en, ar };

export function getLegal(lang: Lang): LegalSet {
  return legal[lang] ?? legal.en;
}
