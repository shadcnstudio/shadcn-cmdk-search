// Next Imports
import Link from 'next/link'

// Third-party Imports
import { ArrowRightIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'

// Data Imports
import blogData from '@/assets/data/blogData'

const BlogsPage = () => {
  return (
    <div className='pt-16 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center text-3xl font-semibold sm:text-4xl lg:text-5xl'>Blog</h1>

        <div className='grid gap-6 sm:grid-cols-2'>
          {blogData.map((blog, index) => (
            <div key={index} className='flex flex-col justify-between gap-4 rounded-md border p-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold'>
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className='text-muted-foreground max-sm:line-clamp-3'>{blog.description}</p>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-muted-foreground text-sm'>{blog.writer}</span>

                <Button size='icon' variant='outline' asChild>
                  <Link href={`/blog/${blog.slug}`}>
                    <ArrowRightIcon className='size-4 -rotate-45' />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
