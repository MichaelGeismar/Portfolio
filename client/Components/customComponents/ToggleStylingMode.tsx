import { useTheme } from "../../contexts/ThemeContext";

function ToggleStylingMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <span className="ThemeToggleText">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>

      <label className="ThemeToggle">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </>
  );
}

export default ToggleStylingMode;
