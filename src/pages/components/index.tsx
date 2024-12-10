import React from "react";
import { Section } from "@/components/partials/section";
import { Link } from "react-router-dom";
import { 
  LayoutTemplate, 
  Sparkles, 
  Megaphone, 
  ScrollText 
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type ComponentsPageProps = React.HTMLAttributes<HTMLElement>;

const COMPONENTS = {
  sectionName: "Components",
  sectionDescription: "Browse through our collection of reusable components built with shadcn/ui and Tailwind CSS.",
} as const;

const PREVIEW_COMPONENTS = [
  {
    title: "Hero Sections",
    description: "Eye-catching hero sections to grab your visitors' attention",
    icon: LayoutTemplate,
    path: "/components/hero"
  },
  {
    title: "Features",
    description: "Showcase your product's features with elegant layouts",
    icon: Sparkles,
    path: "/components/features"
  },
  {
    title: "CTA Sections",
    description: "Convert visitors with compelling call-to-action sections",
    icon: Megaphone,
    path: "/components/cta"
  },
  {
    title: "Blog Layouts",
    description: "Beautiful blog layouts for your content",
    icon: ScrollText,
    path: "/components/blog"
  },
] as const;

const PreviewCard = React.memo(({ title, description, icon: Icon, path }: typeof PREVIEW_COMPONENTS[number]) => (
  <Link to={path}>
    <Card className="group hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center group-hover:bg-muted/70 transition-colors">
        <Icon className="h-12 w-12 text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors" strokeWidth={1.4} />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  </Link>
));

export function ComponentsPage({ className, ...props }: ComponentsPageProps) {
  return (
    <Section className={className} {...props}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{COMPONENTS.sectionName}</h1>
        <div className="grid gap-4">
          <p className="text-xl text-muted-foreground">
            {COMPONENTS.sectionDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PREVIEW_COMPONENTS.map((component) => (
              <PreviewCard key={component.path} {...component} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}