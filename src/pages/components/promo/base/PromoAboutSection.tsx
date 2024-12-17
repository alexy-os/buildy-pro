import wireframe from "@/assets/img/wireframe.svg";

interface StatsProps {
  quantity: string;
  description: string;
}

const content = {
  about: {
    title: "About Buildy/UI",
    description:
      "Buildy/UI empowers developers and designers to create scalable, flexible, and modern interfaces effortlessly. Designed with Radix and shadcn/ui, it simplifies prototyping and production-ready development for SaaS, marketing, and business applications.",
    imageAlt: "Wireframe showcase",
  },
  statistics: [
    {
      quantity: "10K+",
      description: "Theme Colors",
    },
    {
      quantity: "3K+",
      description: "UI/UX Variants",
    },
    {
      quantity: "50+",
      description: "Purity Components",
    },
    {
      quantity: "8",
      description: "Pretty Templates",
    },
  ] as StatsProps[],
} as const;

export const PromoAboutSection = () => {
  return (
    <section className="w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-muted/50 border rounded-2xl py-12">
            <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
                src={wireframe}
                alt={content.about.imageAlt}
                className="w-[300px] object-contain"
            />
            <div className="flex flex-col justify-between">
                <div className="pb-6">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-b from-teal-500 to-teal-700 text-transparent bg-clip-text">
                    About
                    </span>{" "}
                    Buildy/UI
                </h2>
                <p className="text-lg text-muted-foreground mt-4">
                    {content.about.description}
                </p>
                </div>
                <Statistics />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Statistics = () => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {content.statistics.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
