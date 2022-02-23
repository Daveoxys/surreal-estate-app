import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <img
          className="navbar-logo"
          data-testid="logo"
          src={logo}
          alt="surreal-logo"
        />
        <Link to="/" className="navbar-links-item">
          View Properties
        </Link>
        <Link to="/add-property" className="navbar-links-item">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
