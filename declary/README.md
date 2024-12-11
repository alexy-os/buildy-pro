# Declary

A strict style validator for shadcn/ui components that ensures consistent usage of Tailwind CSS classes across your project.

## Features

- Validates component styles against predefined rules
- Prevents usage of arbitrary colours and values
- Ensures consistent theme usage
- Real-time monitoring of component changes
- Detailed violation reports with suggestions

## Installation

1. Add the declary folder to your project:
```bash
src/
  lib/
    utils.ts
declary/
  styleConfig.ts
  styleValidator.ts
  watchStyles.ts
```

2. Configure your package.json:
```json
"scripts": {
    "declary": "bun run declary/watchStyles.ts"
  }
}
```

## Add Path

Add the path to the components you want to validate in the `watchStyles.ts` file.

watchStyles.ts
```ts
const WATCH_PATTERNS = [
  'src/pages/components/hero/base/**/*.{ts,tsx}'
];

const WATCH_DIR = 'src/pages/components/hero/base';
```

## Configuration

The validator is configured through `styleConfig.ts`:

```typescript
export const styleConfig = {
  components: {
    base: {
      // Layout utilities
      layout: ['grid', 'flex', 'min-h-screen', ...],
      // Spacing utilities
      spacing: ['gap-4', 'gap-8', ...],
      // Typography settings
      typography: {
        sizes: ['text-4xl', 'sm:text-6xl', ...],
        variants: ['font-bold', 'font-semibold', ...]
      }
    },
    // Theme colours from your design system
    theme: {
      backgrounds: ['bg-primary', 'bg-secondary', ...],
      text: ['text-primary-foreground', ...]
    }
  },
  
  // Patterns to prevent
  forbidden: {
    colors: [
      /bg-(?!primary|secondary|...)/, // Prevents arbitrary colours
      /text-(?!primary|secondary|...)/
    ],
    arbitrary: [/\[.+\]/] // Prevents arbitrary values
  }
}
```

## Usage

### Development Mode

Run alongside your development server:
```bash
bun run dev
```

### Standalone Validation

Run the validator separately:
```bash
bun run declary
```

### Using Screen Sessions

For better process management, you can use screen sessions:

```bash
# Create a new screen session
screen -S declary

# Run the validator
bun run declary

# Detach from screen (Ctrl+A, then D)

# In another terminal, run your dev server
bun run vite
```

To reattach to the validator:
```bash
screen -r declary
```

## Validation Output

The validator provides detailed feedback:

```bash
$ bun run declary
$ bun run declary/watchStyles.ts

Watching for style violations...

Checking src\pages\components\hero\base\FeatureHero.tsx...
✓ No style violations

Checking src\pages\components\hero\base\HeroMediaGrid.tsx...

Issues in FeatureHero component:

Style violations:
  ❌ Class "bg-blue-500" matches forbidden pattern in colors

Suggestions:
  ✨ Use theme colors from styleConfig.components.theme instead of "bg-blue-500"

Checking src\pages\components\hero\base\HeroMediaGrid.tsx...

Issues in PhoneCall component:

Style violations:
  ❌ Class "w-4" is not allowed
  ❌ Class "h-4" is not allowed

Issues in GraduationCap component:

Style violations:
  ❌ Class "w-4" is not allowed
  ❌ Class "h-4" is not allowed

Watching directory: src/pages/components/hero/base

Checking src/pages/components/hero/base/HeroMediaGrid.tsx...
✓ No style violations
```

## Best Practices

1. Keep your styleConfig aligned with your design system
2. Use theme colours instead of arbitrary values
3. Add new utility classes to the config when needed
4. Run the validator in CI/CD pipelines

## Requirements

- Bun runtime
- shadcn/ui components
- Tailwind CSS

## License

MIT