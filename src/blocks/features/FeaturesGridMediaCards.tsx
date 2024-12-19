import { Badge } from "@/components/ui/badge";

const content = {
  badge: "Marketing & Design",
  title: "Innovate Your Brand!",
  description: "Crafting remarkable experiences in UI/UX for your business.",
  features: [
    {
      id: "uiux1",
      title: "User-Centric Design",
      description: "Deliver intuitive and engaging interfaces that resonate with your target audience."
    },
    {
      id: "marketing1",
      title: "Strategic Branding",
      description: "Elevate your brand identity and ensure a consistent message across all platforms."
    },
    {
      id: "shadcn1",
      title: "Shadcn Library Integration",
      description: "Seamlessly blend components for a cohesive and modern design aesthetic."
    }
  ]
} as const;

export const FeaturesGridMediaCards = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col features-start">
          <div>
            <Badge>{content.badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className={`text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left`}>
              {content.title}
            </h2>
            <p className={`text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left`}>
              {content.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features?.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
