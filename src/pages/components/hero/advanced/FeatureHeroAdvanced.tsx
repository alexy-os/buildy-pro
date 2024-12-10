import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { memo } from "react";

/**
 * Button configuration for hero section
 * @interface HeroButton
 * @extends {Pick<ButtonProps, "onClick" | "variant">}
 */
interface HeroButton extends Pick<ButtonProps, "onClick" | "variant"> {
    /** Button text content */
    text: string;
    /** Optional custom className */
    className?: string;
}

/**
 * Props for the FeatureHeroAdvanced component
 * @interface HeroProps
 */
interface HeroProps {
    /** Main title text */
    title?: string;
    /** Description text below the title */
    description?: string;
    /** Primary CTA button configuration */
    primaryButton?: HeroButton;
    /** Secondary CTA button configuration */
    secondaryButton?: HeroButton;
    /** Optional custom className for the root element */
    className?: string;
    /** Optional props for the image container */
    imageProps?: React.HTMLProps<HTMLDivElement>;
    /** Optional custom className for the title */
    titleClassName?: string;
    /** Optional custom className for the description */
    descriptionClassName?: string;
}

/**
 * Default content configuration
 * @constant
 */
const defaultContent = {
    title: "Transform Your Workflow",
    description: "Streamline your development process with our powerful tools and components.",
    buttons: {
        primary: {
            text: "Try Now",
            variant: "default" as const,
        },
        secondary: {
            text: "View Demo",
            variant: "outline" as const,
        },
    }
} as const;

// Memoized button component for performance
const HeroButton = memo(({ text, className, ...props }: HeroButton) => (
    <Button className={cn("px-6 py-3", className)} {...props}>
        {text}
    </Button>
));
HeroButton.displayName = "HeroButton";

/**
 * Advanced Feature Hero Section Component
 * 
 * @component
 * @example
 * // Basic usage
 * <FeatureHeroAdvanced />
 * 
 * @example
 * // Advanced usage with custom configuration
 * <FeatureHeroAdvanced
 *   title="Custom Hero Title"
 *   description="Custom description text"
 *   primaryButton={{
 *     text: "Get Started",
 *     onClick: () => console.log("Primary clicked"),
 *     variant: "default"
 *   }}
 *   secondaryButton={{
 *     text: "Learn More",
 *     onClick: () => console.log("Secondary clicked"),
 *     variant: "outline"
 *   }}
 *   className="my-custom-hero"
 *   imageProps={{
 *     className: "custom-image",
 *     style: { backgroundColor: "#f0f0f0" }
 *   }}
 * />
 * 
 * @param {HeroProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export const FeatureHeroAdvanced = memo(({
    title = defaultContent.title,
    description = defaultContent.description,
    primaryButton = defaultContent.buttons.primary,
    secondaryButton = defaultContent.buttons.secondary,
    className,
    imageProps,
    titleClassName,
    descriptionClassName,
}: HeroProps) => (
    <section 
        className={cn(
            "grid min-h-[600px] grid-cols-1 items-center gap-8 lg:grid-cols-2",
            className
        )}
        aria-label="Feature Introduction"
    >
        <div className="flex flex-col items-start space-y-4">
            <h1 
                className={cn(
                    "text-4xl font-bold sm:text-6xl",
                    titleClassName
                )}
            >
                {title}
            </h1>
            <p 
                className={cn(
                    "text-lg text-muted-foreground",
                    descriptionClassName
                )}
            >
                {description}
            </p>
            <div className="flex flex-wrap gap-4">
                <HeroButton {...primaryButton} />
                <HeroButton {...secondaryButton} />
            </div>
        </div>
        <div 
            className={cn(
                "aspect-square rounded-lg bg-muted",
                imageProps?.className
            )}
            {...imageProps}
            role="img"
            aria-hidden="true"
        />
    </section>
));

// Set display name for React DevTools
FeatureHeroAdvanced.displayName = "FeatureHeroAdvanced";

/**
 * @example
 * // Example of component integration in a page
 * import { FeatureHeroAdvanced } from './components/hero';
 * 
 * const HomePage = () => {
 *   const handlePrimaryClick = () => {
 *     // Handle primary button click
 *   };
 * 
 *   return (
 *     <div className="container mx-auto">
 *       <FeatureHeroAdvanced
 *         primaryButton={{
 *           text: "Get Started",
 *           onClick: handlePrimaryClick,
 *           variant: "default"
 *         }}
 *       />
 *     </div>
 *   );
 * };
 */