// React Imports
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

// Third-party Imports
import { CircleIcon, type LucideProps } from 'lucide-react'
import blogData from './blogData'

type SearchData = {
  title: string
  data: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    name: string
    href: string
    shortcutText?: string
    shortcutKey?: string
    openInNewTab?: boolean
    tags?: string[]
  }[]
}

export const searchData: SearchData[] = [
  {
    title: 'Pages',
    data: [
      {
        icon: CircleIcon,
        name: 'Home',
        shortcutText: '⌘ + O',
        shortcutKey: 'o',
        href: '/#hero'
      },
      {
        icon: CircleIcon,
        name: 'Blog',
        shortcutText: '⌘ + B',
        shortcutKey: 'b',
        href: '/blog'
      },
      {
        icon: CircleIcon,
        name: 'About Us',
        shortcutText: '⌘ + G',
        shortcutKey: 'g',
        href: '/about-us'
      },
      {
        icon: CircleIcon,
        name: 'Contact Us',
        shortcutText: '⌘ + I',
        shortcutKey: 'i',
        href: '/contact-us',
        tags: ['contact', 'get in touch', 'support']
      }
    ]
  },
  {
    title: 'Sections',
    data: [
      {
        icon: CircleIcon,
        name: 'Pricing',
        href: '/#pricing'
      }
    ]
  },
  {
    title: 'Blog Posts',
    data: [
      ...blogData.map(category => ({
        icon: CircleIcon,
        name: category.title,
        href: `/blog/${category.slug}`
      }))
    ]
  }
]
