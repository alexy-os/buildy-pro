import { Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type FAQContent = {
  promo: string;
  title: string;
  description: string;
  contactText: string;
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
};

const content: FAQContent = {
  promo: "FAQ",
  title: "Why Choose shadcn/ui?",
  description:
    "Discover the reasons why shadcn/ui is the ideal choice for modern, flexible, and accessible UI components, empowering developers to build faster and smarter.",
  contactText: "Any questions? Reach out",
  faqs: [
    {
      id: "faq1",
      question: "What makes shadcn/ui unique?",
      answer:
        "shadcn/ui leverages the power of Radix UI and Tailwind CSS to provide accessible, customizable, and modular components for rapid development.",
    },
    {
      id: "faq2",
      question: "Is shadcn/ui suitable for production?",
      answer:
        "Absolutely. With a focus on accessibility, performance, and customization, shadcn/ui is designed for production-ready applications.",
    },
    {
      id: "faq3",
      question: "How does it integrate with Tailwind CSS?",
      answer:
        "shadcn/ui components come with pre-built Tailwind CSS classes, making customization and theming effortless for developers.",
    },
    {
      id: "faq4",
      question: "Is it open source?",
      answer:
        "Yes! shadcn/ui is completely open source, offering developers the freedom to use and adapt components in any project.",
    },
    {
      id: "faq5",
      question: "What kind of support is available?",
      answer:
        "shadcn/ui has comprehensive documentation and an active community to assist developers with any challenges.",
    },
  ],
} as const;

export const FAQContentSection = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">{content.promo}</Badge>
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-xl">
              {content.title}
            </h4>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {content.description}
            </p>
          </header>
          <Button className="gap-4 w-fit">
            {content.contactText} <Send className="w-4 h-4" />
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="font-bold text-muted-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);