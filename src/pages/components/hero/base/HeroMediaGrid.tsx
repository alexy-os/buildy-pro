import { BookOpen, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface content {
  size: "default" | "lg" | "sm" | "icon";
  text: string;
  variant: "default" | "outline";
  className: string;
  headingTag?: 'h1' | 'h2' | 'h3';
}

const content = {
  badge: {
    text: "We're building",
    variant: "outline",
    className: "text-sm font-medium",
  },
  title: {
    text: "Build your next UI with shadcn components",
    className: "text-2xl md:text-3xl lg:text-4xl font-bold",
  },
  description: {
    text: "Beautifully designed components built with Radix UI and Tailwind CSS. Open source and free to use in your applications.",
    className: "text-muted-foreground",
  },
  buttons: [
    {
      text: "Documentation", 
      variant: "default" as const,
      size: "lg" as const,
      className: "items-center gap-2",
      icon: <BookOpen />
    },
    {
      text: "GitHub",
      variant: "outline" as const,
      size: "lg" as const,
      className: "items-center gap-2",
      icon: <Github />
    }
  ],
  images: {
    grid: {
      className: "grid grid-cols-2 gap-8",
      items: [
        {
          src: "https://placehold.co/600x400",
          className: "bg-muted rounded-md aspect-square"
        },
        {
          src: "https://placehold.co/600x400", 
          className: "bg-muted rounded-md row-span-2"
        },
        {
          src: "https://placehold.co/600x400",
          className: "bg-muted rounded-md aspect-square"
        }
      ]
    }
  },
}

export const HeroMediaGrid = ({ headingTag: Title = 'h2' }: content) => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">{content.badge.text}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <Title className={content.title.className}>
                {content.title.text}
            </Title>
            <p className={content.description.className}>
              {content.description.text}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {content.buttons.map((button, index) => (
              <Button key={index} size={button.size} className={button.className} variant={button.variant}>
                {button.text} {button.icon}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </section>
);