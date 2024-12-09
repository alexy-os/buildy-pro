export function SimpleHero() {
    return (
        <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
                Welcome to Our Platform
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
                Build beautiful websites faster than ever. Simple, powerful, and flexible.
            </p>
            <div className="mt-8 flex gap-4">
                <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">
                    Get Started
                </button>
                <button className="rounded-lg border border-input bg-background px-6 py-3 font-medium">
                    Learn More
                </button>
            </div>
        </div>
    );
} 