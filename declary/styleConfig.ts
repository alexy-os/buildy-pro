export const styleConfig = {
  components: {
    base: {
      layout: [
        'grid',
        'flex',
        'min-h-screen',
        'grid-cols-1',
        'lg:grid-cols-2',
        'items-center',
        'items-start',
        'flex-col',
        'aspect-square',
        'rounded'
      ],
      spacing: [
        'gap-4',
        'gap-8',
        'space-y-4'
      ],
      typography: {
        sizes: ['text-4xl', 'sm:text-6xl', 'text-lg'],
        variants: ['font-bold', 'font-semibold', 'font-medium']
      }
    },

    // Allowed theme colours from index.css
    theme: {
      backgrounds: [
        'bg-background',
        'bg-foreground',
        'bg-card',
        'bg-popover',
        'bg-primary',
        'bg-secondary',
        'bg-muted',
        'bg-accent',
        'bg-destructive'
      ],
      text: [
        'text-background',
        'text-foreground',
        'text-card-foreground',
        'text-popover-foreground',
        'text-primary-foreground',
        'text-secondary-foreground',
        'text-muted-foreground',
        'text-accent-foreground',
        'text-destructive-foreground'
      ]
    }
  },
  
  forbidden: {
    // Prevent usage of arbitrary colours
    colors: [
      /bg-(?!(background|foreground|card|popover|primary|secondary|muted|accent|destructive)(-foreground)?$)/,
      /text-(?!(background|foreground|card-foreground|popover-foreground|primary-foreground|secondary-foreground|muted-foreground|accent-foreground|destructive-foreground)$)/,
      /border-(?!(border|input|ring)$)/,
      /from-/,
      /to-/,
      /via-/,
      /ring-(?!ring$)/,
      /outline-(?!none$)/,
      /shadow-/
    ],
    // Prevent arbitrary values
    arbitrary: [
      /\[.+\]/
    ]
  }
} as const; 