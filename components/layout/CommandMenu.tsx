'use client'

// React Imports
import { Fragment, useCallback, useEffect, useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// Third-party Imports
import { DollarSignIcon, LayoutPanelTopIcon, PanelTopIcon, PhoneIcon, SearchIcon, SparklesIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Kbd } from '@/components/ui/kbd'

// Data Imports
import { searchData } from '@/assets/data/search'

const CommandMenu = () => {
  // States
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  // Hooks
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen(open => !open)
      }
      // Handle shortcuts from data when menu is closed
      if (e.metaKey || e.ctrlKey) {
        searchData.forEach(group => {
          group.data.forEach(item => {
            if (item.shortcutKey && e.key.toLowerCase() === item.shortcutKey) {
              e.preventDefault()
              if (item.openInNewTab) {
                window.open(item.href, '_blank', 'noopener,noreferrer')
                setOpen(false)
              } else {
                router.push(item.href)
                setOpen(false)
              }
            }
          })
        })
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [open, router])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button variant='outline' onClick={() => setOpen(true)} className='w-50 justify-between max-sm:hidden'>
        <div className='flex items-center gap-2'>
          <SearchIcon />
          <span>Search</span>
        </div>
        <Kbd>⌘ + K</Kbd>
      </Button>
      <Button variant='outline' size='icon' onClick={() => setOpen(true)} className='sm:hidden'>
        <SearchIcon />
        <span className='sr-only'>Search</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader className='sr-only'>
          <DialogTitle>Search...</DialogTitle>
          <DialogDescription>Search for docs, blocks, components, and more.</DialogDescription>
        </DialogHeader>
        <DialogContent className='overflow-hidden p-0'>
          <Command
            className='[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'
            filter={(value, search, keywords) => {
              search = search.toLowerCase()
              value = value.toLowerCase()

              // Exact match with item name (highest priority)
              if (value === search) return 2

              // Partial match with item name (medium priority)
              if (value.includes(search)) return 1.5

              // Match in tags/keywords (lowest priority)
              if (keywords && keywords.length > 0) {
                // Check for exact tag match first
                if (keywords.some(keyword => keyword.toLowerCase() === search)) return 1.25

                // Then check for partial matches in tags
                const extendedValue = value + ' ' + keywords.join(' ').toLowerCase()

                if (extendedValue.includes(search)) return 1
              }

              return 0
            }}
          >
            <CommandInput placeholder='Type a command or search...' value={search} onValueChange={setSearch} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {search ? (
                searchData.map((searchGroup, index) => (
                  <Fragment key={index}>
                    <CommandGroup heading={searchGroup.title}>
                      {searchGroup.data.map((item, i) => (
                        <CommandItem
                          key={i}
                          keywords={item.tags}
                          onSelect={() =>
                            runCommand(() => {
                              if (item.openInNewTab) {
                                window.open(item.href, '_blank', 'noopener,noreferrer')
                              } else {
                                router.push(item.href)
                              }
                            })
                          }
                        >
                          <item.icon />
                          <span>{item.name}</span>
                          {item.shortcutText && (
                            <CommandShortcut>
                              <Kbd className='bg-background border'>{item.shortcutText}</Kbd>
                            </CommandShortcut>
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    {index !== searchData.length - 1 && <CommandSeparator />}
                  </Fragment>
                ))
              ) : (
                <CommandGroup heading='Suggestions'>
                  <CommandItem onSelect={() => runCommand(() => router.push('/#hero'))}>
                    <SparklesIcon />
                    <span>Home</span>
                    <CommandShortcut>
                      <Kbd className='bg-background border'>⌘ + O</Kbd>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/blog'))}>
                    <PanelTopIcon />
                    <span>Blog</span>
                    <CommandShortcut>
                      <Kbd className='bg-background border'>⌘ + B</Kbd>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/about-us'))}>
                    <LayoutPanelTopIcon />
                    <span>About Us</span>
                    <CommandShortcut>
                      <Kbd className='bg-background border'>⌘ + G</Kbd>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/about-us'))}>
                    <PhoneIcon />
                    <span>Contact Us</span>
                    <CommandShortcut>
                      <Kbd className='bg-background border'>⌘ + I</Kbd>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/#pricing'))}>
                    <DollarSignIcon />
                    <span>Pricing</span>
                  </CommandItem>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CommandMenu
