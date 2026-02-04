import blogData from '@/assets/data/blogData'
import { notFound } from 'next/navigation'

export type BlogType = {
  title: string
  description: string
  slug: string
  writer: string
}

const BlogPage = async ({ params }: { params: Promise<{ blog: string }> }) => {
  // Params
  const { blog } = await params

  const activeBlog = blogData.find(t => t.slug === blog)

  if (!activeBlog) {
    notFound()
  }

  const { default: Content } = await import(`@/content/blogs/${blog}.mdx`)

  return (
    <div className='pt-16 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col space-y-8 px-4 sm:space-y-12 sm:px-6 lg:px-8'>
        <h1 className='text-center text-3xl font-semibold sm:text-4xl lg:text-5xl'>{activeBlog.title}</h1>
        <div>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default BlogPage
