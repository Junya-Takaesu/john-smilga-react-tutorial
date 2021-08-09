import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/" style={{ color: "gray" }}>
            Home but with page reload
          </a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
