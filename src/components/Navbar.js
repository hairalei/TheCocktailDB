import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();

  const resetSearch = () => {
    setSearchTerm("a");
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" onClick={resetSearch}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" onClick={resetSearch}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
