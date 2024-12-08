import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    __INITIAL_THEME__?: "dark" | "light";
  }
}

export function DarkMode() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.__INITIAL_THEME__ === "dark";
  });
  
  const handleThemeChange = React.useCallback((dark: boolean) => {
    const root = document.documentElement;
    const theme = dark ? "dark" : "light";

    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", theme);
    window.__INITIAL_THEME__ = theme;
  }, []);
  
  const toggleDarkMode = React.useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      handleThemeChange(newValue);
      return newValue;
    });
  }, [handleThemeChange]);
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
        handleThemeChange(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [handleThemeChange]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}