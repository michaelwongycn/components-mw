import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ brand, menuItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {brand && (
          <Link className="navbar-brand" to={brand.link}>
            {brand.name}
          </Link>
        )}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
