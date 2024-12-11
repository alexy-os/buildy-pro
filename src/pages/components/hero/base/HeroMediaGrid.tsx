import { GraduationCap, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Context {
  size: "default" | "lg" | "sm" | "icon";
  text: string;
  variant: "default" | "outline";
  className: string;
}

const Context = {
  badge: {
    text: "We're building",
    variant: "outline",
    className: "text-sm font-medium",
  },
  title: {
    text: "Build your next UI with shadcn components",
    className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  },
  description: {
    text: "Beautifully designed components built with Radix UI and Tailwind CSS. Open source and free to use in your applications.",
    className: "leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground",
  },
  buttons: [
    {
      text: "Documentation", 
      variant: "default" as const,
      size: "lg" as const,
      className: "items-center gap-2"
    },
    {
      text: "GitHub",
      variant: "outline" as const,
      size: "lg" as const,
      className: "items-center gap-2"
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

export const HeroMediaGrid = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">{Context.badge.text}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className={Context.title.className}>
                {Context.title.text}
            </h1>
            <p className={Context.description.className}>
              {Context.description.text}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size={Context.buttons[0].size} className={Context.buttons[0].className} variant={Context.buttons[0].variant}>
              {Context.buttons[0].text} <PhoneCall />
            </Button>
            <Button size={Context.buttons[1].size} className="gap-4">
              {Context.buttons[1].text} <GraduationCap />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);