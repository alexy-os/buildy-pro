const Layout = {
    library: ["shadcn/ui", "Radix"],
    icons: ["lucide-react"],
    section: "w-full py-16 lg:py-32",
    container: "container mx-auto px-4 md:px-6 lg:px-8",
  
    title: [
      {
        tag: "h2",
        baseSize: {
          className: "text-3xl md:text-4xl lg:text-5xl font-bold"
        },
        largeSize: {
          className: "text-2xl md:text-4xl lg:text-6xl font-bold"
        }
      }
    ],
  
    description: "text-lg text-muted-foreground max-w-2xl",
  
    subtitle: "text-lg text-muted-foreground max-w-2xl",
  
    badge: [ "default", "outline" ],
  
    buttons: {
      text: "string",
      variant: [ "default", "outline" ],
      size: [ "lg", "default" ],
      icon: "lucide-react",
    },
  
    grid: {
      base: "grid gap-8",
      cols: {
        one: "grid-cols-1",
        two: "grid-cols-1 md:grid-cols-2",
        three: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      },
      item: "flex flex-col gap-4",
      gap: ["gap-2", "gap-4", "gap-6", "gap-8", "gap-10", "gap-12"]
    },
  
    media: {
      base: "bg-muted rounded-md",
      aspectSquare: "aspect-square",
    },
  
    map: "content.array.map((item))",
  };
  
