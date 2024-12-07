import { Section } from "@/components/partials/section";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <Section fullHeight>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          UI Blocks
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Beautiful and accessible React components for your next application.
          Built with shadcn/ui and Tailwind CSS.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <a href="/docs">Get Started</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/components">Browse Components</a>
          </Button>
        </div>
      </div>
    </Section>
  );
} 