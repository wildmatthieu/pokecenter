import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

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
    <nav>
      <h1 className="jadielle_center white_bg">
        Centre de soin Pokemon de Jadielle
      </h1>
      <button
        type="button"
        onClick={handleChangeTheme}
        className="switch_theme_btn"
      >
        Switch theme to {theme === "light" ? "dark" : "light"}
      </button>
      <section>
        <div className="front_office">
          <h2 className="white_bg">Front Office</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="back_office">
          <h2 className="white_bg">Back Office</h2>
          <ul className="flex">
            <li>
              <Link to="/backoffice/staff">Staff</Link>
            </li>
            <li>
              <Link to="/backoffice/action">Action</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Header;
