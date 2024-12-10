import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/lib/settings";

declare global {
  interface Window {
    __INITIAL_THEME__?: "dark" | "light";
  }
}

export function DarkMode() {
  const { getSetting, setSetting } = useSettings()
  const isDark = getSetting('theme', 'light') === 'dark'
  
  const toggleDarkMode = React.useCallback(() => {
    const newTheme = isDark ? 'light' : 'dark'
    setSetting('theme', newTheme)
    document.documentElement.classList.toggle('dark', !isDark)
  }, [isDark, setSetting])
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setSetting('theme', e.matches ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', e.matches)
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [setSetting]);

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