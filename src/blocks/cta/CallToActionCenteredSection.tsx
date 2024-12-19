import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const content = {
  title: "Unlock Your Business Potential",
  description: "Discover innovative solutions that drive growth, efficiency, and transformative success for your organization.",
  buttons: [
    {
      id: "learn-more",
      text: "Explore Solutions",
      variant: "outline",
      icon: ArrowRight
    },
    {
      id: "get-started", 
      text: "Start Your Journey",
      variant: "default",
      icon: ArrowRight
    }
  ]
} as const

export const CallToActionCenteredSection = () => {
  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center rounded-lg bg-accent p-8 md:rounded-xl lg:p-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold md:text-4xl">
              {content.title}
            </h2>
            <p className="text-muted-foreground lg:text-lg">
              {content.description}
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {content.buttons.map((button) => (
              <Button 
                key={button.id}
                variant={button.variant}
                className="w-full sm:w-auto"
              >
                {button.text}
                <button.icon className="ml-2 h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}