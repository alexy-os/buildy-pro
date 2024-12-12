import { Button } from "@/components/ui/button";

// Simple content configuration
const content = {
    title: "Transform Your Workflow",
    description: "Streamline your development process with our powerful tools and components.",
    buttons: [
        { text: "Try Now" },
        { text: "View Demo" }
    ]
};

export const FeatureHero = () => (
    <section className="w-full py-16 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start space-y-4">
                    <h1 className="text-4xl sm:text-6xl">
                        {content.title}
                    </h1>
                    <p className="text-lg">
                        {content.description}
                    </p>
                    <div className="flex gap-4">
                        <Button>{content.buttons[0].text}</Button>
                        <Button variant="outline">{content.buttons[1].text}</Button>
                    </div>
                </div>
                <div className="aspect-square rounded bg-muted" />
            </div>
        </div>
    </section>
);