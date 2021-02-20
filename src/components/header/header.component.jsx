import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { routes } from "../../shared/routes/routes";
import { logout } from '../../redux/auth/auth.actions';
// Style
import "./header.styles.scss";

const Header = ({logout}) => {

  const logoutHandler = () => {
    // Remove auth state from localStorege;
    localStorage.removeItem('isAuthenticated')
    // Dispatch logout action
    logout();
  }
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
          <button className="header__nav-link" onClick={logoutHandler}>Logout</button>
      </nav>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})
export default connect(null,mapDispatchToProps)(Header);
