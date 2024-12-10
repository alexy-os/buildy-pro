# Component Loader System

This system provides three different loaders for React components with varying capabilities and use cases. The primary loader is `loadBlocks`, which offers the most comprehensive functionality.

## Primary Loader: loadBlocks

### Supported Export Types
- Named exports (recommended)
- Default exports
- PascalCase file naming convention (recommended)
- Kebab-case file naming convention (supported with warnings)

### Features
- Automatic component discovery
- File naming convention validation
- Comprehensive error logging
- Smart component name resolution
- Support for both PascalCase and kebab-case file names
- Detailed warning system for naming conventions

### Example Usage
```typescript
// PascalCase named export (recommended)
export const MyComponent = () => { ... }

// or default export
export default function MyComponent() { ... }
```

## Alternative Loaders

### loadComponents
- Simpler implementation
- Supports only default exports
- No naming convention validation
- Basic error handling

### loadExamples
- Intermediate implementation
- Supports both named and default exports
- Basic error handling
- No naming convention validation

## File Naming Conventions

### Recommended (PascalCase)
```
HeroMediaGrid.tsx
SimpleHero.tsx
CustomButton.tsx
```

### Supported with Warnings (kebab-case)
```
hero-media-grid.tsx
simple-hero.tsx
custom-button.tsx
```

## Component Structure Requirements

Your components should follow these patterns:

```typescript
// Pattern 1: Named Export (Recommended)
export const ComponentName: React.FC = () => {
    return <div>...</div>
};

// Pattern 2: Default Export
export default function ComponentName() {
    return <div>...</div>
}
```

## Loader Return Interface

All loaders return an array of objects with the following interface:

```typescript
interface Block {
    id: string;        // Component identifier (derived from filename)
    title: string;     // Human-readable title
    component: ReactElement;  // Rendered component
    code: string;      // Raw component source code
}
```

## Best Practices

1. Use PascalCase for file names (e.g., `MyComponent.tsx`)
2. Use named exports over default exports
3. Place all components in the `examples` directory
4. Ensure component name matches file name
5. Include proper TypeScript types
6. Keep one component per file

## Example

```tsx index
import { Viewer } from '@/components/viewer';
import { loadBlocks } from './loadBlocks';

export function HeroComponentsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="space-y-8">
                <div className="prose dark:prose-invert">
                    <h1>Hero Sections</h1>
                    <p>
                        A collection of hero section examples that you can use in your projects.
                    </p>
                </div>

                <div className="grid gap-8">
                        {loadBlocks.map((example) => (
                        <Viewer
                            key={example.id}
                            title={example.title}
                            code={example.code}
                            preview={example.component}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 
```

## Error Handling

The `loadBlocks` loader provides comprehensive error handling:
- File naming convention warnings
- Component export validation
- Module resolution errors
- Detailed console logging for debugging

## Directory Structure

```
loaderComponents/
├── examples/
│   ├── HeroMediaGrid.tsx
│   ├── SimpleHero.tsx
│   └── ... other components
├── loadBlocks.tsx    (primary loader)
├── loadComponents.tsx
├── loadExamples.tsx
└── README.md
```

## Migration Guide

If you're using `loadComponents` or `loadExamples`, consider migrating to `loadBlocks` for:
- Better error handling
- Naming convention validation
- More flexible export support
- Enhanced debugging capabilities

## Known Limitations

1. All components must be in the `examples` directory
2. No support for nested component directories
3. TypeScript/TSX files only
4. No support for dynamic imports
```

This README provides a comprehensive guide for developers working with the component loader system, with clear emphasis on `loadBlocks` as the primary loader while documenting the alternatives and their use cases.