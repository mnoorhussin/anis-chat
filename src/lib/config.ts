/**
 * Site-wide configuration & integration endpoints.
 * Lead capture is email-only for the pre-launch phase.
 */

export const CONTACT_EMAIL = 'hello@anis.chat';

/**
 * TODO: replace with the real Formspree form ID (https://formspree.io) or a
 * Getform endpoint before launch. When empty, forms fall back to a mailto link.
 * You can also set PUBLIC_FORMSPREE_ID in a .env file to override at build time.
 */
export const FORMSPREE_ID: string = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';

export const FORM_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';

// TODO: confirm these social handles before launch (profiles may not exist yet).
export const SOCIALS = [
  { name: 'X', icon: 'lucide:twitter', href: 'https://x.com/anischat' },
  { name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://www.linkedin.com/company/anischat' },
  { name: 'Instagram', icon: 'lucide:instagram', href: 'https://instagram.com/anischat' },
] as const;
