import React from "react";
import "../index.css";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkStyle = {
    display: "flex",
    gap: "10px",
  };
  return (
    <nav>
      <div style={linkStyle}>
        {links.map((link, index) => (
          <div key={index}>
            <a href={`#${link}`}>{link}</a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
