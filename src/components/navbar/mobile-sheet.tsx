import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { DarkMode } from "../elements/dark-mode";

export function MobileSheet() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation for mobile devices
        </SheetDescription>
        <nav className="flex flex-col gap-4">
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center gap-2 px-2 py-1 text-lg font-semibold text-left w-full hover:text-primary transition-colors"
          >
            UI Blocks
          </button>
          <button 
            onClick={() => handleNavigation("/docs")} 
            className="px-2 py-1 hover:text-primary text-left w-full transition-colors"
          >
            Documentation
          </button>
          <button 
            onClick={() => handleNavigation("/components")} 
            className="px-2 py-1 hover:text-primary text-left w-full transition-colors"
          >
            Components
          </button>
          <div className="mt-auto">
            <DarkMode />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 