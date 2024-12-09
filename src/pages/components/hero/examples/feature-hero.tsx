export function FeatureHero() {
    return (
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-start space-y-4">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    Transform Your Workflow
                </h1>
                <p className="text-lg text-muted-foreground">
                    Streamline your development process with our powerful tools and components.
                </p>
                <div className="flex gap-4">
                    <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">
                        Try Now
                    </button>
                    <button className="rounded-lg border border-input bg-background px-6 py-3 font-medium">
                        View Demo
                    </button>
                </div>
            </div>
            <div className="aspect-square rounded-lg bg-muted" />
        </div>
    );
} 