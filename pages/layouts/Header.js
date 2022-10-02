import React from "react";
import Link from "next/link"

function Header() {
  return (
    <div className="header">
      <a href="#default" class="logo">
        CompanyLogo
      </a>
          <div className="header-right">
              <Link href="/">Home</Link>
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
