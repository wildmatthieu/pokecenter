import { useTheme } from "../contexts/ThemeContext";

const SwitchThemeBtn = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
    // les lignes ci-dessus peuvent être simplifier en une ternaire ci-dessous :
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleChangeTheme}
        className="switch_theme_btn"
      >
        Switch theme to {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};

export default SwitchThemeBtn;
