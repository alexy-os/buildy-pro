import { Section } from "@/components/partials/section";

export function ComponentsPage() {
  return (
    <Section>
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Components</h1>
        <div className="grid gap-4">
          <p className="text-xl text-muted-foreground">
            Browse through our collection of reusable components built with shadcn/ui and Tailwind CSS.
          </p>
          
          <div className="grid gap-6 mt-8">
            {/* Component grid will be here */}
            <div className="rounded-lg border bg-card text-card-foreground p-4">
              <h3 className="font-semibold">Component Preview</h3>
              <p className="text-sm text-muted-foreground">
                Component descriptions and examples will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 