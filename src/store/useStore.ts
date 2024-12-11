import {create} from 'zustand';

// Define the types for your store's state
interface PortfolioState {
  theme: 'light' | 'dark';  // Example state for theme management
  setTheme: (theme: 'light' | 'dark') => void; // Function to set the theme
  
}

// Create a Zustand store using `create` function
export const useStore = create<PortfolioState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),

}));

