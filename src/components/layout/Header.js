import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-5 ">
      {" "}
      {/* Bootstrap used */}
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home {/*this is used for icon */}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/event/add" className="nav-link">
                <i className="fas fa-plus" /> Add Event{" "}
                {/*this is used for icon */}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About{" "}
                {/*this is used for icon */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
