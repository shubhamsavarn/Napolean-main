import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  const styles = {
    hashtags: {
        fontSize: "18px",
    },
    heading_mini: {
      fontSize: "12px",
    },
  };

  return (
    <div>
      <nav className="navbar navbar-light px-md-4 px-2 align-items-center justify-content-center justify-content-md-between">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            width="48"
            height="48"
            className="d-inline-block align-top"
            alt=""
          />
        </a>

        <div className="d-none d-md-block">
            
          <span className="navbar-text" style={styles.hashtags}>
            <a class="nav-link" target="_blank" href="https://gitlab.com/ahampriyanshu/napoleyn-chrome">Get the Chrome Extension</a>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;