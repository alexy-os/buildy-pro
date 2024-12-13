import { Info, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Content = {
  badge: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    variant: "default" | "outline";
    size: "lg" | "sm";
    className: string;
    icon: React.ReactNode;
  }[];
};

const content: Content = {
  badge: "Start Now",
  title: "Explore Our BuildY!",
  description: "Simplify your business operations with our cutting-edge solution. Say goodbye to time-consuming manual processes and hello to efficient, streamlined management.",
  buttons: [
    {
      text: "Learn More",
      variant: "default",
      size: "lg",
      className: "flex justify-center gap-4",
      icon: <Info />
    },
    {
      text: "Get Started",
      variant: "outline",
      size: "lg",
      className: "flex justify-center gap-4",
      icon: <Rocket />
    }
  ]
}

export const CenterCenterContainer = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col text-center gap-8 items-center">
        <div>
          <Badge>{content.badge}</Badge>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="max-w-xl text-3xl md:text-4xl lg:text-6xl font-bold">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {content.description}
          </p>
        </div>
        <div className="flex flex-row gap-8">
          {content.buttons.map((button, index) => (
            <Button key={index} className={button.className} variant={button.variant} size={button.size}>
              {button.text} {button.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </section>
);
