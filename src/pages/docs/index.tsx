import { Section } from "@/components/partials/section";

export function DocsPage() {
  return (
    <Section>
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Documentation</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Welcome to the UI Blocks documentation. Here you'll find comprehensive guides and documentation to help you start working with UI Blocks as quickly as possible.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p>Documentation content will be here...</p>
          </div>
        </div>
      </div>
    </Section>
  );
} 