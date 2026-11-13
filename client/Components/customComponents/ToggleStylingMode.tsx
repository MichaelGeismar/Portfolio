import { useTheme } from "../../contexts/ThemeContext";

function ToggleStylingMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="ThemeToggle">
      <span className="ThemeToggleText">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider" aria-hidden="true" />
    </label>
  );
}

export default ToggleStylingMode;
