import { SimpleHero } from './examples/simple-hero';
import { FeatureHero } from './examples/feature-hero';

export const heroExamples = [
    {
        id: 'simple-hero',
        title: 'Simple Hero',
        component: <SimpleHero />,
        code: `export function SimpleHero() {
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
}`
    },
    {
        id: 'feature-hero',
        title: 'Feature Hero',
        component: <FeatureHero />,
        code: `export function FeatureHero() {
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
}`
    },
]; 