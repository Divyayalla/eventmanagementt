import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const aa1 = {
    color: "purple",
  };

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    setShowNavbar(location.pathname !== "/" && location.pathname !== "/formlogin");
  }, [location]);

  if (!showNavbar) {
    return null; // Do not render the Navbar if on the signin page
  }
  
  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-7 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-1" href="#" style={aa1}>
            olivia wilson
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Package">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Register">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Gallary">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
