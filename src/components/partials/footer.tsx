import * as React from "react";
import { cn } from "@/lib/utils";

export function Footer({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "border-t bg-background",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-center sm:justify-end">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by UI Blocks Team
          </p>
        </div>
      </div>
    </footer>
  );
} 