import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      >
        {theme === "light" ? (
          <Moon className="theme-icon" size={18} />
        ) : (
          <Sun className="theme-icon" size={18} />
        )}
      </button>
    );
  };
  
  export default ThemeToggle;