# Theme: Effortless Prototyping and Flexible UI Development

## Platform Name: buildy/ui

### Library
- **UI Library**: Radix, shadcn/ui
- **Icons**: lucide-react

---

## Rules
### Layout
- **Section**: `"w-full py-16 lg:py-32"`
- **Container**: `"container mx-auto px-4 md:px-6 lg:px-8"`

### Title
- **Tags**: `h2`, `h1`
- **Base Size**: `"text-2xl md:text-3xl lg:text-4xl font-bold"`
- **Large Size**: `"text-3xl md:text-4xl lg:text-6xl font-bold"`

### Typography
- **Description**: `"text-lg text-muted-foreground max-w-xl"`
- **Subtitle**: `"text-lg text-muted-foreground max-w-xl"`

### Components
- **Badge Variants**: `["default", "outline"]`
- **Button Properties**:
  - **Text**: `string`
  - **Variants**: `["default", "outline"]`
  - **Sizes**: `["lg", "default"]`
  - **Icons**: `lucide-react`

### Grid
- **Base Grid**: `"grid gap-8"`
- **Columns**:
  - **One**: `"grid-cols-1"`
  - **Two**: `"grid-cols-1 md:grid-cols-2"`
  - **Three**: `"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"`
- **Item Class**: `"flex flex-col gap-4"`
- **Gap Options**: `["gap-2", "gap-4", "gap-6", "gap-8", "gap-10", "gap-12"]`

### Media
- **Base Media**: `"bg-muted rounded-md"`
- **Aspect Ratio**: `"aspect-square"`

### Dynamic Rendering
- **Map Items**: `"content.array.map((item, index))"`

---

## Restrictions
### Disallowed Features
- Shadows
- Gradients
- Custom Animations
- Custom Colors
- Non-standard Containers
- Arbitrary Section Padding
- Non-standard Sizing

## Overview

**Buildy/ui** is a library of clean, modular UI blocks available in two formats: React and HTML. Built on Radix and shadcn/ui, it offers developers a consistent, minimalistic foundation for fast prototyping while allowing full creative freedom.

## Key Features

- **Tailwind CSS Utility Classes:** Achieve rapid prototyping with a flexible, utility-first approach.
- **Design Consistency:** Based on the shadcn/ui design system with balanced, professional aesthetics.
- **Customizability:** Components are styled minimally, empowering developers to add gradients, animations, shadows, and typography as needed.
- **Comprehensive Components:** Cover a wide range of business needs and landing page elements.
- **Out-of-the-Box Theming:** Includes dark mode and advanced theming options from shadcn/ui.
- **Ready-to-Use Configuration:** Pre-configured for seamless integration and quick setup, including adjustable border radii and color themes.

---

***With buildy/ui**, developers get powerful tools to streamline their workflow while maintaining creative control over the final design.*