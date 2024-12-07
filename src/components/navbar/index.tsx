import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DarkMode } from "../elements/dark-mode";
import { MobileSheet } from "./mobile-sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="flex items-center md:hidden">
          <MobileSheet />
        </div>
        
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">UI BuildY</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/docs"
            className="transition-colors hover:text-foreground/80"
          >
            Documentation
          </Link>
          <Link
            to="/components"
            className="transition-colors hover:text-foreground/80"
          >
            Components
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <DarkMode />
            <Button variant="outline" asChild>
              <Link to="/login">
                Sign In
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
} 