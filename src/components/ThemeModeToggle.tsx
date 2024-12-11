import { Moon, Sun } from "lucide-react";


import { Button } from "./ui/button";
import { useStore } from "../store/useStore";


export function ThemeModeToggle() {
  const { theme, setTheme } = useStore((state) => state); // Get the theme and setter function

  // Toggle the theme when the button is clicked
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
