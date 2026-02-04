import HeroSection from '@/components/shadcn-studio/blocks/hero'
import PricingCards from '@/components/shadcn-studio/blocks/pricing'

const pricingData = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'Ideal for crypto pros!',
    monthly: 99,
    annual: 999
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Ideal for business owners.',
    monthly: 199,
    annual: 1999
  }
]

const blogdata = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-02.png',
    date: 'January 20, 2026',
    blogTitle: 'Build with Empathy for Better User Outcomes',
    description: 'Understand user needs to create intuitive and lovable experiences.',
    author: 'Allen Reilly',
    badge: 'UI',
    authorLink: '#',
    blogLink: '#',
    categoryLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-03.png',
    date: 'May 20, 2025',
    blogTitle: 'Write Code That Scales with Your Product',
    description: 'Structure your projects for easier updates, faster growth, and bugs.',
    author: 'Sara Wilkerson',
    badge: 'Coding',
    authorLink: '#',
    blogLink: '#',
    categoryLink: '#'
  }
]

const Home = () => {
  return (
    <>
      <HeroSection blogdata={blogdata} />
      <PricingCards pricingData={pricingData} />
    </>
  )
}

export default Home
