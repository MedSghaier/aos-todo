import { Link } from "react-router-dom";

import { routes } from "../../shared/routes/routes";
// Style
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {routes.map(route => (
            <li className="header__nav-item" key={route.label}>
              <Link to={route.path} className="header__nav-link">{route.label}</Link>
            </li>
          ))}
        </ul>
          <button className="header__nav-link">Logout</button>
      </nav>
    </header>
  );
};

export default Header;
