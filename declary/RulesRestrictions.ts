const Restrictions = {
    disallowed: {
      shadows: true,
      gradients: true,
      customAnimations: true,
      customColors: true,
      nonStandardContainers: true,
      arbitrarySectionPadding: true,
      nonStandardSizing: true,
    },
    rules: {
      shadows: "Components must not include custom box shadows or drop shadows.",
      gradients: "Gradients are not allowed; use solid colors defined in the design system.",
      animations: "Animations must be minimal and use pre-defined Tailwind utilities.",
      colors: "All colors must be consistent with the palette provided by shadcn/ui.",
      containers: "Containers must follow the default utility classes for width and padding.",
      sections: "Section padding must be limited to 'py-16' or 'py-32' with no custom values.",
      sizing: "Element sizing must adhere to predefined utility classes without arbitrary values.",
    },
  };
  