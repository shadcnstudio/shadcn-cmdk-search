'use client'

// Next.js Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Third-party Imports
import { MenuIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import CommandMenu from './CommandMenu'

// Utils Imports
import { cn } from '@/lib/utils'

type NavigationItem = {
  title: string
  href: string
}[]

const Header = ({ navigationData }: { navigationData: NavigationItem }) => {
  const pathname = usePathname()

  return (
    <header className='bg-background sticky top-0 z-50 border-b'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-7 sm:px-6'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          <Link href='/' className={cn('hover:text-primary max-md:hidden', pathname === '/' && 'text-primary')}>
            Home
          </Link>
          <Link
            href='/blog'
            className={cn(
              'hover:text-primary max-md:hidden',
              (pathname === '/blog' || pathname.startsWith('/blog')) && 'text-primary'
            )}
          >
            Blog
          </Link>
          <Link href='/' className='text-foreground flex items-center gap-2 text-2xl font-bold'>
            <div className='size-8 shrink-0 rounded-md bg-black text-center text-amber-300'>C</div>
            Command Palette
          </Link>
          <Link
            href='/about-us'
            className={cn('hover:text-primary max-md:hidden', pathname === '/about-us' && 'text-primary')}
          >
            About Us
          </Link>
          <Link
            href='/contact-us'
            className={cn('hover:text-primary max-md:hidden', pathname === '/contact-us' && 'text-primary')}
          >
            Contacts
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <CommandMenu />
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
