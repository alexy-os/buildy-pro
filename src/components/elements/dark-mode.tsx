import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DarkMode() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
      console.log("Initial dark mode:", initialDark);
      return initialDark;
    }
    return false;
  });
  
  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          console.log('Classes changed:', document.documentElement.className);
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      console.log("Saved theme on mount:", savedTheme);
      const root = document.documentElement;
      console.log("Initial classes:", root.classList.toString());
    }
  }, []);
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      console.log("Current classes before change:", root.classList.toString());
      
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      
      localStorage.setItem("theme", isDark ? "dark" : "light");
      console.log("Theme set to:", isDark ? "dark" : "light");
      console.log("Current classes after change:", root.classList.toString());
    }
  }, [isDark]);
  
  const toggleDarkMode = React.useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      console.log("Toggling dark mode. New value:", newValue);
      return newValue;
    });
  }, []);
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          setIsDark(e.matches);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}