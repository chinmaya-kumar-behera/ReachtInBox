// components/ThemeSwitcher.js
import useTheme from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeSwitcher;
