import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <h1 className="jadielle_center white_bg">
        Centre de soin Pokemon de Jadielle
      </h1>
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
