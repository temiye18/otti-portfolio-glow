
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize with system preference or dark mode
  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-6 bg-secondary/90 rounded-full shadow-inner overflow-hidden">
        {/* Track */}
        <div 
          className={`absolute inset-0 transition-colors duration-300
            ${theme === "dark" ? "bg-secondary" : "bg-blue-100"}`}
        />
        
        {/* Sun/Moon icons */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-amber-400">
          <Sun className="h-3 w-3" />
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 text-blue-600">
          <Moon className="h-3 w-3" />
        </div>
        
        {/* Slider thumb */}
        <div 
          className={`absolute top-1 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 z-10
            ${theme === "dark" 
              ? "translate-x-7 bg-blue-500" 
              : "translate-x-1 bg-amber-400"
            }`}
        />
        
        {/* Glow effect */}
        <div 
          className={`absolute w-10 h-10 rounded-full transition-all duration-300
            ${theme === "dark" 
              ? "right-0 opacity-20 bg-blue-400 blur-md"
              : "left-0 opacity-20 bg-amber-300 blur-md"
            }`}
        />
      </div>
    </button>
  );
}
