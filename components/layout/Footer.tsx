import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <Link href='/' className='text-foreground flex items-center gap-2 text-2xl font-bold'>
          <div className='size-8 rounded-md bg-black text-center text-amber-300'>C</div>
          Command Palette
        </Link>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          <Link href='/about-us' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            About
          </Link>
          <Link href='/contact-us' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Contacts
          </Link>
          <Link href='/blog' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Blog
          </Link>
          <Link href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
            Career
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <Link href='#'>
            <FacebookIcon className='size-5' />
          </Link>
          <Link href='#'>
            <InstagramIcon className='size-5' />
          </Link>
          <Link href='#'>
            <TwitterIcon className='size-5' />
          </Link>
          <Link href='#'>
            <YoutubeIcon className='size-5' />
          </Link>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <Link href='/' className='hover:underline'>
            command palette
          </Link>
          , Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default Footer
