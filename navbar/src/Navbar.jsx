import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

import React from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLink = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleLink}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div
            className={
              showLinks ? `links-container show-container` : "links-container"
            }
          >
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
