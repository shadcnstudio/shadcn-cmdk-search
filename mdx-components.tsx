// Type Imports
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  p: ({ children, ...props }) => (
    <p className='text-muted-foreground mt-3' {...props}>
      {children}
    </p>
  )
}

export function useMDXComponents(): MDXComponents {
  return components
}
