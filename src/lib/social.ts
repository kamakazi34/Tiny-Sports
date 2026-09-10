export type SocialNetwork = 'instagram' | 'linkedin' | 'facebook'

export interface SocialLink {
  network: SocialNetwork
  label: string
  handle: string
  href: string
}

/** Public social accounts for Tiny Sports. Keep in sync with src/content/site-settings.json. */
export const socialLinks: SocialLink[] = [
  {
    network: 'instagram',
    label: 'Instagram',
    handle: '@tinysportsfund',
    href: 'https://www.instagram.com/tinysportsfund/',
  },
  {
    network: 'linkedin',
    label: 'LinkedIn',
    handle: 'Tiny Sports',
    href: 'https://www.linkedin.com/company/tiny-sports/',
  },
]
