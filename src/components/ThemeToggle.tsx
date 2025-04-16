
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Initialize with system preference or dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary dark:text-amber-300 text-primary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <div className="flex items-center justify-center w-8 h-8 bg-secondary/80 rounded-full shadow-inner">
          <Sun className="h-5 w-5 text-amber-400" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-8 h-8 bg-secondary/80 rounded-full shadow-inner">
          <Moon className="h-5 w-5 text-primary" />
        </div>
      )}
    </button>
  );
}
