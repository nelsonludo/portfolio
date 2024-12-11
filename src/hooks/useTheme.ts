import { useEffect } from "react";
import { useStore } from "../store/useStore";
 // Assuming store is in the 'store.ts' file

// Hook to apply the theme to the <html> element
export const useTheme = () => {
  const { theme } = useStore(); // Get theme from Zustand store

  useEffect(() => {
    const root = document.documentElement;

    // Remove previous theme classes
    root.classList.remove("light", "dark");

    // Add the current theme class
    root.classList.add(theme);

  }, [theme]); // Re-run when theme changes
};
